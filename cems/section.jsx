const ProductList = () => {
  return (
    <div className="shell p-5">
      <div className="split-heading pt-10 pb-15">
        <div>
          <span className="status-pill mb-2">
            <span></span> Our Products & Solutions
          </span>
          <h2>Advanced CEMS Technology for Real-Time Insights</h2>
        </div>
        <p className="text-[17px] text-(--muted)">
          Empower your environmental strategy with our Continuous Emission
          Monitoring System. Engineered to detect trace-level pollutants with
          high precision, our robust CEMS platforms provide 24/7 actionable
          data, ensuring regulatory adherence and enabling you to monitor
          localized air quality trends with absolute confidence.
        </p>
      </div>
      <Listing />
    </div>
  );
};

const Listing = () => {
  const data = [
    {
      id: 2,
      img: "/assets/images/caaqms/PM10_630_450.png",
      link: "/PM10_630_450.html",
      h: "PM 10",
      p: "PM 10 (CEMS)",
    },
    {
      id: 3,
      img: "/assets/images/caaqms/ambient-so2-gas-analyzer.png",
      link: "/ambient-so2-gas-analyzer.html",
      h: "Ambient SO2 Gas Analyzer",
      p: "SO2 Gas Analyzer (CEMS)",
    },
    {
      id: 4,
      img: "/assets/images/caaqms/ambient-nox-gas-analyzer.png",
      link: "/ambient-nox-gas-analyzer.html",
      h: "NOx Analyzer",
      p: "NOx Analyzer (CEMS)",
    },
  ];
  return (
    <div className="py-10 border-t border-(--line)">
      <div className="grid grid-cols-4 gap-5">
        {data &&
          data.map((item) => (
            <div key={item.id} className="col-span-1 h-full">
              <div className="rounded border border-(--line) h-full">
                <a href={item.link} className="block p-3 ">
                  <div className="w-full p-4 flex flex-col items-center justify-center min-h-[286px]">
                    <img src={item.img} className="max-h-[254px]" />
                  </div>
                  <div className="p-3">
                    {/* <div className="text-md font-bold text-(--vilet)">
                      {item.h}
                    </div> */}
                    <div
                      title={item.p}
                      className="text-md font-medium text-(--muted-2-) text-center"
                    >
                      {item.p}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
Object.assign(window, { ProductList });
