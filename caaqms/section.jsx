const ProductList = () => {
  return (
    <div className="shell p-5">
      <div className="split-heading pt-10 pb-15">
        <div>
          <span className="status-pill mb-2">
            <span></span> Our Products & Solutions
          </span>
          <h2>Advanced CAAQMS Technology for Real-Time Insights</h2>
        </div>
        <p className="text-[17px] text-(--muted)">
          Empower your environmental strategy with our Continuous Ambient Air
          Quality Monitoring Systems. Engineered to detect trace-level
          pollutants with high precision, our robust CAAQMS platforms provide
          24/7 actionable data, ensuring regulatory adherence and enabling you
          to monitor localized air quality trends with absolute confidence.
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
      img: "/assets/images/caaqms/climaguard.png",
      link: "/climaguard.html",
      h: "",
      p: "Clima Guard",
    },
    {
      id: 2,
      img: "/assets/images/caaqms/PM10_630_450.png",
      link: "/PM10_630_450.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Particulate Monitoring (PM 10)",
    },
    {
      id: 3,
      img: "/assets/images/caaqms/ambient-so2-gas-analyzer.png",
      link: "/ambient-so2-gas-analyzer.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Ambient SO2 Gas Analyzer",
    },
    {
      id: 4,
      img: "/assets/images/caaqms/ambient-nox-gas-analyzer.png",
      link: "/ambient-nox-gas-analyzer.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Ambient NOx Gas Analyzer",
    },
    {
      id: 5,
      img: "/assets/images/caaqms/ambient-ozone-gas-analyzer.png",
      link: "/ambient-ozone-gas-analyzer.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Ambient Ozone Gas Analyzer",
    },
    {
      id: 6,
      img: "/assets/images/caaqms/ambient-co-gas-analyzer.png",
      link: "/ambient-co-gas-analyzer.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Ambient CO Gas Analyzer",
    },
    {
      id: 7,
      img: "/assets/images/caaqms/million-plus-cities-urban-aqms.png",
      link: "/million-plus-cities-urban-aqms.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Million Plus cities urban air quality monitoring station",
    },
    {
      id: 8,
      img: "/assets/images/caaqms/multipoint-calibrator.png",
      link: "/multipoint-calibrator.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Multi point calibrator",
    },
    {
      id: 9,
      img: "/assets/images/caaqms/laser-scattering.png",
      link: "/laser-scattering.html",
      h: "",
      p: "Vair 3000 Series",
    },
    {
      id: 10,
      img: "/assets/images/caaqms/ultrasonic-weather-monitoring-station.png",
      link: "/ultrasonic-weather-monitoring-station.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Ultrasonic Weather Monitoring Station",
    },
    {
      id: 11,
      img: "/assets/images/caaqms/zero-air-unit.png",
      link: "/zero-air-unit.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Zero Air Unit",
    },
    {
      id: 12,
      img: "/assets/images/caaqms/portable-multi-point-calibrator-zero-air-unit.png",
      link: "/portable-multi-point-calibrator-zero-air-unit.html",
      h: "Continuous Ambient Air Quality Monitoring Systems",
      p: "Portable Multi Point Calibrator & Zero Air Unit",
    },
    {
      id: 13,
      img: "/assets/images/caaqms/low-volume-pm-sampler-pm2.5-and-pm10.png",
      link: "/low-volume-pm-sampler-pm2.5-and-pm10.html",
      h: "Low Volume PM Sampler",
      p: "Low Volume PM Sampler (PM 2.5 & PM 10)",
    },
    {
      id: 14,
      img: "/assets/images/caaqms/Particle-Counter.png",
      link: "/particle-counter.html",
      h: "Industrial grade Laser for High Reliability",
      p: "Particle Counter",
    },
    {
      id: 15,
      img: "/assets/images/caaqms/benzene-series-online-analyzer.png",
      link: "/benzene-series-online-analyzer.html",
      h: "Gas Chromatography",
      p: "Benzene Series Online Analyzer",
    },
    {
      id: 16,
      img: "/assets/images/caaqms/hydrogen-fluoride-gas-analyzer.png",
      link: "/hydrogen-fluoride-gas-analyzer.html",
      h: "Gas Analyzer",
      p: "Hydrogen Fluoride (HF) Gas Analyzer",
    },
    {
      id: 17,
      img: "/assets/images/caaqms/benzene-series-online-analyzer.png",
      link: "/benzene-series-online-analyzer.html",
      h: "Benzene / Btex Analyzer",
      p: "Benzene / Btex Analyzer",
    },
    {
      id: 18,
      img: "/assets/images/caaqms/hydrogen-generator.png",
      link: "/hydrogen-generator.html",
      h: "Hydrogen H2 Generato",
      p: "Hydrogen H2 Generator",
    },
    {
      id: 19,
      img: "/assets/images/caaqms/online-voc-gas-analyser.png",
      link: "/online-voc-gas-analyser.html",
      h: "FID Technology",
      p: "Online VOC Gas Analyzer GC - FID Technology",
    },
    {
      id: 20,
      img: "/assets/images/caaqms/ambient-co2-gas-analyzer.png",
      link: "/ambient-co2-gas-analyzer.html",
      h: "Ambient CO2 Gas Analyzer",
      p: "Ambient CO2 Gas Analyzer",
    },
    {
      id: 21,
      img: "/assets/images/caaqms/co-analyser-kentek.png",
      link: "/co-analyser-kentek.html",
      h: "CO Analyzer",
      p: "Carbon Monoxide Analyzer",
    },
    {
      id: 22,
      img: "/assets/images/caaqms/PM10_630_450.png",
      link: "/bpm-200.html",
      h: "PM 2.5",
      p: "PM 2.5 (CAAQMS)",
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
