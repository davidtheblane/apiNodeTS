import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response){
  try {
    const {status} = req.params;

    const orderStatus = await Order.updateOne({status});
    res.status(201).json(orderStatus);

  } catch (error) {
    console.log({error});
    res.sendStatus(500);
  }
}
