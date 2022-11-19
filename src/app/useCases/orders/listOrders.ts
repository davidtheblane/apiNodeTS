import { Request, Response } from 'express';
import { Order } from '../../models/Order';
import { listProducts } from '../products/listProducts';

export async function listOrders(req: Request, res: Response){
  const orders = await Order
  // busca as ordens no banco
    .find()
  // organiza na ordem crescente, os pedidos aparecem na ordem que foram criados.
    .sort({createdAt: 1})
  // popula a ordem encontrada com os produtos referentes a ela,
  // graças a referencia paassada no model de produto.
    .populate('products.product');

  res.json(orders);
}
