import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

const Cart = () => (
  <Container>
    <ProductTable>
      <thead>
        <tr>
          <th></th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg"
              alt="Tênis"
            />
          </td>
          <td>
            <strong>Tênis</strong>
            <span>R$129,90</span>
          </td>
          <td>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="text" readOnly value={1} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </div>
          </td>
          <td>
            <strong>R$259,80</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tr>
      </tbody>
    </ProductTable>

    <footer>
      <button type="button">Finalizar pedido</button>

      <Total>
        <span>Total</span>
        <strong>R$ 129,90</strong>
      </Total>
    </footer>
  </Container>
);

export default Cart;
