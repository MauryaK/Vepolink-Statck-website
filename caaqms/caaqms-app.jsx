const CAAQMSAPP = () => (
  <>
    <site-header></site-header>
    <main>
      <div className="flex flex-row">
        <ProductList />
      </div>
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<CAAQMSAPP />);
