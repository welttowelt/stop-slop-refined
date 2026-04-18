/* =====================================================
   stop slop — app.js
   powers: theme toggle, hero demo cycle, live detector,
           examples renderer, tier/pattern renderers,
           install tabs, copy buttons
   ===================================================== */

(() => {
  // ---------- curated subset used by the browser demo ----------

  const TIER_1 = [
    ["delve", "explore"], ["delve into", "look at"],
    ["utilize", "use"],
    ["robust", "strong"],
    ["comprehensive", "complete"],
    ["pivotal", "important"],
    ["transformative", "describe what changed"],
    ["landscape", "field"],
    ["tapestry", "name the complexity"],
    ["paradigm", "model"],
    ["embark", "start"],
    ["beacon", "rewrite"],
    ["testament to", "shows"],
    ["seamless", "smooth"],
    ["impactful", "effective"],
    ["actionable", "concrete"],
    ["thought leader", "expert"],
    ["best practices", "what works"],
    ["in order to", "to"],
    ["due to the fact that", "because"],
    ["serves as", "is"],
    ["boasts", "has"],
    ["commence", "start"],
    ["ascertain", "find out"],
    ["endeavor", "effort"],
    ["deep dive", "look at"],
    ["unpack", "explain"],
    ["ever-evolving", "changing"],
    ["watershed moment", "turning point"],
    ["at its core", "cut it"]
  ];

  const TIER_2 = [
    ["harness", "use"],
    ["navigate", "handle"],
    ["elevate", "improve"],
    ["empower", "enable"],
    ["streamline", "simplify"],
    ["bolster", "strengthen"],
    ["spearhead", "lead"],
    ["resonate", "connect"],
    ["ecosystem", "network"],
    ["myriad", "many"],
    ["plethora", "many"],
    ["encompass", "include"],
    ["catalyze", "trigger"],
    ["cultivate", "build"],
    ["illuminate", "clarify"],
    ["cornerstone", "foundation"],
    ["paramount", "most important"],
    ["poised", "ready"],
    ["nascent", "early"],
    ["overarching", "broad"],
    ["augment", "add to"]
  ];

  const TIER_3 = [
    "significant", "effective", "dynamic", "scalable", "compelling",
    "valuable", "key", "vital", "remarkable", "sophisticated"
  ];

  const OPENERS = [
    "Certainly,", "Absolutely,", "Of course,", "Great question,",
    "Moreover,", "Furthermore,", "Additionally,", "Importantly,", "Interestingly,"
  ];

  const FILLERS = [
    "Here's the thing", "It turns out", "The truth is", "Let me be clear",
    "It's worth noting", "At the end of the day", "When it comes to",
    "In today's", "The future looks bright", "Only time will tell",
    "As we move forward", "I hope this helps", "Let me know if",
    "Without further ado", "In conclusion", "In summary"
  ];

  const PATTERNS = [
    {
      group: "sentence",
      title: "binary contrast",
      egHtml: `<code>not x, but y</code> · <code>the real issue is not x. it's y.</code>`,
      fix: "state y directly."
    },
    {
      group: "sentence",
      title: "negative listing",
      egHtml: `<code>not a tool. not a workflow. a mindset.</code>`,
      fix: "say the actual point without the runway."
    },
    {
      group: "sentence",
      title: "rhetorical question transition",
      egHtml: `<code>so why does this matter?</code> · <code>but what does this mean for teams?</code>`,
      fix: "if you know the answer, say it."
    },
    {
      group: "sentence",
      title: "signposting",
      egHtml: `<code>let's dive in</code> · <code>in this section</code> · <code>here's what you need to know</code>`,
      fix: "cut the announcement and start with the point."
    },
    {
      group: "sentence",
      title: "reasoning-chain leakage",
      egHtml: `<code>let me think step by step</code> · <code>working through this logically</code>`,
      fix: "give the conclusion, then the reasoning."
    },
    {
      group: "structural",
      title: "rule of three everywhere",
      egHtml: `too many triads make writing feel generated.`,
      fix: "use one, two, or four when that fits better."
    },
    {
      group: "structural",
      title: "uniform sentence length",
      egHtml: `three even sentences in a row is one of the clearest ai signals.`,
      fix: "vary rhythm on purpose."
    },
    {
      group: "structural",
      title: "uniform paragraph shape",
      egHtml: `claim · explanation · example · transition — on repeat.`,
      fix: "vary openings, lengths, and landing points."
    },
    {
      group: "structural",
      title: "heading plus restatement",
      egHtml: `<code>performance</code> → <em>performance matters.</em>`,
      fix: "let the heading do its job."
    },
    {
      group: "structural",
      title: "list inflation",
      egHtml: `<code>5 ways ai is changing x</code>, each bullet says almost nothing.`,
      fix: "cut to the few points that actually matter."
    },
    {
      group: "voice",
      title: "false agency",
      egHtml: `<code>the data tells us</code> · <code>the market decided</code>`,
      fix: "name the human actor when the actor matters."
    },
    {
      group: "voice",
      title: "vague attribution",
      egHtml: `<code>experts believe</code> · <code>research shows</code> · <code>industry observers note</code>`,
      fix: "cite the source or cut the claim."
    },
    {
      group: "voice",
      title: "significance inflation",
      egHtml: `<code>a pivotal moment in the evolution of</code> · <code>a testament to</code>`,
      fix: "describe what happened and stop."
    },
    {
      group: "voice",
      title: "promotional description",
      egHtml: `<code>vibrant hub</code> · <code>thriving ecosystem</code> · <code>nestled in</code>`,
      fix: "describe the thing plainly."
    },
    {
      group: "voice",
      title: "emotional flatline",
      egHtml: `<code>what surprised me most was</code> · <code>i was fascinated to discover</code>`,
      fix: "let the content create the feeling."
    }
  ];

  const EXAMPLES = [
    {
      beforeHtml: `<mark>Here's the thing:</mark> building products is hard. <del>Not because the tech is hard. Because people are hard.</del> <del>Let that sink in.</del>`,
      afterText: "Building products is hard. The tech is manageable. People are not.",
      changes: ["removed throat-clearing", "removed contrast template", "removed emphasis crutch"]
    },
    {
      beforeHtml: `<del>In today's fast-moving landscape,</del> teams need to <del>leverage robust</del> workflows <del>in order to navigate</del> complexity.`,
      afterText: "Teams need workflows that hold up under pressure.",
      changes: ["cut stacked buzzwords", "removed filler", "replaced abstract phrasing with a direct claim"]
    },
    {
      beforeHtml: `<del>Great question!</del> This platform <del>serves as a comprehensive</del> hub for modern collaboration. <del>I hope this helps.</del>`,
      afterText: "This platform brings docs, chat, and task tracking into one place.",
      changes: ["removed chatbot artifacts", "replaced inflated verbs", "named actual product behavior"]
    },
    {
      beforeHtml: `<del>Industry observers note that</del> adoption has accelerated, <del>showcasing the transformative potential of</del> the product.`,
      afterText: "Usage doubled over six months after the team cut setup time from two days to twenty minutes.",
      changes: ["replaced vague attribution with a concrete claim", "cut significance inflation", "replaced abstract praise with a measurable outcome"]
    },
    {
      beforeHtml: `<del>Let's dive into five reasons this matters:</del><br>1. speed · 2. quality · 3. innovation · 4. alignment · 5. growth`,
      afterText: "This matters for two reasons. It cuts review time, and it reduces the number of decisions teams have to revisit later.",
      changes: ["removed signposting", "cut inflated list", "kept only points that carried real meaning"]
    },
    {
      beforeHtml: `<del>The future looks bright as we move forward into this new era of possibility.</del>`,
      afterText: "The next milestone is simple: ship the rollout, measure retention, and see if users come back without prompting.",
      changes: ["removed generic conclusion", "replaced mood with an actual next step"]
    }
  ];

  // compact set for hero demo (3 of the best)
  const HERO_DEMO = [
    {
      beforeHtml: `<span class="highlight">In today's fast-moving landscape,</span> teams <span class="strike">need to leverage robust</span> workflows <span class="strike">in order to navigate</span> complexity.`,
      afterHtml: `<span class="kept">Teams need workflows that hold up under pressure.</span>`,
      changes: ["landscape", "leverage", "robust", "in order to", "navigate"]
    },
    {
      beforeHtml: `<span class="strike">Great question!</span> This platform <span class="strike">serves as a comprehensive</span> hub for modern collaboration. <span class="strike">I hope this helps.</span>`,
      afterHtml: `<span class="kept">This platform brings docs, chat, and task tracking into one place.</span>`,
      changes: ["chatbot opener", "serves as", "comprehensive", "filler close"]
    },
    {
      beforeHtml: `<span class="highlight">Here's the thing:</span> building products is hard. <span class="strike">Not because the tech is hard. Because people are hard.</span> <span class="strike">Let that sink in.</span>`,
      afterHtml: `<span class="kept">Building products is hard. The tech is manageable. People are not.</span>`,
      changes: ["throat-clearing", "not x, but y", "emphasis crutch"]
    },
    {
      beforeHtml: `<span class="strike">Industry observers note that</span> adoption has accelerated, <span class="strike">showcasing the transformative potential of</span> the product.`,
      afterHtml: `<span class="kept">Usage doubled over six months after the team cut setup time from two days to twenty minutes.</span>`,
      changes: ["vague attribution", "significance inflation", "abstract praise"]
    },
    {
      beforeHtml: `<span class="highlight">Let's dive into</span> five reasons this matters: <span class="strike">speed, quality, innovation, alignment, growth.</span>`,
      afterHtml: `<span class="kept">This matters for two reasons. It cuts review time, and it reduces decisions teams revisit later.</span>`,
      changes: ["let's dive in", "list inflation"]
    },
    {
      beforeHtml: `<span class="strike">The future looks bright as we move forward into this new era of possibility.</span>`,
      afterHtml: `<span class="kept">The next milestone is simple: ship the rollout, measure retention, and see if users come back without prompting.</span>`,
      changes: ["generic ending", "mood over substance"]
    }
  ];

  // ---------- theme toggle ----------

  const root = document.documentElement;
  const saved = localStorage.getItem("slop-theme");
  if (saved) root.setAttribute("data-theme", saved);
  else if (matchMedia("(prefers-color-scheme: dark)").matches) root.setAttribute("data-theme", "dark");

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("slop-theme", next);
  });

  // ---------- hero demo cycle ----------

  const heroBefore = document.querySelector("[data-demo-before]");
  const heroAfter = document.querySelector("[data-demo-after]");
  const heroChanges = document.querySelector("[data-demo-changes]");
  const heroIndex = document.querySelector("[data-demo-index]");
  const heroTotal = document.querySelector("[data-demo-total]");
  const heroNext = document.querySelector("[data-demo-next]");
  let heroI = 0;
  let heroTimer = null;

  function renderHero(i) {
    const d = HERO_DEMO[i];
    if (!d) return;
    heroBefore.classList.remove("fadein");
    heroAfter.classList.remove("fadein");
    heroChanges.innerHTML = "";
    heroBefore.innerHTML = d.beforeHtml;
    heroAfter.innerHTML = d.afterHtml;
    d.changes.forEach(c => {
      const li = document.createElement("li");
      li.textContent = c;
      heroChanges.appendChild(li);
    });
    if (heroIndex) heroIndex.textContent = String(i + 1);
    // trigger a micro-animation
    requestAnimationFrame(() => {
      heroBefore.classList.add("fadein");
      heroAfter.classList.add("fadein");
    });
  }

  function cycleHero() {
    heroI = (heroI + 1) % HERO_DEMO.length;
    renderHero(heroI);
  }

  if (heroBefore) {
    heroTotal.textContent = String(HERO_DEMO.length);
    renderHero(0);
    heroTimer = setInterval(cycleHero, 4800);
    heroNext?.addEventListener("click", () => {
      clearInterval(heroTimer);
      cycleHero();
      heroTimer = setInterval(cycleHero, 4800);
    });
  }

  // add small fade-in style dynamically
  const s = document.createElement("style");
  s.textContent = `
    [data-demo-before], [data-demo-after] { transition: opacity .35s ease, transform .35s ease; opacity: .2; transform: translateY(4px); }
    [data-demo-before].fadein, [data-demo-after].fadein { opacity: 1; transform: none; }
  `;
  document.head.appendChild(s);

  // ---------- detector ----------

  const detInput = document.getElementById("det-input");
  const detOutput = document.querySelector("[data-det-output]");
  const detFlags = document.querySelector("[data-det-flags]");
  const detWords = document.querySelector("[data-det-words]");
  const detScore = document.querySelector("[data-det-score]");

  // escape html
  const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // build lookup
  const t1 = new Map(TIER_1.map(([w, f]) => [w.toLowerCase(), f]));
  const t2 = new Map(TIER_2.map(([w, f]) => [w.toLowerCase(), f]));
  const t3 = new Set(TIER_3.map(w => w.toLowerCase()));

  // phrase-style patterns (multi-word regex forms)
  const PATTERN_REGEXES = [
    { re: /\bnot (?:a )?[\w'-]+[,\.] (?:it'?s )?(?:a |but )[\w'-]+/gi, label: "binary contrast" },
    { re: /\b(?:so why|but what|but how) (?:does|do|is|are) this/gi, label: "rhetorical transition" },
    { re: /\blet's dive in(?:to)?\b/gi, label: "signposting" },
    { re: /\bhere'?s what you need to know\b/gi, label: "signposting" },
    { re: /\blet me think step by step\b/gi, label: "reasoning leakage" },
    { re: /\b(?:the data|the market|the product|the complaint) (?:tells us|decided|became|knows)\b/gi, label: "false agency" },
    { re: /\b(?:experts (?:believe|say)|research shows|industry observers note|studies show)\b/gi, label: "vague attribution" },
    { re: /\b(?:vibrant|thriving|bustling) (?:hub|ecosystem|community)\b/gi, label: "promotional" },
    { re: /\bwhat surprised me most was\b/gi, label: "emotional flatline" },
    { re: /\bat the end of the day\b/gi, label: "filler" },
    { re: /\bin today'?s [\w-]+(?:\s[\w-]+)?\b/gi, label: "filler opener" },
    { re: /\bthe future looks bright\b/gi, label: "generic close" },
    { re: /\bas we move forward\b/gi, label: "generic close" },
    { re: /\bin conclusion\b/gi, label: "generic close" },
    { re: /\bin summary\b/gi, label: "generic close" },
    { re: /\bhere'?s the thing\b/gi, label: "throat-clearing" },
    { re: /\bit turns out\b/gi, label: "filler" },
    { re: /\bit'?s worth noting\b/gi, label: "filler" },
    { re: /\blet that sink in\b/gi, label: "emphasis crutch" },
    { re: /\bi hope this helps\b/gi, label: "chatbot artifact" },
    { re: /\bgreat question[!\.]?/gi, label: "chatbot artifact" },
    { re: /\b(?:certainly|absolutely|of course)[,!]/gi, label: "chatbot opener" }
  ];

  // tier-1 entries that are phrases, detected as regex
  const PHRASE_REGEXES = [
    ...[...t1.keys()].filter(k => k.includes(" ")).map(k => ({
      re: new RegExp("\\b" + k.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b", "gi"),
      tier: 1,
      fix: t1.get(k)
    })),
    ...[...t2.keys()].filter(k => k.includes(" ")).map(k => ({
      re: new RegExp("\\b" + k.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b", "gi"),
      tier: 2,
      fix: t2.get(k)
    }))
  ];

  function detect(text) {
    if (!text) return { html: `<span style="color:var(--ink-mute); font-style: italic;">paste prose on the left and see it flagged here…</span>`, flags: 0, tierCounts: { t1: 0, t2: 0, t3: 0, pat: 0 }, total: 0, words: 0 };

    // collect all spans: [start, end, type, title]
    const spans = [];

    // patterns (regex) first — higher priority
    PATTERN_REGEXES.forEach(({ re, label }) => {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text))) {
        spans.push({ start: m.index, end: m.index + m[0].length, type: "pat", title: label });
      }
    });

    // phrase tier words
    PHRASE_REGEXES.forEach(({ re, tier, fix }) => {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text))) {
        spans.push({ start: m.index, end: m.index + m[0].length, type: tier === 1 ? "t1" : "t2", title: `${m[0]} → ${fix}` });
      }
    });

    // opener-at-start-of-sentence
    OPENERS.forEach(op => {
      const re = new RegExp("(?:^|[\\.\\?!\\n]\\s+)(" + op.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + ")", "g");
      let m;
      while ((m = re.exec(text))) {
        const start = m.index + m[0].length - m[1].length;
        spans.push({ start, end: start + m[1].length, type: "open", title: "bad opener" });
      }
    });

    // word-level tier tokens (single-word entries)
    const tokenRe = /[A-Za-z][A-Za-z'-]*/g;
    let tm;
    while ((tm = tokenRe.exec(text))) {
      const word = tm[0];
      const lc = word.toLowerCase();
      if (t1.has(lc) && !lc.includes(" ")) {
        spans.push({ start: tm.index, end: tm.index + word.length, type: "t1", title: `${word} → ${t1.get(lc)}` });
      } else if (t2.has(lc) && !lc.includes(" ")) {
        spans.push({ start: tm.index, end: tm.index + word.length, type: "t2", title: `${word} → ${t2.get(lc)}` });
      } else if (t3.has(lc)) {
        spans.push({ start: tm.index, end: tm.index + word.length, type: "t3", title: `${word} — flag at density` });
      }
    }

    // merge/dedupe overlapping spans, keep higher priority (pat > t1 > t2 > open > t3)
    const prio = { pat: 5, t1: 4, t2: 3, open: 2, t3: 1 };
    spans.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));
    const merged = [];
    for (const sp of spans) {
      const last = merged[merged.length - 1];
      if (last && sp.start < last.end) {
        // overlap — prefer higher-priority type; keep wider span
        if (prio[sp.type] > prio[last.type]) {
          merged[merged.length - 1] = {
            start: Math.min(last.start, sp.start),
            end: Math.max(last.end, sp.end),
            type: sp.type,
            title: sp.title
          };
        } else {
          last.end = Math.max(last.end, sp.end);
        }
      } else {
        merged.push({ ...sp });
      }
    }

    // build html with wrapping
    let out = "";
    let cursor = 0;
    const counts = { t1: 0, t2: 0, t3: 0, pat: 0, open: 0 };
    for (const sp of merged) {
      if (sp.start > cursor) out += esc(text.slice(cursor, sp.start));
      const slice = text.slice(sp.start, sp.end);
      counts[sp.type] = (counts[sp.type] || 0) + 1;
      out += `<span class="hl hl-${sp.type}" title="${esc(sp.title || "")}">${esc(slice)}</span>`;
      cursor = sp.end;
    }
    if (cursor < text.length) out += esc(text.slice(cursor));
    out = out.replace(/\n/g, "<br>");

    return {
      html: out,
      flags: merged.length,
      tierCounts: counts,
      words: (text.match(/\b[\w'-]+\b/g) || []).length
    };
  }

  function verdict(res) {
    const { flags, tierCounts, words } = res;
    const density = words ? flags / words : 0;
    if (flags === 0) {
      return `<span class="score-clean">clean on this pass.</span>&nbsp;the demo did not catch anything in its subset. still read it yourself.`;
    }
    const bits = [];
    if (tierCounts.t1) bits.push(`${tierCounts.t1} tier-1 word${tierCounts.t1 > 1 ? "s" : ""}`);
    if (tierCounts.t2) bits.push(`${tierCounts.t2} tier-2 word${tierCounts.t2 > 1 ? "s" : ""}`);
    if (tierCounts.pat) bits.push(`${tierCounts.pat} pattern${tierCounts.pat > 1 ? "s" : ""}`);
    if (tierCounts.open) bits.push(`${tierCounts.open} opener${tierCounts.open > 1 ? "s" : ""}`);
    const severity = density > 0.06 || tierCounts.pat >= 3 || tierCounts.t1 >= 4
      ? `<span class="score-strong">clear ai smell.</span>`
      : `<span class="score-neutral">mixed.</span>`;
    return `${severity}&nbsp;${bits.join(" · ")} in the demo subset. full review still recommended.`;
  }

  function updateDetector() {
    if (!detInput) return;
    const res = detect(detInput.value);
    detOutput.innerHTML = res.html;
    detFlags.textContent = res.flags;
    detWords.textContent = res.words;
    detScore.innerHTML = verdict(res);
  }

  if (detInput) {
    let tid = null;
    detInput.addEventListener("input", () => {
      clearTimeout(tid);
      tid = setTimeout(updateDetector, 80);
    });
    updateDetector();
  }

  const defaultDraft = detInput ? detInput.value : "";
  document.querySelector("[data-det-reset]")?.addEventListener("click", () => {
    if (!detInput) return;
    detInput.value = defaultDraft;
    updateDetector();
    detInput.focus();
  });
  document.querySelector("[data-det-clear]")?.addEventListener("click", () => {
    if (!detInput) return;
    detInput.value = "";
    updateDetector();
    detInput.focus();
  });

  // ---------- examples renderer ----------

  const exList = document.querySelector("[data-examples-list]");
  if (exList) {
    EXAMPLES.forEach(ex => {
      const li = document.createElement("li");
      li.className = "ex";
      li.innerHTML = `
        <div class="ex-before">
          <span class="ex-side-label">before</span>
          ${ex.beforeHtml}
        </div>
        <div class="ex-after">
          <span class="ex-side-label">after</span>
          ${esc(ex.afterText)}
        </div>
        <ul class="ex-changes">
          ${ex.changes.map(c => `<li>${esc(c)}</li>`).join("")}
        </ul>
      `;
      exList.appendChild(li);
    });
  }

  // ---------- tier pills ----------

  function tierNode(w, fix) {
    const n = document.createElement("span");
    n.className = "wpill";
    n.innerHTML = `${esc(w)} <span class="arrow">→</span> <span class="fix">${esc(fix)}</span>`;
    return n;
  }

  const t1Host = document.querySelector('[data-tier="1"]');
  const t2Host = document.querySelector('[data-tier="2"]');
  const t3Host = document.querySelector('[data-tier="3"]');

  TIER_1.forEach(([w, f]) => t1Host?.appendChild(tierNode(w, f)));
  TIER_2.forEach(([w, f]) => t2Host?.appendChild(tierNode(w, f)));
  TIER_3.forEach(w => {
    const n = document.createElement("span");
    n.className = "wpill";
    n.textContent = w;
    t3Host?.appendChild(n);
  });

  // openers / fillers
  const openHost = document.querySelector("[data-openers]");
  const fillHost = document.querySelector("[data-fillers]");
  OPENERS.forEach(o => {
    const n = document.createElement("span");
    n.className = "ofpill";
    n.textContent = o;
    openHost?.appendChild(n);
  });
  FILLERS.forEach(f => {
    const n = document.createElement("span");
    n.className = "ofpill";
    n.textContent = f;
    fillHost?.appendChild(n);
  });

  // ---------- patterns renderer ----------

  const patHost = document.querySelector("[data-patterns]");
  if (patHost) {
    PATTERNS.forEach(p => {
      const el = document.createElement("article");
      el.className = "pat";
      el.innerHTML = `
        <header>
          <h3>${esc(p.title)}</h3>
          <span class="pat-group">${esc(p.group)}</span>
        </header>
        <p class="eg">${p.egHtml}</p>
        <p class="fix-line"><b>fix</b>${esc(p.fix)}</p>
      `;
      patHost.appendChild(el);
    });
  }

  // ---------- install tabs ----------

  document.querySelectorAll("[data-inst-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.instTab;
      document.querySelectorAll("[data-inst-tab]").forEach(b => b.classList.toggle("active", b === btn));
      document.querySelectorAll("[data-inst-pane]").forEach(p => p.classList.toggle("active", p.dataset.instPane === key));
    });
  });

  // ---------- copy buttons ----------

  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const pane = btn.closest(".inst-pane");
      const codeEl = pane?.querySelector("pre code");
      if (!codeEl) return;
      const text = codeEl.innerText;
      try {
        await navigator.clipboard.writeText(text);
        const orig = btn.textContent;
        btn.textContent = "copied";
        btn.classList.add("copied");
        setTimeout(() => { btn.textContent = orig; btn.classList.remove("copied"); }, 1400);
      } catch (_) {}
    });
  });

})();
