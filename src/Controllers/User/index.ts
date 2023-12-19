import { Request, Response } from "express";
import { prisma } from "../../Config/prisma";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
