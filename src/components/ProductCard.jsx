const ProductCard = ({ product }) => {
  console.log("product: ", product);
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-xs hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.brand}</p>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-green-600 font-bold">${product.price}</span>
          <span className="text-xs text-yellow-600">⭐ {product.rating}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Stock: {product.stock}</p>
      </div>
    </div>
  );
};

export default ProductCard;
