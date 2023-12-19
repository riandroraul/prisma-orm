import { Request, Response } from "express";
import { prisma } from "../../Config/prisma";

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    return res.json(posts);
  } catch (error) {
    console.log(error);
  }
};
