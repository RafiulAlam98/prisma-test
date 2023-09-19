import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDb(req.body);
    res.send({
      succcess: true,
      message: "user created succcessfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      succcess: true,
      message: "user created or updated succcessfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      succcess: true,
      message: "user retrieved succcessfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      succcess: true,
      message: "user retrieved succcessfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoDb,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};
