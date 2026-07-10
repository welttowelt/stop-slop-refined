(() => {
  document.documentElement.classList.add("js");
  const DATA = window.STOP_SLOP_DATA;
  if (!DATA) throw new Error("STOP_SLOP_DATA is missing. Run scripts/generate-site-data.mjs.");

  const TIER_1 = DATA.tier1 || [];
  const TIER_2 = DATA.tier2 || [];
  const TIER_3 = DATA.tier3 || [];
  const OPENERS = DATA.openers || [];
  const FILLERS = DATA.fillers || [];
  const PATTERNS = DATA.patterns || [];

  const esc = value => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
  const escapeRegex = value => String(value).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

  function expandWordEntries(entries) {
    return entries.flatMap(([label, fix]) => label
      .split("/")
      .map(value => value.replace(/\s*\([^)]*\)\s*/g, "").trim())
      .filter(Boolean)
      .map(value => [value.toLowerCase(), fix]));
  }

  const tier1Map = new Map(expandWordEntries(TIER_1));
  const tier2Map = new Map(expandWordEntries(TIER_2));
  const tier3Set = new Set(TIER_3.map(word => word.toLowerCase()));

  const PROOFS = [
    {
      before: 'This <span class="cut">comprehensive</span> platform provides a <span class="cut">seamless</span> way to approve expenses from the receipt review screen.',
      after: "Reviewers can approve an expense from the same screen where they check the receipt.",
      notes: ["puffery", "hidden actor"]
    },
    {
      before: '<span class="flag">Here&#39;s the thing:</span> the rollout is <span class="cut">not a tooling problem. It is a review problem. Let that sink in.</span>',
      after: "The rollout is blocked because two reviewers still need to approve it.",
      notes: ["throat-clearing", "binary contrast"]
    },
    {
      before: 'The service uses idempotency keys. <span class="flag">An idempotency key prevents the same payment request from running twice when a client retries it.</span>',
      after: "The service uses idempotency keys, which stop a retried payment request from running twice.",
      notes: ["keep the term", "join connected clauses"]
    }
  ];

  let proofIndex = 0;
  const proofBefore = document.querySelector("[data-proof-before]");
  const proofAfter = document.querySelector("[data-proof-after]");
  const proofNotes = document.querySelector("[data-proof-notes]");
  const proofCount = document.querySelector("[data-proof-index]");
  const proofTotal = document.querySelector("[data-proof-total]");

  function renderProof(index) {
    const proof = PROOFS[index];
    if (!proofBefore || !proofAfter || !proofNotes) return;
    proofBefore.innerHTML = proof.before;
    proofAfter.textContent = proof.after;
    proofNotes.innerHTML = proof.notes.map(note => "<li>" + esc(note) + "</li>").join("");
    proofCount.textContent = String(index + 1).padStart(2, "0");
    proofTotal.textContent = String(PROOFS.length).padStart(2, "0");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [proofBefore, proofAfter].forEach(node => {
        node.animate(
          [{ opacity: .2, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 320, easing: "cubic-bezier(.22,.75,.2,1)" }
        );
      });
    }
  }

  document.querySelector("[data-proof-next]")?.addEventListener("click", () => {
    proofIndex = (proofIndex + 1) % PROOFS.length;
    renderProof(proofIndex);
  });
  renderProof(0);

  function stripCodeTicks(value) {
    return value.replace(/^\x60|\x60$/g, "");
  }

  function buildFillerPatterns() {
    return FILLERS.map(label => {
      const plain = stripCodeTicks(label);
      if (plain.toLowerCase() === "in today's [x]") {
        return { re: /\bin today'?s [a-z-]+(?:\s[a-z-]+)?\b/gi, label: "filler opener" };
      }
      if (plain.toLowerCase() === "let me know if...") {
        return { re: /\blet me know if\b/gi, label: "filler close" };
      }
      return {
        re: new RegExp("\\b" + escapeRegex(plain).replace(/\s+/g, "\\s+") + "\\b", "gi"),
        label: "filler phrase"
      };
    });
  }

  const detectorPatterns = [
    ...(DATA.detectorPatterns || []).map(pattern => ({
      re: new RegExp(pattern.source, pattern.flags),
      label: pattern.label
    })),
    ...buildFillerPatterns()
  ];

  const phrasePatterns = [
    ...[...tier1Map].filter(([word]) => word.includes(" ")).map(([word, fix]) => ({
      re: new RegExp("\\b" + escapeRegex(word) + "\\b", "gi"),
      type: "t1",
      label: word + " → " + fix
    })),
    ...[...tier2Map].filter(([word]) => word.includes(" ")).map(([word, fix]) => ({
      re: new RegExp("\\b" + escapeRegex(word) + "\\b", "gi"),
      type: "t2",
      label: word + " → " + fix
    }))
  ];

  function collectDetections(text) {
    const spans = [];

    detectorPatterns.forEach(({ re, label }) => {
      re.lastIndex = 0;
      let match;
      while ((match = re.exec(text))) {
        spans.push({ start: match.index, end: match.index + match[0].length, type: "pat", label });
        if (match[0].length === 0) re.lastIndex += 1;
      }
    });

    phrasePatterns.forEach(({ re, type, label }) => {
      re.lastIndex = 0;
      let match;
      while ((match = re.exec(text))) {
        spans.push({ start: match.index, end: match.index + match[0].length, type, label });
      }
    });

    OPENERS.forEach(opener => {
      const clean = stripCodeTicks(opener);
      const re = new RegExp("(?:^|[.!?]\\s+|\\n+)(" + escapeRegex(clean) + ")", "gi");
      let match;
      while ((match = re.exec(text))) {
        const start = match.index + match[0].length - match[1].length;
        spans.push({ start, end: start + match[1].length, type: "open", label: "formulaic opener" });
      }
    });

    const tokenRegex = /[A-Za-z][A-Za-z'-]*/g;
    const tier3Tokens = new Map();
    let token;
    while ((token = tokenRegex.exec(text))) {
      const value = token[0].toLowerCase();
      if (tier1Map.has(value)) {
        spans.push({
          start: token.index,
          end: token.index + token[0].length,
          type: "t1",
          label: token[0] + " → " + tier1Map.get(value)
        });
      } else if (tier2Map.has(value)) {
        spans.push({
          start: token.index,
          end: token.index + token[0].length,
          type: "t2",
          label: token[0] + " → " + tier2Map.get(value)
        });
      } else if (tier3Set.has(value)) {
        const matches = tier3Tokens.get(value) || [];
        matches.push({
          start: token.index,
          end: token.index + token[0].length,
          type: "t3",
          label: token[0] + ": check at density"
        });
        tier3Tokens.set(value, matches);
      }
    }

    tier3Tokens.forEach(matches => {
      if (matches.length > 1) spans.push(...matches);
    });

    const priority = { pat: 5, open: 4, t1: 3, t2: 2, t3: 1 };
    spans.sort((a, b) => a.start - b.start || b.end - a.end || priority[b.type] - priority[a.type]);

    const merged = [];
    for (const span of spans) {
      const overlap = merged.find(item => span.start < item.end && span.end > item.start);
      if (!overlap) merged.push({ ...span });
      else if (priority[span.type] > priority[overlap.type]) Object.assign(overlap, span);
    }

    return merged.sort((a, b) => a.start - b.start);
  }

  function detect(text) {
    const spans = collectDetections(text);
    const words = (text.match(/\b[\w'-]+\b/g) || []).length;

    if (!text) {
      return {
        html: '<span class="empty">Paste a draft on the left. Review prompts will appear here.</span>',
        spans,
        words
      };
    }

    let cursor = 0;
    let html = "";
    spans.forEach(span => {
      html += esc(text.slice(cursor, span.start));
      html += '<span class="hl hl-' + span.type + '" title="' + esc(span.label) + '">' + esc(text.slice(span.start, span.end)) + "</span>";
      cursor = span.end;
    });
    html += esc(text.slice(cursor));
    return { html: html.replace(/\n/g, "<br>"), spans, words };
  }

  const input = document.getElementById("det-input");
  const output = document.querySelector("[data-det-output]");
  const wordCount = document.querySelector("[data-det-words]");
  const flagCount = document.querySelector("[data-det-flags]");
  const flagUnit = document.querySelector("[data-det-unit]");
  const summary = document.querySelector("[data-det-summary]");
  const hits = document.querySelector("[data-det-hits]");
  const sample = input?.value || "";

  function updateDetector() {
    if (!input || !output) return;
    const result = detect(input.value);
    output.innerHTML = result.html;
    wordCount.textContent = String(result.words);
    flagCount.textContent = String(result.spans.length);
    flagUnit.textContent = result.spans.length === 1 ? "prompt" : "prompts";

    if (!input.value) {
      summary.innerHTML = "The browser pass is ready.";
      hits.innerHTML = "";
      return;
    }

    if (result.spans.length === 0) {
      summary.innerHTML = "<strong>No browser-detectable prompt found.</strong> Read the structure, evidence, and rhythm yourself.";
      hits.innerHTML = "";
      return;
    }

    summary.innerHTML = "<strong>" + result.spans.length + " review prompt" + (result.spans.length === 1 ? "" : "s") + ".</strong> Read each in context. This pass cannot identify who wrote the draft.";
    const unique = [...new Set(result.spans.map(span => span.label))].slice(0, 9);
    hits.innerHTML = unique.map(label => "<li>" + esc(label) + "</li>").join("");
  }

  if (input) {
    let updateTimer;
    input.addEventListener("input", () => {
      clearTimeout(updateTimer);
      updateTimer = setTimeout(updateDetector, 60);
    });
    updateDetector();
  }

  document.querySelector("[data-det-reset]")?.addEventListener("click", () => {
    input.value = sample;
    updateDetector();
    input.focus();
  });

  document.querySelector("[data-det-clear]")?.addEventListener("click", () => {
    input.value = "";
    updateDetector();
    input.focus();
  });

  function renderWords(host, entries) {
    if (!host) return;
    host.innerHTML = entries.map(entry => {
      const [word, fix] = Array.isArray(entry) ? entry : [entry, "check the use in context"];
      return '<div class="word-entry"><b>' + esc(word) + "</b><small>" + esc(fix) + "</small></div>";
    }).join("");
  }

  renderWords(document.querySelector('[data-tier="1"]'), TIER_1);
  renderWords(document.querySelector('[data-tier="2"]'), TIER_2);
  renderWords(document.querySelector('[data-tier="3"]'), TIER_3);

  const patternHost = document.querySelector("[data-patterns]");
  if (patternHost) {
    patternHost.innerHTML = PATTERNS.map(pattern => {
      const examples = (pattern.examples || []).slice(0, 2).join(" / ");
      return '<article class="pattern-entry"><span>' + esc(pattern.group) + "</span><h3>" + esc(pattern.title) + "</h3><p>" + esc(pattern.fix || examples || "Review this pattern in context.") + "</p></article>";
    }).join("");
  }

  function bindTabs(buttonSelector, panelSelector, buttonKey, panelKey) {
    document.querySelectorAll(buttonSelector).forEach(button => {
      button.addEventListener("click", () => {
        const value = button.dataset[buttonKey];
        document.querySelectorAll(buttonSelector).forEach(item => {
          item.setAttribute("aria-selected", String(item === button));
        });
        document.querySelectorAll(panelSelector).forEach(panel => {
          panel.classList.toggle("active", panel.dataset[panelKey] === value);
        });
      });
    });
  }

  bindTabs("[data-diff-tab]", "[data-diff-panel]", "diffTab", "diffPanel");
  bindTabs("[data-install-tab]", "[data-install-pane]", "installTab", "installPane");

  document.querySelectorAll("[data-copy]").forEach(button => {
    button.addEventListener("click", async () => {
      const code = button.closest("[data-install-pane]")?.querySelector("code");
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.innerText);
        const original = button.textContent;
        button.textContent = "Copied";
        button.classList.add("copied");
        window.setTimeout(() => {
          button.textContent = original;
          button.classList.remove("copied");
        }, 1400);
      } catch {
        button.textContent = "Select the command";
      }
    });
  });

  const progress = document.querySelector("[data-progress]");
  function updateProgress() {
    if (!progress) return;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const value = available > 0 ? Math.min(1, window.scrollY / available) : 0;
    progress.style.width = (value * 100) + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("in-view"));
  }
})();
