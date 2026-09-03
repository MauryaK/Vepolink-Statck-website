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
const ProductData = () => {
  const data = [
    {
      text: "Water Analyzers",
      href: "water-analyzer/index.html",
      image: "assets/images/water-analyzer.png",
      addtext: "Compatible with other sensors",
      children: [
        {
          text: "Water Analyzers",
          parameter: ["BOD", "COD", "TSS"],
          href: "product-detail.html?slug=water-analyzer",
          image: "assets/images/prod_1.png",
          datasheet: "/water-analyzer.pdf",
        },
      ],
    },
    {
      text: "CAAQMS",
      href: "/caaqms/index.html",
      image: "assets/images/caaqms-banner.png",
      children: [
        {
          text: "Continuous Ambient Air Quality Monitoring System",
          href: "#",
          image: "assets/images/CAAQMS.png",
          parameter: ["SOX", "NOX", "CO", "PM10", "PM2.5"],
          datasheet: "/water-analyzer.pdf",
        },
      ],
    },
    // {
    //   text: "CEMS",
    //   href: "/cems/index.html",
    //   image: "assets/images/cems.png",
    //   children: [
    //     {
    //       text: "Continuous Emission Monitoring System",
    //       href: "#",
    //       image: "assets/images/continuous-emission-monitoring-system.png",
    //       parameter: ["PM", "SO2", "NOX"],
    //       datasheet: "/water-analyzer.pdf",
    //     },
    //   ],
    // },
    {
      text: "FLOW & LEVEL",
      href: "/flow-meter/index.html",
      image: "assets/images/flow-level.png",
      children: [
        {
          text: "Continuous Monitoring of Flow",
          href: "#",
          image: "assets/images/continuous-emission-monitoring-system.png",
          parameter: ["PM", "SO2", "NOX"],
          datasheet: "",
        },
      ],
    },
    {
      text: "Gas Detection",
      href: "/gas-detection/index.html",
      image: "assets/images/gas-detection.png",
      children: [
        {
          text: "Gas Detection & Leakage Recognition",
          href: "#",
          image: "assets/images/spm-light-scater.png",
          parameter: ["SPM", "SO2", "NOX"],
          datasheet: "/water-analyzer.pdf",
        },
      ],
    },
    {
      text: "Gas Analyzer",
      href: "/gas-analyzer/index.html",
      image: "assets/images/gas-analyzer.png",
      children: [
        {
          text: "Gas Analyzer",
          href: "#",
          image: "assets/images/spm-light-scater.png",
          parameter: ["SPM", "SO2", "NOX"],
          datasheet: "/water-analyzer.pdf",
        },
      ],
    },
    {
      text: "NOISE & VIBRATION",
      href: "/noise-vibration/index.html",
      image: "assets/images/noise-vibration.png",
      children: [
        {
          text: "NOISE & VIBRATION",
          href: "#",
          image: "assets/images/noise-vibration.png",
          parameter: ["PM", "SO2", "NOX"],
          datasheet: "/water-analyzer.pdf",
        },
      ],
    },
  ];
  return data;
};

const ProductListFilter = () => {
  const DownIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="text-black/70"
      >
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
      </svg>
    );
  };

  const data = ProductData();

  const [openCategory, setOpenCategory] = React.useState(data[0].text);
  const handleCatDropdown = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className=" py-2">
      <div className="w-full px-8">
        {data.map((item, i) => {
          return (
            <div key={i} className="border-b border-(--line)  py-3">
              <div
                className={`${openCategory === item.text ? "text-black/90" : "text-black/70"} cursor-pointer text-sm font-medium uppercase flex flex-row items-center justify-between`}
                onClick={() => handleCatDropdown(item.text)}
              >
                {item.text}
                {openCategory === item.text ? (
                  <div className="rotate-180 transition duration-700 ease-in-out">
                    <DownIcon />
                  </div>
                ) : (
                  <div>
                    <DownIcon />
                  </div>
                )}
              </div>
              {openCategory === item.text && (
                <div className="w-full mt-2 max-h-[200px] overflow-hidden overflow-y-auto">
                  {item.children.map((chi, l) => (
                    <Reveal key={l} delay={120 * l}>
                      <label
                        htmlFor={String(chi.text)
                          .toLocaleLowerCase()
                          .replaceAll(" ", "_")}
                        type="checkbox"
                        value={chi.text}
                        className="cursor-pointer w-full flex flex-row gap-2 items-center jsutify py-1 flex flex-row gap-2 items-center"
                      >
                        <div className="w-[24px] h-[25px]  cursor-pointer bg-(--paper) border border-(--line-2) flex flex-row items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18px"
                            viewBox="0 -960 960 960"
                            width="18px"
                            fill="var(--line)"
                          >
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray">{chi.text}</div>
                        <input
                          style={{
                            display: "none",
                            visibility: "hidden",
                            pointerEvents: "none",
                          }}
                          name={String(chi.text)
                            .toLocaleLowerCase()
                            .replaceAll(" ", "_")}
                          type="checkbox"
                          value={chi.text}
                          id={String(chi.text)
                            .toLocaleLowerCase()
                            .replaceAll(" ", "_")}
                          type="checkbox"
                          value={chi.text}
                        />
                      </label>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProductListing = () => {
  const data = ProductData();
  return (
    <div className="shell py-10">
      <div className="shell split-heading">
        <div>
          <span class="status-pill mb-2">
            <span></span> Our Products & Solutions
          </span>
          <h2>Complete Environmental Instrumentation Solutions</h2>
        </div>
        <p className="text-[17px] text-(--muted)">
          We provide complete environmental instrumentation solutions for air,
          water, emissions, and meteorological monitoring. Our advanced systems
          deliver accurate, real-time data to help organizations meet regulatory
          requirements, enhance operational efficiency, and make informed
          environmental decisions with confidence.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {data.map((item, i) => (
          <div
            key={i}
            className="max-w-full col-span-1 shadow rounded-[10px] overflow-hidden"
          >
            <a href={item.href} className="block w-full relative">
              <div className="w-full">
                <div className="img-place w-full   bg-white flex flex-row items-center justify-center">
                  <img src={item.image} className="w-full mix-blend-darken" />
                </div>
                <div className="p-3 absolute bottom-0 left-0 w-full hidden">
                  <div className="font-bold text-base mb-2 text-center">
                    {item.text}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, {
  ProductStrip,
  ProductListFilter,
  ProductListing,
  Reveal,
});
