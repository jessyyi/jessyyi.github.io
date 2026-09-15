(() => {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;

  const applyCopy = (locale) => {
    const copy = content[locale];
    document.title = copy.title;
    document.querySelector('meta[name="description"]').setAttribute("content", copy.description);

    Object.entries(copy.text).forEach(([selector, value]) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.textContent = value;
      });
    });
    Object.entries(copy.html).forEach(([selector, value]) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.innerHTML = value;
      });
    });
  };

  const renderAirbnbControls = () => {
    const card = document.querySelector("#work .project:nth-child(2)");
    if (!card || card.querySelector(".project-actions")) return;

    const actions = document.createElement("div");
    actions.className = "project-actions";

    const details = document.createElement("button");
    details.type = "button";
    details.className = "mini-button primary";
    details.dataset.airbnbDetails = "";

    const live = document.createElement("a");
    live.className = "mini-button";
    live.href = content.projects.airbnb.live;
    live.target = "_blank";
    live.rel = "noreferrer";
    live.dataset.airbnbLive = "";

    actions.append(details, live);
    card.insertBefore(actions, card.querySelector(".visual"));

    const dialog = document.createElement("dialog");
    dialog.id = "airbnb-detail";
    dialog.innerHTML = `
      <div class="dialog-inner">
        <div class="dialog-top">
          <div>
            <p class="dialog-kicker" data-airbnb-kicker></p>
            <h2 data-airbnb-title></h2>
          </div>
          <button class="dialog-close" type="button" aria-label="Close">×</button>
        </div>
        <p class="dialog-lede" data-airbnb-lede></p>
        <div class="dialog-stats" data-airbnb-stats></div>
        <div class="dialog-grid" data-airbnb-panels></div>
        <div class="dialog-actions">
          <a class="button primary" target="_blank" rel="noreferrer" href="${content.projects.airbnb.live}" data-airbnb-live></a>
          <a class="button" target="_blank" rel="noreferrer" href="${content.projects.airbnb.source}" data-airbnb-source></a>
        </div>
      </div>`;
    document.body.append(dialog);

    details.addEventListener("click", () => dialog.showModal());
    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  };

  const renderPresentationControls = () => {
    [
      ["#work .project:nth-child(1)", content.projects.uplift.presentation],
      ["#work .project:nth-child(3)", content.projects.delivery.presentation]
    ].forEach(([selector, href]) => {
      const card = document.querySelector(selector);
      if (!card || card.querySelector("[data-presentation]")) return;

      const actions = document.createElement("div");
      actions.className = "project-actions";
      const link = document.createElement("a");
      link.className = "mini-button primary";
      link.href = href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.dataset.presentation = "";
      actions.append(link);
      card.insertBefore(actions, card.querySelector(".visual"));
    });
  };

  const renderWechat = () => {
    const grid = document.querySelector("footer .contact-grid");
    if (!grid || grid.querySelector("[data-wechat]")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "contact";
    button.dataset.wechat = "";
    button.innerHTML = `
      <small data-wechat-label>WeChat</small>
      <span>${content.contacts.wechat}</span>
      <span class="wechat-status" data-wechat-status></span>`;
    grid.append(button);

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(content.contacts.wechat);
        button.querySelector("[data-wechat-status]").textContent =
          content[currentLanguage].airbnb.copied;
      } catch {
        button.querySelector("[data-wechat-status]").textContent =
          content.contacts.wechat;
      }
    });
  };

  const updateAirbnb = (locale) => {
    const copy = content[locale].airbnb;
    const dialog = document.querySelector("#airbnb-detail");
    if (!dialog) return;

    document.querySelector("[data-airbnb-details]").textContent = copy.details;
    document.querySelector("#work [data-airbnb-live]").textContent = copy.live;
    dialog.querySelector("[data-airbnb-kicker]").textContent = copy.kicker;
    dialog.querySelector("[data-airbnb-title]").textContent = copy.title;
    dialog.querySelector("[data-airbnb-lede]").textContent = copy.lede;
    dialog.querySelector("[data-airbnb-live]").textContent = copy.live;
    dialog.querySelector("[data-airbnb-source]").textContent = copy.source;
    dialog.querySelector(".dialog-close").setAttribute("aria-label", copy.close);
    dialog.querySelector("[data-airbnb-stats]").innerHTML = copy.stats
      .map(([value, label]) => `<div class="dialog-stat"><strong>${value}</strong><span>${label}</span></div>`)
      .join("");
    dialog.querySelector("[data-airbnb-panels]").innerHTML = copy.panels
      .map(([title, body]) => `<div class="dialog-panel"><h3>${title}</h3><p>${body}</p></div>`)
      .join("");
  };

  const updateWechat = (locale) => {
    const label = document.querySelector("[data-wechat-label]");
    const status = document.querySelector("[data-wechat-status]");
    if (label) label.textContent = locale === "zh" ? "微信" : "WeChat";
    if (status) status.textContent = locale === "zh" ? "点击复制微信号" : "Click to copy";
  };

  const updatePresentations = (locale) => {
    document.querySelectorAll("[data-presentation]").forEach((link) => {
      link.textContent = content[locale].presentation;
    });
  };

  let currentLanguage = "en";
  const setLanguage = (locale) => {
    currentLanguage = locale === "zh" ? "zh" : "en";
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    applyCopy(currentLanguage);
    updateAirbnb(currentLanguage);
    updateWechat(currentLanguage);
    updatePresentations(currentLanguage);

    document.querySelectorAll(".lang-btn").forEach((button) => {
      const active = button.dataset.lang === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try {
      localStorage.setItem("portfolio-language", currentLanguage);
    } catch {}
  };

  document.getElementById("year").textContent = new Date().getFullYear();
  renderAirbnbControls();
  renderPresentationControls();
  renderWechat();

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("portfolio-language") || "en";
  } catch {}
  setLanguage(savedLanguage);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
  }
})();
