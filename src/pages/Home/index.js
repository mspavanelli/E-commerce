import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

const Home = () => (
  <ProductList>
    <li>
      <img
        src="https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg"
        alt="Tênis"
      />
      <strong>Tênis</strong>
      <span>R$129,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />1
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </li>
    <li>
      <img
        src="https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg"
        alt="Tênis"
      />
      <strong>
        Tênis com descrição tão grande que quebra em mais de uma linha
      </strong>
      <span>R$129,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />1
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </li>
    <li>
      <img
        src="https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg"
        alt="Tênis"
      />
      <strong>Tênis</strong>
      <span>R$129,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />1
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </li>
    <li>
      <img
        src="https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg"
        alt="Tênis"
      />
      <strong>Tênis</strong>
      <span>R$129,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />1
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </li>
    <li>
      <img
        src="https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg"
        alt="Tênis"
      />
      <strong>Tênis</strong>
      <span>R$129,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />1
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </li>
    <li>
      <img
        src="https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg"
        alt="Tênis"
      />
      <strong>Tênis</strong>
      <span>R$129,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />1
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </li>
  </ProductList>
);

export default Home;
