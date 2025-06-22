import ProductCard from "@/components/ProductCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5, //this is used to revalidate/update the changes of database data automatically
    },
  });

  const products = await res.json();

  console.log("products: ", products);

  return (
    <div>
      <h1 className="text-4xl p-5 m-5 text-center">Hello World</h1>
      <h1 className="text-4xl p-5 m-5 text-center">
        Data Fetching, Caching and revalidating and abc
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
