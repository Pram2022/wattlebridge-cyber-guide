/* ==========================================================
   WattleBridge Stay Safe Guide
   ----------------------------------------------------------
   EDIT CONTENT HERE: CONTACTS, SCENARIOS, RULES and CHIPS.
   The page is built from these lists, so you do not need to
   touch the HTML to change wording.
   ========================================================== */

/* ---------- Contacts (all placeholders) ----------
   Replace "Placeholder" with real details when known. */
const CONTACTS = {
  digital: {
    name: "Digital Systems",
    useFor: "Cyber or access issue",
    email: "Placeholder",
    phone: "Placeholder",
  },
  privacy: {
    name: "Quality & Risk / Privacy",
    useFor: "Privacy concern",
    email: "Placeholder",
    phone: "Placeholder",
  },
  volunteer: {
    name: "Volunteer Coordinator",
    useFor: "Volunteer support",
    email: "Placeholder",
    phone: "Placeholder",
  },
  manager: {
    name: "Your manager or coordinator",
    useFor: "Not sure",
    email: "Placeholder",
    phone: "Placeholder",
  },
};

/* ---------- Scenarios ----------
   icon:     a key from ICONS below
   keywords: words that match this card in the search box
   contacts: keys from CONTACTS above */
const SCENARIOS = [
  {
    id: "email",
    title: "Suspicious email or message",
    hint: "Odd link, attachment or request",
    icon: "mail",
    keywords: ["email", "message", "text", "sms", "link", "attachment", "phishing", "scam", "spam", "password", "invoice"],
    doList: [
      "Stop. Don't click links or open attachments.",
      "Check the sender's address carefully.",
      "Report the message.",
    ],
    dontList: [
      "Don't reply or forward it to others.",
      "Don't enter your password from a link in the message.",
    ],
    contacts: ["digital"],
    escalate: [
      "You clicked a link, opened an attachment or entered your password.",
      "The message asks for client information.",
    ],
  },
  {
    id: "mfa",
    title: "Unexpected MFA prompt",
    hint: "Sign-in request you didn't make",
    icon: "shield",
    keywords: ["mfa", "2fa", "code", "authenticator", "prompt", "approve", "sign in", "login", "phone", "password", "verification"],
    doList: [
      "Do not approve the request.",
      "Check whether you were trying to sign in.",
      "Report the unexpected prompt.",
    ],
    dontList: [
      "Don't approve repeated prompts just to make them stop.",
      "Don't share an MFA code with anyone.",
    ],
    contacts: ["digital"],
    escalate: [
      "You approved a prompt you did not request.",
      "You think your account may have been accessed.",
    ],
  },
  {
    id: "lost",
    title: "Lost or stolen device",
    hint: "Phone, laptop or tablet missing",
    icon: "phone",
    keywords: ["lost", "stolen", "missing", "phone", "laptop", "tablet", "device", "mobile", "usb"],
    doList: [
      "Report it straight away, even if you might find it.",
      "Note when and where you last had it.",
      "List the work apps or files that were on it.",
    ],
    dontList: [
      "Don't wait to see if it turns up.",
    ],
    contacts: ["digital", "privacy"],
    escalate: [
      "Always report lost or stolen devices immediately.",
      "Tell Privacy too if client information was on the device.",
    ],
  },
  {
    id: "personal",
    title: "Using a personal device",
    hint: "Own phone or computer for work",
    icon: "laptop",
    keywords: ["personal", "own", "phone", "laptop", "home", "device", "computer", "byod", "mobile", "tablet"],
    doList: [
      "Check with your manager or coordinator first.",
      "Keep the device locked and up to date.",
      "Use approved apps for WattleBridge work.",
    ],
    dontList: [
      "Don't save client information to the device.",
      "Don't let others use it while you're signed in.",
    ],
    contacts: ["manager", "digital"],
    escalate: [
      "The device is lost, stolen or shared while signed in.",
      "You think it has a virus or has been accessed.",
    ],
  },
  {
    id: "tool",
    title: "Using a new or unapproved tool",
    hint: "App, website, AI tool or plugin",
    icon: "apps",
    keywords: ["tool", "app", "software", "website", "ai", "chatgpt", "plugin", "download", "install", "unapproved", "new"],
    doList: [
      "Ask before you sign up or install anything.",
      "Use an approved tool if one already does the job.",
    ],
    dontList: [
      "Don't put client or WattleBridge information into it.",
      "Don't sign up with your WattleBridge account without checking.",
    ],
    contacts: ["digital"],
    escalate: [
      "You have already entered client or WattleBridge information into it.",
    ],
  },
  {
    id: "client",
    title: "Handling client information",
    hint: "Sharing, storing or sending details",
    icon: "client",
    keywords: ["client", "privacy", "personal information", "data", "record", "file", "share", "send", "wrong person", "breach", "document"],
    doList: [
      "Only access what you need for your role.",
      "Share it only with people who need it.",
      "Double-check recipients before you send.",
      "Store it only in approved places.",
    ],
    dontList: [
      "Don't send it to personal email or chat apps.",
      "Don't leave it on screen or printed in view.",
    ],
    contacts: ["privacy"],
    escalate: [
      "Information was sent to the wrong person.",
      "It was lost, or seen by someone who shouldn't see it.",
    ],
  },
  {
    id: "account",
    title: "Account or access issue",
    hint: "Locked out or something looks wrong",
    icon: "key",
    keywords: ["account", "access", "password", "locked", "login", "sign in", "reset", "permission", "username", "hacked"],
    doList: [
      "Use the approved password reset process (Placeholder).",
      "Report anything that looks unusual.",
    ],
    dontList: [
      "Don't use someone else's account to get around it.",
      "Don't share your password to get help.",
    ],
    contacts: ["digital"],
    escalate: [
      "Your password changed and you didn't change it.",
      "You see activity or messages you didn't do.",
    ],
  },
  {
    id: "unsure",
    title: "Not sure what to do",
    hint: "Something feels off",
    icon: "help",
    keywords: ["unsure", "not sure", "help", "other", "question", "worried", "don't know", "dont know", "something"],
    doList: [
      "Pause before you act.",
      "Ask your manager or coordinator.",
      "Check the Quick Rules below.",
    ],
    dontList: [
      "Don't ignore it and hope it goes away.",
    ],
    contacts: ["manager", "volunteer"],
    escalate: [
      "It might involve client information, a password or a device.",
      "Report now. Don't wait to be sure.",
    ],
  },
];

/* ---------- Quick Rules ---------- */
const RULES = [
  {
    rule: "Use your own WattleBridge account.",
    why: "Your account shows what you did. Sharing logins makes it harder to protect you and clients.",
  },
  {
    rule: "Never share passwords or MFA codes.",
    why: "Treat any request for them as suspicious and report it.",
  },
  {
    rule: "Use approved tools and devices where possible.",
    why: "Approved tools have been checked. If unsure, ask first. (Approved list: Placeholder)",
  },
  {
    rule: "Protect client information.",
    why: "Only access, share and store what you need, in approved places.",
  },
  {
    rule: "Report suspicious activity early.",
    why: "Reporting quickly helps limit harm. A false alarm is better than a missed problem.",
  },
  {
    rule: "Ask for help when unsure.",
    why: "Stop and ask before you act. See Need Help? below.",
  },
];

/* ---------- Quick search chips ---------- */
const CHIPS = ["email", "password", "MFA", "phone", "client", "account", "tool"];

/* ---------- Most common situations ----------
   Scenario ids (from SCENARIOS) shown as quick-access cards. */
const COMMON = ["email", "mfa", "lost"];

/* ---------- Icons (simple inline SVG paths) ---------- */
const ICONS = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="M12 8v5"/><path d="M12 16h.01"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 8.5a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6 1V12"/><path d="M12 15h.01"/><path d="M11 19h2"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
  apps: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/>',
  client: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="11" r="2.5"/><path d="M5.5 17c.8-1.8 2-2.5 3.5-2.5s2.7.7 3.5 2.5"/><path d="M15 10h3M15 14h3"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8.2-8.2"/><path d="m16 7 3 3"/><path d="m13.5 9.5 2 2"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14"/><path d="M12 17h.01"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  cross: '<path d="M18 6 6 18M6 6l12 12"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  alert: '<path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  at: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  call: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
};

/* ==========================================================
   You shouldn't need to edit below this line.
   ========================================================== */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

function icon(name, extraClass = "") {
  return `<svg class="${extraClass}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

function esc(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function listItems(items, iconName) {
  return items.map((item) => `<li>${icon(iconName, "li-icon")}<span>${esc(item)}</span></li>`).join("");
}

function contactDetails(c) {
  return `<span class="contact-detail">${icon("at")} Email: ${esc(c.email)}</span>
          <span class="contact-detail">${icon("call")} Phone: ${esc(c.phone)}</span>`;
}

/* ---------- Generic open/close helper ----------
   Used by scenario cards, Quick Rules, each rule and Need Help.
   `inert` stops hidden content being focused by keyboard. */
function setExpanded(button, panel, open) {
  button.setAttribute("aria-expanded", String(open));
  panel.classList.toggle("is-open", open);
  panel.inert = !open;
}

function isExpanded(button) {
  return button.getAttribute("aria-expanded") === "true";
}

function scrollIntoViewSoon(el, block = "nearest") {
  // Wait for the expand animation so the whole panel is measured.
  setTimeout(() => el.scrollIntoView({ block, behavior: scrollBehavior }), prefersReducedMotion ? 0 : 280);
}

/* ---------- Build scenario cards ---------- */
const cardGrid = document.getElementById("cardGrid");

function buildCard(s) {
  const btnId = `btn-${s.id}`;
  const panelId = `panel-${s.id}`;

  const contactsHtml = s.contacts
    .map((key) => {
      const c = CONTACTS[key];
      return `<div class="contact-line">
          <span class="contact-name">${esc(c.name)} <span class="tag">Placeholder</span></span>
          ${contactDetails(c)}
        </div>`;
    })
    .join("");

  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = s.id;
  card.innerHTML = `
    <h3 class="card-heading">
      <button type="button" class="card-toggle" id="${btnId}" aria-expanded="false" aria-controls="${panelId}">
        <span class="card-icon">${icon(s.icon)}</span>
        <span class="card-text">
          <span class="card-title">${esc(s.title)}</span>
          <span class="card-hint">${esc(s.hint)}</span>
        </span>
        <span class="card-cue"><span class="cue-label">View steps</span>${icon("chevron", "chevron")}</span>
      </button>
    </h3>
    <div class="collapse" id="${panelId}" role="region" aria-labelledby="${btnId}">
      <div class="collapse-inner">
        <div class="panel-body">
          <section class="callout callout--do">
            <h4><span class="callout-badge">${icon("check")}</span> Do this</h4>
            <ol>${listItems(s.doList, "check")}</ol>
          </section>
          <section class="callout callout--avoid">
            <h4><span class="callout-badge">${icon("cross")}</span> Avoid this</h4>
            <ul>${listItems(s.dontList, "cross")}</ul>
          </section>
          <section class="callout callout--contact">
            <h4><span class="callout-badge">${icon("person")}</span> Who to contact</h4>
            ${contactsHtml}
          </section>
          <section class="callout callout--escalate">
            <h4><span class="callout-badge">${icon("alert")}</span> Escalate now if</h4>
            <ul>${listItems(s.escalate, "alert")}</ul>
          </section>
          <div class="panel-actions">
            <button type="button" class="btn-ghost panel-close">${icon("cross")} Close</button>
            <button type="button" class="btn-ghost panel-help" data-open-help>${icon("help")} Still unsure? Get help</button>
          </div>
        </div>
      </div>
    </div>`;

  const toggle = card.querySelector(".card-toggle");
  const panel = card.querySelector(".collapse");
  panel.inert = true;

  toggle.addEventListener("click", () => setCardOpen(card, !isExpanded(toggle)));
  card.querySelector(".panel-close").addEventListener("click", () => {
    setCardOpen(card, false);
    toggle.focus();
  });

  return card;
}

function getCard(id) {
  return cardGrid.querySelector(`.card[data-id="${id}"]`);
}

function setCardOpen(card, open, block = "nearest") {
  // Only one scenario open at a time keeps scrolling to a minimum.
  if (open) {
    cardGrid.querySelectorAll(".card.is-open").forEach((other) => {
      if (other !== card) setCardOpen(other, false);
    });
  }
  const toggle = card.querySelector(".card-toggle");
  const panel = card.querySelector(".collapse");
  card.classList.toggle("is-open", open);
  toggle.querySelector(".cue-label").textContent = open ? "Hide" : "View steps";
  setExpanded(toggle, panel, open);
  if (open) scrollIntoViewSoon(card, block);
}

SCENARIOS.forEach((s) => cardGrid.appendChild(buildCard(s)));

// Escape closes the open scenario and returns focus to its button.
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const openCard = e.target.closest && e.target.closest(".card.is-open");
  if (openCard) {
    setCardOpen(openCard, false);
    openCard.querySelector(".card-toggle").focus();
  }
});

/* ---------- Most common situations ---------- */
const commonList = document.getElementById("commonList");

COMMON.forEach((id) => {
  const s = SCENARIOS.find((item) => item.id === id);
  if (!s) return;
  const li = document.createElement("li");
  li.innerHTML = `
    <button type="button" class="quick-card" data-id="${s.id}">
      <span class="quick-icon">${icon(s.icon)}</span>
      <span class="quick-title">${esc(s.title)}</span>
      <span class="quick-go">Open ${icon("arrow")}</span>
    </button>`;
  li.querySelector("button").addEventListener("click", () => openScenario(s.id));
  commonList.appendChild(li);
});

// Opens a scenario from elsewhere on the page (quick cards).
function openScenario(id) {
  const card = getCard(id);
  if (card.hidden) clearSearch();
  setCardOpen(card, true, "start");
  card.querySelector(".card-toggle").focus({ preventScroll: true });
}

/* ---------- Search / filter ---------- */
const searchInput = document.getElementById("search");
const searchClear = document.getElementById("searchClear");
const searchStatus = document.getElementById("searchStatus");
const noResults = document.getElementById("noResults");
const chipsBox = document.getElementById("chips");

// Common words ignored by search so they don't match everything.
const STOP_WORDS = ["to", "do", "my", "an", "the", "is", "it", "on", "in", "of", "or", "and", "what", "with", "have", "can", "how", "me", "am", "im", "i'm", "a"];

function matches(scenario, words) {
  const haystack = [scenario.title, scenario.hint, ...scenario.keywords].join(" ").toLowerCase();
  return words.some((w) => haystack.includes(w));
}

function filterCards() {
  const query = searchInput.value.trim().toLowerCase();
  const words = query.split(/\s+/).filter((w) => w.length >= 2 && !STOP_WORDS.includes(w));
  let shown = 0;

  SCENARIOS.forEach((s) => {
    const card = getCard(s.id);
    const visible = words.length === 0 || matches(s, words);
    if (!visible && card.classList.contains("is-open")) setCardOpen(card, false);
    card.hidden = !visible;
    if (visible) shown++;
  });

  // No match: always offer the "Not sure" card as a fallback.
  if (shown === 0) getCard("unsure").hidden = false;

  noResults.hidden = shown !== 0;
  searchClear.hidden = query === "";
  searchStatus.textContent =
    words.length === 0
      ? ""
      : shown === 0
        ? "No close match found."
        : `Showing ${shown} of ${SCENARIOS.length} situations`;

  chipsBox.querySelectorAll(".chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.dataset.term.toLowerCase() === query));
  });
}

function clearSearch() {
  searchInput.value = "";
  filterCards();
}

CHIPS.forEach((term) => {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip";
  chip.textContent = term;
  chip.dataset.term = term;
  chip.setAttribute("aria-pressed", "false");
  chip.addEventListener("click", () => {
    // Tapping the active chip again clears the filter.
    const active = searchInput.value.trim().toLowerCase() === term.toLowerCase();
    searchInput.value = active ? "" : term;
    filterCards();
    if (!active) scrollIntoViewSoon(document.getElementById("scenarios"), "start");
  });
  chipsBox.appendChild(chip);
});

searchInput.addEventListener("input", filterCards);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchInput.value) clearSearch();
  // Enter jumps down to the filtered results.
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("scenarios").scrollIntoView({ block: "start", behavior: scrollBehavior });
  }
});
searchClear.addEventListener("click", () => {
  clearSearch();
  searchInput.focus();
});

/* ---------- Quick Rules ---------- */
const rulesList = document.getElementById("rulesList");

RULES.forEach((r, i) => {
  const li = document.createElement("li");
  li.className = "rule";
  li.innerHTML = `
    <button type="button" class="rule-toggle" aria-expanded="false" aria-controls="rule-${i}">
      <span class="rule-num" aria-hidden="true">${i + 1}</span>
      <span class="rule-label">${esc(r.rule)}</span>
      ${icon("chevron", "chevron")}
    </button>
    <div class="collapse" id="rule-${i}">
      <div class="collapse-inner"><p class="rule-text">${esc(r.why)}</p></div>
    </div>`;
  const btn = li.querySelector("button");
  const panel = li.querySelector(".collapse");
  panel.inert = true;
  btn.addEventListener("click", () => {
    setExpanded(btn, panel, !isExpanded(btn));
    li.classList.toggle("is-open", isExpanded(btn));
  });
  rulesList.appendChild(li);
});

/* ---------- Need Help contacts ---------- */
const helpList = document.getElementById("helpList");

Object.values(CONTACTS).forEach((c) => {
  const li = document.createElement("li");
  li.className = "contact-card";
  li.innerHTML = `
    <span class="contact-for">${esc(c.useFor)}</span>
    <span class="contact-name">${esc(c.name)} <span class="tag">Placeholder</span></span>
    ${contactDetails(c)}`;
  helpList.appendChild(li);
});

/* ---------- Expandable sections (Quick Rules, Need Help) ---------- */
document.querySelectorAll(".fold-toggle").forEach((btn) => {
  const panel = document.getElementById(btn.getAttribute("aria-controls"));
  panel.inert = true;
  btn.addEventListener("click", () => {
    const open = !isExpanded(btn);
    setExpanded(btn, panel, open);
    btn.closest(".fold").classList.toggle("is-open", open);
    if (open) scrollIntoViewSoon(btn.closest(".fold"));
  });
});

// Any [data-open-help] button opens Need Help and moves focus there.
function openHelp() {
  const btn = document.getElementById("helpBtn");
  const fold = document.getElementById("help");
  setExpanded(btn, document.getElementById("helpPanel"), true);
  fold.classList.add("is-open");
  btn.focus({ preventScroll: true });
  scrollIntoViewSoon(fold, "start");
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-open-help]")) openHelp();
});

/* ---------- 3-step guide buttons ---------- */
document.querySelectorAll("[data-step]").forEach((step) => {
  step.addEventListener("click", () => {
    if (step.dataset.step === "search") {
      searchInput.focus({ preventScroll: true });
      searchInput.scrollIntoView({ block: "center", behavior: scrollBehavior });
    }
    if (step.dataset.step === "scenarios") {
      document.getElementById("scenarios").scrollIntoView({ block: "start", behavior: scrollBehavior });
    }
  });
});
