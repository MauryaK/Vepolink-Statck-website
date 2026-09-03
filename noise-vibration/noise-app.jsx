const NoiseVibrationApp = () => {
  return (
    <>
      <site-header></site-header>
      <main id="noise-vibraion-main">
        <div className="flex flex-row">
          <div className="flex-1 p-5">
            <NoiseVibrationHero />
          </div>
        </div>
      </main>
      <site-footer></site-footer>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <NoiseVibrationApp />,
);
