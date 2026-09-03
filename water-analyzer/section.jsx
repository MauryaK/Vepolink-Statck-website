const useReveal = (delay = 0) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);

  return [ref, shown];
};

const Reveal = ({
  children,
  delay = 0,
  y = 18,
  as: As = "div",
  style,
  className = "",
}) => {
  const [ref, shown] = useReveal(delay);

  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition:
          "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
        ...(style || {}),
      }}
    >
      {children}
    </As>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full py-15 bg-(--card) rounded border border-(--line)">
      <div className="shell">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-12 items-center">
          <div className="w-[35%] flex justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center">
              <img src="/assets/images/prod_1.png" className="max-w-[300px]" />
            </div>
          </div>
          <div className="w-[65%]">
            <div className="p-5 w-[80%] ml-auto mr-0">
              <Reveal delay={120 * 1}>
                <h1
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                    lineHeight: window.screen.width < 767 ? 1.3 : 1.02,
                    letterSpacing: "-0.03em",
                    margin: 0,
                    textWrap: "balance",
                  }}
                >
                  Online Water Quality Analyzer
                </h1>
              </Reveal>
              <Reveal delay={120 * 2}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end md:mt-[28px] mt-[15px]">
                  <p
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.1475rem)",
                      lineHeight: 1.55,
                      color: "var(--mute)",
                      margin: 0,
                      maxWidth: 620,
                      textWrap: "pretty",
                    }}
                  >
                    Monitor BOD, COD, TSS and other critical water quality
                    parameters with high accuracy for industrial and
                    environmental applications.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120 * 3}>
                <FeaturesSlides />
              </Reveal>
              <div
                className="flex flex-col sm:flex-row sm:flex-wrap"
                style={{ gap: 12, marginTop: 24 }}
              >
                <button
                  onClick={() => (window.location.href = "/product/")}
                  className="button button-dark cursor-pointer"
                >
                  View Detail →
                </button>
                <button
                  onClick={() => (window.location.href = "")}
                  className="button button-light cursor-pointer"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AppListing = () => {
  const data = [
    {
      text: "Water Analyzers",
      parameter: ["pH Analog"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img003.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["ORP Analog"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img003.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["EC Analog"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img003.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["pH Digital"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["EC Digital"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["Optical Dissolved Oxygen (ODO)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img009.png",
      datasheet: "/water-analyzer.pdf",
    },

    {
      text: "Water Analyzers",
      parameter: ["Residual Chlorine Sensor (RCL)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["UV COD"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },

    {
      text: "Water Analyzers",
      parameter: ["Suspended Solids/Sludge (SS)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img014.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["Chlorophyll (CPHL)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img016.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["Turbidity"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img014.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["Blue Green Algae (BGA)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img016.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["Oil in Water (OIW)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img018.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["Ammonia Nitrogen (NH4N)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img019.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Water Analyzers",
      parameter: ["Nitrate Nitrogen (NO3N)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgnon3.png",
      datasheet: "/water-analyzer.pdf",
    },

    // {
    //   text: "Water Analyzers",
    //   parameter: ["Residual Chlorine"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img010.png",
    //   datasheet: "/water-analyzer.pdf",
    // },

    // {
    //   text: "Water Analyzers",
    //   parameter: ["Digital Conductivity"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/imgpH.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Analog Conductivity"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },

    // {
    //   text: "Water Analyzers",
    //   parameter: ["Analog TDS"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Ammonia"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img019.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Cyanide"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Fluoride (F-)"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Sodium (Na+)"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Chloride (Cl-)"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Water Hardness"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
  ];
  return (
    <div className="shell">
      <div className="py-15">
        <div className="mb-13">
          <h2>Compatible with Sensor Probes.</h2>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {data.map((list, i) => (
            <div
              key={i}
              className="prod_list max-w-full col-span-1 bg-white border border-(--line-2) rounded-[10px] overflow-hidden"
            >
              <a
                href={list.href}
                className="block w-full relative overflow-hidden h-full"
              >
                <div className="w-full">
                  <div className="img-place w-full min-h-[280px]  bg-white flex flex-row items-center justify-center">
                    <img
                      src={list.image}
                      className="w-auto max-h-[250px] mix-blend-darken"
                    />
                  </div>
                  <div className="produ_name p-3 z-2 overflow-hidden">
                    {list.parameter.length > 0 &&
                      list.parameter.map((p, i) => (
                        <div
                          key={i}
                          className="font-bold text-base text-center"
                        >
                          {p}
                        </div>
                      ))}
                    <div className="btn_det px-3 py-2 border mt-6 border-( --muted-2) text-center rounded-full">
                      View Detail
                    </div>
                  </div>
                  <div className="hover_overlay"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { HeroSection, AppListing });
const FeaturesSlides = () => {
  const features_list = [
    "✓ Real-Time Monitoring",
    "✓ High Accuracy",
    "✓ Remote Access",
    "✓ Low Maintenance",
  ];
  return (
    <section
      style={{
        padding: window.screen.width < 767 ? "0px" : "15px 0",
        marginTop: window.screen.width < 767 ? "0px" : "25px",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--mute)",
          borderBottom: "1px solid var(--mute)",
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 28,
            animation: "vepoScroll 30s linear infinite",
            width: "max-content",
            padding: "12px 24px",
          }}
        >
          {[...features_list, ...features_list, ...features_list].map(
            (p, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "Geist",
                  fontSize: "clamp(14px, 2vw, 18px)",
                  fontWeight: 600,
                  color: "var(--ink-3)",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="w-[6px] h-[6px] bg-[var(--ink-3)] mr-2.5 inline-block"
                  style={{ verticalAlign: "middle" }}
                ></span>
                {p}
              </span>
            ),
          )}
        </div>
        <style>{`@keyframes vepoScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
};
