const FlowMeterList = () => {
  return (
    <div className="shell p-5">
      <div className="split-heading pt-10 pb-15">
        <div>
          <span className="status-pill mb-2">
            <span></span> Our Products & Solutions
          </span>
          <h2>Continuous Monitoring of Flow</h2>
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
      id: 1,
      img: "/assets/images/flow/Electromagnetic Flowmeter – Inline.png",
      link: "/electromagnetic-flowmeter.html",
      h: "Flow Meter",
      p: "Electromagnetic Flowmeter – Inline ",
    },
    {
      id: 2,
      img: "/assets/images/flow/Electromagnetic Flowmeter – Insertion Type.png",
      link: "/electromagnetic-flowmeter.html",
      h: "Flow Meter",
      p: "Electromagnetic Flowmeter – Insertion Type",
    },
    {
      id: 3,
      img: "/assets/images/flow/Ultrasonic Flowmeter – Non Contact Type Sitrans Probe lu.png",
      link: "/electromagnetic-flowmeter.html",
      h: "Flow Meter",
      p: "Ultrasonic Flowmeter – Non Contact Type Sitrans Probe lu",
    },
    {
      id: 4,
      img: "/assets/images/flow/Ultrasonic Flowmeter – Inline.png",
      link: "/electromagnetic-flowmeter.html",
      h: "Flow Meter",
      p: "Ultrasonic Flowmeter – Inline",
    },
    {
      id: 5,
      img: "/assets/images/flow/Ultrasonic Flowmeter – Clamp On.png",
      link: "/electromagnetic-flowmeter.html",
      h: "Flow Meter",
      p: "Ultrasonic Flowmeter – Clamp On",
    },
    {
      id: 6,
      img: "/assets/images/flow/Ultrasonic Non-Contact Type (Sonic Intelligence).png",
      link: "/electromagnetic-flowmeter.html",
      h: "Flow Meter",
      p: "Ultrasonic Non-Contact Type (Sonic Intelligence)",
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
                    {/* <div className="text-md font-bold text-(--vilet) --ink-2  text-overflow">
                      {item.h}
                    </div> */}
                    <div
                      title={item.p}
                      className="text-md font-medium text-(--ink-3) text-center"
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
Object.assign(window, { FlowMeterList });
