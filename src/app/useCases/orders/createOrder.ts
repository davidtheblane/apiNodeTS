import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response ){
  try {
    const {table, status, createdAt, products} = req.body;

    const order = await Order.create({table, status, createdAt, products});

    res.status(201).json(order);

  } catch (error) {
    console.log({error});
    res.sendStatus(500);
  }
}
