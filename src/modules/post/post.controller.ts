import { Response, Request } from "express";
import { PostService } from "./post.service";

export const insertPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.send({
      succcess: true,
      message: "post added succcessfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const getAllPost = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await PostService.getAllPost(options);
    res.send({
      succcess: true,
      message: "post retrieved succcessfully",
      data: result.data,
      total: result.total,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertPost,
  getAllPost,
};
