import React from "react";
import { IPost } from "../../../interfaces/App";

const Post = ({ post }: { post: IPost }) => {
  return <div> {post.title} </div>;
};

export { Post };
