import ProductCard from "@/components/ProductCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });

  const products = await res.json();

  console.log("products: ", products);

  return (
    <div>
      <h1 className="text-4xl p-5 m-5 text-center">Hello World</h1>
      <h1 className="text-4xl p-5 m-5 text-center">
        Data Fetching, Caching and revalidatingggg
      </h1>
      <div className="flex gap-5 justify-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
