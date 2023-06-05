import { Container } from "../../GlobalStyles";
import { formatMoney } from "../../helper/helper";
import {
  CartItem,
  CartList,
  CartTitle,
  TotalValue,
} from "./ShoppingCartStyles";

export function ShoppingCart({ cartList, removeProduct }) {
  const totalValue = cartList.reduce(
    (acumulador, itemAtual) =>
      acumulador + itemAtual.valor * itemAtual.quantidade,
    0
  );
  return (
    <Container width="400px" direction="column">
      <CartTitle>Carrinho</CartTitle>
      <CartList>
        {cartList.map((item) => {
          const { name, quantidade, id } = item;
          return (
            <CartItem>
              <div>{quantidade}x</div> <div>{name}</div>
              <button onClick={() => removeProduct(id)}>Remover</button>
            </CartItem>
          );
        })}
      </CartList>
      <TotalValue>Valor Total: {formatMoney(totalValue)}</TotalValue>
    </Container>
  );
}
