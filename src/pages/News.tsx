import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { Post } from "../UI/components/post/post";

const News = () => {
  const { posts } = useSelector((state: RootState) => state.news);
  return (
    <div>
      {posts.map((post, key: number) => (
        <Post post={post} key={key} />
      ))}
    </div>
  );
};

export { News };
