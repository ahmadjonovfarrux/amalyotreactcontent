import Product from "./Product";

function ProductList({ data, isPending }) {
  return (
    <div className="data">
      <h1 className="data-title">Products: </h1>
      <div className="data-ProductPage">
        <div className="data-container">
          {data &&
            data.map((d) => {
              return <Product d={d} key={d.id} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
