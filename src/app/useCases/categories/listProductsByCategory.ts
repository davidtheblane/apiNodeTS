import {Request, Response} from 'express';
import { Category } from '../../models/Category';

export async function listProductsByCategory(req: Request, res: Response){
  try {
    const {categoryId} = req.params;
    const categories = await Category.find({categoryId});

    res.json(categories);

  } catch (error) {
    return error;
  }
}
