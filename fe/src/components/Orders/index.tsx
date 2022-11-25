import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6378461e082a87bef75e3df9',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668552440227-quatro-queijos.png',
          'price': 35,
        },
        'quantity': 2,
        '_id': '6378461e082a87bef75e3dfa'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668825393786-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '6378461e082a87bef75e3dfb'
      }
    ],
  },
];

export function Orders(){
  return(
    <Container>
      <OrdersBoard
        icon='⏰'
        title='Fila de espera'
        orders={orders}
      />
      <OrdersBoard
        icon='🍳'
        title='Em preparação'
        orders={[]}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto!'
        orders={[]}
      />
    </Container>

  );
}
