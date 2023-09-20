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
export const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);
    res.send({
      succcess: true,
      message: "post updated succcessfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const result = await PostService.deletePost(id);
    res.send({
      succcess: true,
      message: "post deleted succcessfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const learnAggregateAndGrouping = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();
    res.send({
      succcess: true,
      message: "post average succcessfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertPost,
  getAllPost,
  deletePost,
  updatePost,
  learnAggregateAndGrouping,
};
