const WaterAnalyzer = () => {
  return (
    <>
      <site-header></site-header>
      <main id="product-list-main">
        <div className="flex flex-row">
          <div className="flex-1 p-5 w-full">
            <HeroSection />
            <AppListing />
          </div>
        </div>
      </main>
      <site-footer></site-footer>
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<WaterAnalyzer />);
