import {  TPost } from "./post.interface";
import Post from "./post.model";

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload);
  return result;
};
// const getAllPostsFromDB = async () => {
//   const result = await Post.find()
//     .populate("author", "_id name email image")
//     .populate({
//       path: "comments.commenter",
//       select: "_id name email image",
//     });
//   return result;
// };

const getAllPostsFromDB = async () => {
  const result = await Post.find()
    .populate("author", "_id name email image")
    .select({ comments: 0 });
  return result;
};

const getSinglePostFromDB = async (id: string) => {
  const post = await Post.findById(id)
    .populate("author", "_id name email image")
    .populate({
      path: "comments.commenter",
      select: "_id name email image",
    });
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

const updatePostIntoDB = async (id: string, payload: Partial<TPost>) => {
  const result = await Post.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};



export const postServices = {
  createPostIntoDB,
  getAllPostsFromDB,

  getSinglePostFromDB,

  updatePostIntoDB,


};
