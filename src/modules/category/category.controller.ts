import { Request, Response } from "express";
import { CategoryService } from "./category.service";

export const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDb(req.body);
    res.send({
      status: 200,
      success: true,
      message: "category added",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const CategoryController = {
  insertIntoDb,
};
