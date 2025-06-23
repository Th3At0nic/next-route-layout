import PostCard from "@/components/PostCard";
import React from "react";

const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 30,
    },
  });

  const posts = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center text-green-500 my-5 font-bold ">
        Explore all the posts here
      </h1>
      <div className="grid grid-cols-4 gap-5 mx-15 my-10">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
