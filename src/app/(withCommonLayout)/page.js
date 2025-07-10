import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";
import SectionTitleAndButton from "@/components/shared/SectionTitleAndButton";

const HomePage = async () => {
  const prodRes = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 20, //this is used to revalidate/update the changes of database data automatically..
    },
  });

  const products = await prodRes.json();

  const postRes = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  const posts = await postRes.json();

  return (
    <div>
      <h1 className="text-4xl p-5 m-5 text-center">Hello World</h1>
      <h1 className="text-4xl p-5 m-5 text-center">
        Data Fetching, Caching and revalidating and abc
      </h1>
      <h2>Products</h2>
      <div className="flex gap-5 justify-center my-10">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <SectionTitleAndButton
        title={"Posts"}
        buttonName={"See All"}
        path={"/posts"}
      />

      <div className="grid grid-cols-4 gap-5 mx-15 my-10">
        {posts.slice(0, 4).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
