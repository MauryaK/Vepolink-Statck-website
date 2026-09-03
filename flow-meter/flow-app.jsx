const FlowMeterAPP = () => (
  <>
    <site-header></site-header>
    <main>
      <div className="flex flex-row">
        <FlowMeterList />
      </div>
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<FlowMeterAPP />);
