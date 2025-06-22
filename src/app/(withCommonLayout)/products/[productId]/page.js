const DynamicProductPage = async ({ params, searchParams }) => {
  const { productId } = await params;
  console.log("product id: ", productId);
  console.log("search params: ", await searchParams);

  return (
    <div>
      <h1 className="text-3xl text-center"> This is dynamic product page</h1>
    </div>
  );
};

export default DynamicProductPage;
