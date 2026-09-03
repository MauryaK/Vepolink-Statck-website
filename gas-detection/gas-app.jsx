const GasAnalyzerAPP = () => (
  <>
    <site-header></site-header>
    <main>
      <div className="flex flex-row">
        <GasAnalyzer />
      </div>
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<GasAnalyzerAPP />);
