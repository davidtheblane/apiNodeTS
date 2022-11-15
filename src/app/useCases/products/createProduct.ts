import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response){
  try {
    // console.log(req.body);
    // console.log(req.file);
    const imagePath = req.file?.filename;
    const {name, description, price, category, ingredients} = req.body;

    const product = await Product.create({
      name,
      description,
      category,
      imagePath,
      price: Number(price),
      ingredients: JSON.parse(ingredients),
    });
    // console.log(product);

    res.status(201).json(product);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
