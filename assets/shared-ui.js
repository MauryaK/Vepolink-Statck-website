(function attachSharedUi(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
  root.VepolinkShared = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function createSharedUi() {
  const partnerNames = [
    "Anodyne",
    "Advance Analytik",
    "Hemera Analysers",
    "Process Instruments",
    "Horiba",
    "Vasthi Instruments",
    "Adept",
    "OTT Hydromet",
    "Siemens",
  ];

  const navGroups = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Solutions",
      items: [
        {
          label: "Water quality monitoring (WQMS)",
          href: "/water-quality-monitoring/",
        },
        {
          label: "Stack emission monitoring (CEMS / OCEMS)",
          href: "/stack-emission-monitoring/",
        },
        {
          label: "Ambient air monitoring (CAAQMS)",
          href: "/ambient-air-monitoring/",
        },
        {
          label: "Indoor air quality monitoring (IAQ)",
          href: "/indoor-air-monitoring/",
        },
      ],
    },
    {
      label: "Products",
      items: [
        {
          label: "Multi-Parameter Online Water Analyzer (Extractive)",
          href: "/products/multi-paramater-online-water-analyzer/",
        },
        {
          label: "Multi-Parameter Online Water Analyzer (In-situ)",
          href: "/products/multi-parameter-online-water-analyzer-in-situ/",
        },
        {
          label: "Ambient SO2 Gas Analyzer (UV Fluorescence)",
          href: "/products/ambient-so2-gas-analyzer/",
        },
        {
          label: "PM10 & PM2.5 Beta Attenuation Monitor",
          href: "/products/pm10-pm25-beta-attenuation-monitor/",
        },
        {
          label: "Sensor-Based Ambient Air Quality Monitor",
          href: "/products/sensor-based-ambient-air-quality-monitor/",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          label: "About",
          href: "/about/",
        },
      ],
    },
  ];

  const footerGroups = [
    {
      label: "Platform",
      aria: "Footer platform links",
      links: [
        ["Environmental platform", "/#platform"],
        ["Water quality monitoring", "/water-quality-monitoring/"],
        ["Stack emission monitoring", "/stack-emission-monitoring/"],
        ["Ambient air monitoring", "/ambient-air-monitoring/"],
        ["Indoor air quality monitoring", "/indoor-air-monitoring/"],
      ],
    },
    {
      label: "Product",
      aria: "Footer product links",
      links: [
        ["Multi-Parameter Online Water Analyzer (Extractive)", "/products/multi-paramater-online-water-analyzer/"],
        ["Multi-Parameter Online Water Analyzer (In-situ)", "/products/multi-parameter-online-water-analyzer-in-situ/"],
        ["Ambient SO2 Gas Analyzer (UV Fluorescence)", "/products/ambient-so2-gas-analyzer/"],
        ["PM10 & PM2.5 Beta Attenuation Monitor", "/products/pm10-pm25-beta-attenuation-monitor/"],
        ["Sensor-Based Ambient Air Quality Monitor", "/products/sensor-based-ambient-air-quality-monitor/"],
      ],
    },
    {
      label: "Company",
      aria: "Footer company links",
      links: [
        ["About", "/about/"],
        ["Careers", "mailto:techsupport@vepolink.com"],
        ["Channel partners", "mailto:sales@vepolink.com"],
        ["Support", "tel:+919810416132"],
        ["Contact", "mailto:techsupport@vepolink.com"],
      ],
    },
  ];

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const renderDropdown = (group) => {
    if (!group.items) {
      return `<a class="nav-link" href="${group.href}">${escapeHtml(group.label)}</a>`;
    }

    const itemMarkup = group.items
      .map(
        (item) =>
          `<a class="nav-menu-link" href="${item.href}">${escapeHtml(item.label)}</a>`
      )
      .join("");

    return `
      <div class="nav-dropdown" data-nav-dropdown>
        <button class="nav-link nav-trigger" type="button" aria-expanded="false">
          ${escapeHtml(group.label)}
          <span aria-hidden="true">▾</span>
        </button>
        <div class="nav-menu" role="menu">
          ${itemMarkup}
        </div>
      </div>
    `;
  };

  const mobileItemMeta = {
    Solutions: [
      {
        title: "Water quality monitoring",
        subtitle: "WQMS",
        href: "/water-quality-monitoring/",
        icon: "M7 13.8c2.9-3.8 4.1-6 5-8.8.9 2.8 2.1 5 5 8.8a5 5 0 1 1-10 0Z",
      },
      {
        title: "Stack emission monitoring",
        subtitle: "CEMS / OCEMS",
        href: "/stack-emission-monitoring/",
        icon: "M7 20V8h5v12M12 20V4h5v16M5 20h14M14 7c2-2 4 0 4-3",
      },
      {
        title: "Ambient air monitoring",
        subtitle: "CAAQMS outdoor",
        href: "/ambient-air-monitoring/",
        icon: "M4 15c2.4 0 3.2-2.4 5.2-2.4 2.2 0 2.7 2.4 5.2 2.4 2.1 0 3.2-1.5 5.6-1.5M6 9.5c1.7 0 2.2-1.8 3.8-1.8 1.8 0 2.2 1.8 4 1.8M5 19h14",
      },
      {
        title: "Indoor air quality monitoring",
        subtitle: "IAQ in-room",
        href: "/indoor-air-monitoring/",
        icon: "M5 20V5h14v15M9 9h6M9 13h6M9 17h2M3 20h18",
      },
    ],
    Products: [
      {
        title: "Multi-Parameter Analyzer (Extractive)",
        subtitle: "Sample-line optical analyzer",
        href: "/products/multi-paramater-online-water-analyzer/",
        icon: "M5.8 7.5h12.4M5.8 12h12.4M5.8 16.5h12.4M8.2 5.3v4.4M14.8 9.8v4.4M11.2 14.3v4.4",
      },
      {
        title: "Multi-Parameter Analyzer (In-situ)",
        subtitle: "Direct-immersion UV-Vis sensor",
        href: "/products/multi-parameter-online-water-analyzer-in-situ/",
        icon: "M12 3v3M8 6h8M9 6v10a3 3 0 0 0 6 0V6M7 20h10",
      },
      {
        title: "Ambient SO2 Gas Analyzer",
        subtitle: "UV fluorescence gas analysis",
        href: "/products/ambient-so2-gas-analyzer/",
        icon: "M6 8.5h12M8 5h8M8 8.5v6.2a4 4 0 0 0 8 0V8.5M6 18.5h12M9 12h6",
      },
      {
        title: "PM10 & PM2.5 Monitor",
        subtitle: "Beta attenuation particulate monitor",
        href: "/products/pm10-pm25-beta-attenuation-monitor/",
        icon: "M5 19h14M7 16V8h10v8M9 8V5h6v3M9 12h6M9 15h6",
      },
      {
        title: "Sensor-Based Air Quality Monitor",
        subtitle: "Multi-gas, PM & weather station",
        href: "/products/sensor-based-ambient-air-quality-monitor/",
        icon: "M4 18h16M6 15V7h12v8M9 7V4h6v3M9 11h6M9 14h6",
      },
    ],
    Company: [
      {
        title: "About Vepolink",
        subtitle: "Company",
        href: "/about/",
        icon: "M6.5 17.5v-6.3L12 6.5l5.5 4.7v6.3H14v-4h-4v4z",
      },
    ],
  };

  const renderMobileDisclosure = (label) => {
    const items = mobileItemMeta[label] || [];
    const id = `mobile-nav-${label.toLowerCase()}`;

    return `
      <section class="mobile-nav-group" data-mobile-nav-group>
        <button class="mobile-nav-row" type="button" aria-expanded="false" aria-controls="${id}" data-mobile-nav-disclosure>
          <span>${escapeHtml(label)}</span>
          <span aria-hidden="true">▾</span>
        </button>
        <div class="mobile-nav-submenu" id="${id}" data-mobile-nav-items>
          ${items
            .map(
              (item) => `<a class="mobile-nav-subitem" href="${item.href}">
            <span class="mobile-nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="${item.icon}"></path>
              </svg>
            </span>
            <span>
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(item.subtitle)}</small>
            </span>
          </a>`
            )
            .join("")}
        </div>
      </section>
    `;
  };

  const renderHeader = () => `
    <header class="site-header" data-header>
      <div class="shell nav-shell">
        <a class="brand" href="/" aria-label="Vepolink home">
          <img src="/assets/vepolink-logo-horizontal-trimmed.png" width="206" height="40" alt="Vepolink">
        </a>
        <nav class="primary-nav" aria-label="Primary navigation">
          ${navGroups.map(renderDropdown).join("")}
        </nav>
        <div class="nav-actions">
          <a href="https://enviro.vepolink.com" target="_blank" rel="noopener noreferrer">Sign in</a>
          <a class="button button-dark" href="mailto:sales@vepolink.com">Book a walkthrough</a>
        </div>
        <button class="mobile-nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav-panel" data-mobile-nav-toggle>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav class="mobile-nav-panel" id="mobile-nav-panel" aria-label="Mobile navigation" data-mobile-nav-panel>
        <a class="mobile-nav-row" href="/">Home</a>
        ${renderMobileDisclosure("Solutions")}
        ${renderMobileDisclosure("Products")}
        ${renderMobileDisclosure("Company")}
        <div class="mobile-nav-actions">
          <a href="https://enviro.vepolink.com" target="_blank" rel="noopener noreferrer">Sign in</a>
          <a class="button button-dark" href="mailto:sales@vepolink.com">Book a walkthrough</a>
        </div>
      </nav>
    </header>
  `;

  const renderFooter = () => `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-brand">
          <a class="brand" href="/" aria-label="Vepolink home">
            <img src="/assets/vepolink-logo-horizontal-trimmed.png" width="185" height="36" alt="Vepolink">
          </a>
          <p>Real-time data acquisition, monitoring and analytics for environmental compliance. Designed for industries that take environment seriously.</p>
        </div>
        ${footerGroups
          .map(
            (group) => `
              <nav aria-label="${escapeHtml(group.aria)}">
                <h2>${escapeHtml(group.label)}</h2>
                ${group.links
                  .map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`)
                  .join("")}
              </nav>
            `
          )
          .join("")}
      </div>
      <div class="shell footer-bottom">
        <p class="mono">© 2026 Vepolink Technologies LLP · Monitoring purity</p>
        <nav aria-label="Legal links">
          <a href="mailto:techsupport@vepolink.com">Privacy</a>
          <a href="mailto:techsupport@vepolink.com">Terms</a>
          <a href="mailto:techsupport@vepolink.com">Security</a>
          <a href="mailto:techsupport@vepolink.com">SLA</a>
          <a href="mailto:techsupport@vepolink.com">Data residency</a>
        </nav>
      </div>
    </footer>
  `;

  const renderPartnerMarquee = () => {
    const visible = partnerNames.map((name) => `<span>${escapeHtml(name)}</span>`).join("");
    const hidden = partnerNames
      .map((name) => `<span aria-hidden="true">${escapeHtml(name)}</span>`)
      .join("");

    return `
      <div class="partner-marquee" aria-label="OEM analyser partners">
        <div>
          ${visible}
          ${hidden}
        </div>
      </div>
    `;
  };

  return {
    navGroups,
    partnerNames,
    renderHeader,
    renderFooter,
    renderPartnerMarquee,
  };
});
