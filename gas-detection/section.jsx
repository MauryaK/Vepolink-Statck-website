const GasAnalyzer = () => {
  return (
    <div className="shell p-5">
      <div className="split-heading pt-10 pb-15">
        <div>
          <span className="status-pill mb-2">
            <span></span> Our Products & Solutions
          </span>
          <h2>Advanced Gas Detection Solutions</h2>
        </div>
        <p className="text-[17px] text-(--muted)">
          Advanced gas detection for accurate, real-time measurement of multiple
          gases, ensuring process efficiency, environmental compliance, and
          workplace safety.
        </p>
      </div>
      <Listing />
    </div>
  );
};

const Listing = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/gas/single-gas-detector.png",
      link: "/single-gas-detector.html",
      h: "Portable Single Gas Detector",
      p: "Portable Single Gas Detector",
    },
    {
      id: 2,
      img: "/assets/images/gas/multi-gas-detector.png",
      link: "/multi-gas-detector.html",
      h: "Portable Multi Gas Detector",
      p: "Portable Multi Gas Detector",
    },
    {
      id: 7,
      img: "/assets/images/gas/fixed-gas-detector.png",
      link: "/fixed-gas-detector.html",
      h: "Fixed gas detector",
      p: "Fixed gas detector",
    },
  ];
  return (
    <div className="py-10 border-t border-(--line)">
      <div className="grid grid-cols-4 gap-5">
        {data && data.length === 0 ? (
          <div className="card text-center col-span-4">No Record Found</div>
        ) : (
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
          ))
        )}
      </div>
    </div>
  );
};
Object.assign(window, { GasAnalyzer });
