(() => {
  let ticking = false;

  const shared = window.VepolinkShared || {};
  const renderHeader = shared.renderHeader || (() => "");
  const renderFooter = shared.renderFooter || (() => "");
  const renderPartnerMarquee = shared.renderPartnerMarquee || (() => "");
  const hasSharedHeaderRenderer = typeof shared.renderHeader === "function";

  const navIconPaths = new Map([
    [
      "/water-quality-monitoring/",
      "M7 13.8c2.9-3.8 4.1-6 5-8.8.9 2.8 2.1 5 5 8.8a5 5 0 1 1-10 0Z",
    ],
    [
      "/stack-emission-monitoring/",
      "M7 20V8h5v12M12 20V4h5v16M5 20h14M14 7c2-2 4 0 4-3",
    ],
    [
      "/ambient-air-monitoring/",
      "M4 15c2.4 0 3.2-2.4 5.2-2.4 2.2 0 2.7 2.4 5.2 2.4 2.1 0 3.2-1.5 5.6-1.5M6 9.5c1.7 0 2.2-1.8 3.8-1.8 1.8 0 2.2 1.8 4 1.8M5 19h14",
    ],
    [
      "/indoor-air-monitoring/",
      "M5 20V5h14v15M9 9h6M9 13h6M9 17h2M3 20h18",
    ],
    [
      "/products/multi-paramater-online-water-analyzer/",
      "M5.8 7.5h12.4M5.8 12h12.4M5.8 16.5h12.4M8.2 5.3v4.4M14.8 9.8v4.4M11.2 14.3v4.4",
    ],
    [
      "/products/multi-parameter-online-water-analyzer-in-situ/",
      "M12 3v3M8 6h8M9 6v10a3 3 0 0 0 6 0V6M7 20h10",
    ],
    [
      "/products/ambient-so2-gas-analyzer/",
      "M6 8.5h12M8 5h8M8 8.5v6.2a4 4 0 0 0 8 0V8.5M6 18.5h12M9 12h6",
    ],
    [
      "/products/pm10-pm25-beta-attenuation-monitor/",
      "M5 19h14M7 16V8h10v8M9 8V5h6v3M9 12h6M9 15h6",
    ],
    [
      "/products/sensor-based-ambient-air-quality-monitor/",
      "M4 18h16M6 15V7h12v8M9 7V4h6v3M9 11h6M9 14h6",
    ],
    [
      "/about/",
      "M6.5 17.5v-6.3L12 6.5l5.5 4.7v6.3H14v-4h-4v4z",
    ],
  ]);

  const createNavIcon = (className, path) => {
    const icon = document.createElement("span");
    icon.className = className;
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = `<svg viewBox="0 0 24 24" focusable="false"><path d="${path}"></path></svg>`;
    return icon;
  };

  const decorateNavigation = (scope = document) => {
    scope.querySelectorAll(".mobile-nav-subitem, .nav-menu-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const path = navIconPaths.get(new URL(href, window.location.href).pathname);
      if (!path) return;

      if (link.classList.contains("mobile-nav-subitem")) {
        if (!link.querySelector(":scope > .mobile-nav-icon")) {
          link.prepend(createNavIcon("mobile-nav-icon", path));
        }
        return;
      }

      link.classList.add("nav-menu-link--icon");
      if (!link.querySelector(":scope > .nav-menu-icon")) {
        link.prepend(createNavIcon("nav-menu-icon", path));
      }
    });
  };

  const syncHeader = () => {
    document.querySelectorAll("[data-header]").forEach((header) => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    });
    ticking = false;
  };

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      if (hasSharedHeaderRenderer) {
        this.innerHTML = renderHeader();
      } else if (!this.innerHTML.trim()) {
        this.innerHTML = renderHeader();
      }
      syncHeader();
      decorateNavigation(this);
      enhanceNavigation(this);
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      if (typeof shared.renderFooter === "function") {
        this.innerHTML = renderFooter();
      } else if (!this.innerHTML.trim()) {
        this.innerHTML = renderFooter();
      }
    }
  }

  if (!customElements.get("site-header")) {
    customElements.define("site-header", SiteHeader);
  }

  if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(syncHeader);
      }
    },
    { passive: true }
  );
  syncHeader();

  const closeDropdowns = (except) => {
    document.querySelectorAll("[data-nav-dropdown].is-open").forEach((dropdown) => {
      if (dropdown === except) return;
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
    });
  };

  const closeMobileNav = (header) => {
    if (!header) return;
    header.classList.remove("mobile-nav-open");
    header.querySelectorAll("[data-mobile-nav-group].is-open").forEach((group) => {
      group.classList.remove("is-open");
      group
        .querySelector("[data-mobile-nav-disclosure]")
        ?.setAttribute("aria-expanded", "false");
    });
    document.documentElement.classList.remove("mobile-nav-active");
    const toggle = header.querySelector("[data-mobile-nav-toggle]");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
  };

  function enhanceNavigation(scope = document) {
    scope.querySelectorAll("[data-nav-dropdown]").forEach((dropdown) => {
      const trigger = dropdown.querySelector(".nav-trigger");
      if (!trigger || trigger.dataset.enhanced === "true") return;
      trigger.dataset.enhanced = "true";
      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = dropdown.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(isOpen));
        closeDropdowns(isOpen ? dropdown : null);
      });
    });

    scope.querySelectorAll("[data-mobile-nav-toggle]").forEach((toggle) => {
      if (toggle.dataset.enhanced === "true") return;
      toggle.dataset.enhanced = "true";
      const header = toggle.closest("[data-header]");
      const panel = header?.querySelector("[data-mobile-nav-panel]");
      toggle.addEventListener("click", () => {
        const isOpen = header?.classList.toggle("mobile-nav-open");
        document.documentElement.classList.toggle("mobile-nav-active", Boolean(isOpen));
        toggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
        toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        if (isOpen) {
          panel?.querySelector("a")?.focus({ preventScroll: true });
        }
      });
      panel?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          closeMobileNav(header);
        });
      });
    });

    scope.querySelectorAll("[data-mobile-nav-disclosure]").forEach((trigger) => {
      if (trigger.dataset.enhanced === "true") return;
      trigger.dataset.enhanced = "true";
      const group = trigger.closest("[data-mobile-nav-group]");
      trigger.addEventListener("click", () => {
        const nextOpen = !group?.classList.contains("is-open");
        group
          ?.parentElement
          ?.querySelectorAll("[data-mobile-nav-group].is-open")
          .forEach((openGroup) => {
            if (openGroup === group) return;
            openGroup.classList.remove("is-open");
            openGroup
              .querySelector("[data-mobile-nav-disclosure]")
              ?.setAttribute("aria-expanded", "false");
          });
        group?.classList.toggle("is-open", nextOpen);
        trigger.setAttribute("aria-expanded", String(nextOpen));
      });
    });
  }

  document.addEventListener("click", () => closeDropdowns());
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeDropdowns();
    document.querySelectorAll(".mobile-nav-open").forEach((header) => {
      closeMobileNav(header);
    });
  });
  decorateNavigation();
  enhanceNavigation();

  document.querySelectorAll("[data-partner-marquee]").forEach((node) => {
    node.outerHTML = renderPartnerMarquee();
  });

  const metricConfig = [
    ["ph", 7.18, 0.04, 2],
    ["turbidity", 2.8, 0.2, 1],
    ["do", 6.4, 0.08, 2],
    ["temp", 24.6, 0.06, 1],
    ["conductivity", 412, 4, 0],
    ["tds", 248, 3, 0],
    ["stack-sox", 48, 1.6, 0, 42, 56],
    ["stack-nox", 62, 2.2, 0, 54, 78],
    ["stack-pm", 28, 1.1, 0, 23, 32],
    ["stack-co", 42, 2, 0, 34, 50],
    ["stack-o2", 11.4, 0.12, 1, 10.6, 12.2],
    ["stack-flow", 18.2, 0.4, 1, 16.5, 20.2],
    ["air-pm25", 48, 2.6, 0, 38, 62],
    ["air-pm10", 96, 4, 0, 78, 118],
    ["air-so2", 14.2, 0.6, 1, 10, 19],
    ["air-no2", 31, 1.4, 0, 24, 42],
    ["air-o3", 42, 2, 0, 31, 56],
    ["air-co", 0.94, 0.05, 2, 0.7, 1.2],
    ["iaq-co2", 612, 8, 0, 540, 760],
    ["iaq-pm25", 18, 1.2, 0, 11, 27],
    ["iaq-voc", 0.42, 0.03, 2, 0.28, 0.62],
    ["iaq-temp", 23.4, 0.08, 1, 22.6, 24.4],
    ["iaq-rh", 52, 0.8, 0, 46, 58],
    ["iaq-co", 0.6, 0.05, 2, 0.38, 0.86],
    ["home-ph", 7.18, 0.04, 2],
    ["home-nox", 62, 2.4, 0, 54, 70],
    ["home-pm25", 48, 1.8, 0, 42, 55],
    ["home-co2", 612, 14, 0, 580, 650],
  ];

  const nodes = metricConfig
    .map(([name, base, jitter, decimals, min = 0, max = Number.POSITIVE_INFINITY]) => ({
      node: document.querySelector(`[data-metric="${name}"]`),
      value: base,
      jitter,
      decimals,
      min,
      max,
    }))
    .filter((item) => item.node);

  if (nodes.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      for (const item of nodes) {
        item.value = Math.min(
          item.max,
          Math.max(item.min, item.value + (Math.random() - 0.5) * item.jitter)
        );
        item.node.textContent = item.value.toFixed(item.decimals);
      }
    }, 2400);
  }

  function MegaMenuProductHighlight() {
    ToggleMegaMenuProductList("caaqms-products");
    document.querySelectorAll(".nav-btn").forEach((navBtn, index) => {
      navBtn.setAttribute("data-idx", index)
      navBtn.addEventListener("click", (e) => {
        const target = e.target.getAttribute("data-target");
        // Get current index
        console.log(e)
        document.querySelectorAll(".nav-btn.active").forEach((active) => {
          active.classList.remove("active");
        });
        navBtn.classList.add("active");
        ToggleMegaMenuProductList(target);
        SlideMenu(e.target.getAttribute("data-idx"))
      });
    });
  }
  MegaMenuProductHighlight()

  function SlideMenu($t) {
    const slide = document.querySelector(".nav-list .oveflo");
    slide.style.transform = `translateX(${-1480 * $t}px)`
  }

  function ToggleMegaMenuProductList($t) {
    const active = $t
    document.querySelectorAll(".nav-list .list-grid").forEach((listGrid) => {
      const target = listGrid.getAttribute("data-list")
      if (target === active) {
        listGrid.classList.add("active");
      } else {
        listGrid.classList.remove("active");
      }
    })
  }

})();
