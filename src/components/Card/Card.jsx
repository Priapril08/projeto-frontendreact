import { formatMoney } from "../../helper/helper";
import { InputNumber } from "../InputNumber/InputNumber";

import {
  CardContainer,
  ProductInfoContainer,
  ProductTitle,
} from "./CardStyles";

export const Card = ({ product, addProduct, cart, removeProduct }) => {
  const { image, name, valor } = product;
  const foundProduct = cart.find((item) => item.id === product.id);
  return (
    <CardContainer image={image}>
      <ProductInfoContainer>
        <ProductTitle>{name}</ProductTitle>
        <div>{formatMoney(valor)}</div>
        <InputNumber
          addProduct={addProduct}
          product={foundProduct || product}
          removeProduct={removeProduct}
        />
      </ProductInfoContainer>
    </CardContainer>
  );
};
