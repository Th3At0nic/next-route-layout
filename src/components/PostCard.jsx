
const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-xl hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b border-gray-500 ">{post.title}</h3>
      <p className="text-sm text-gray-600 whitespace-pre-line">{post.body}</p>
      <div className="text-xs text-gray-400 mt-3">Post ID: {post.id} • User: {post.userId}</div>
    </div>
  );
};

export default PostCard;
