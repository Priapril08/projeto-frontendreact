import { useState } from "react";
import { Container, GridContainer } from "../../GlobalStyles";
import { Card } from "../Card/Card";

export function Home({
  products,
  minValue,
  name,
  maxValue,
  addProduct,
  cart,
  removeProduct,
}) {
  const [sort, setSort] = useState("");
  const filterProducts = products
    .filter((product) => product.valor > minValue || !minValue)
    .filter((product) => product.valor < maxValue || !maxValue)
    .filter((product) => {
      const productName = product.name.toLowerCase();
      const searchValue = name.toLowerCase();
      const searchWords = searchValue.split(" ");
      return searchWords.some((word) => productName.includes(word));
    });
  const sortedProducts = () => {
    if (sort) {
      if (sort == "increase") {
        return filterProducts.sort((a, b) => a.valor - b.valor);
      } else {
        return filterProducts.sort((a, b) => b.valor - a.valor);
      }
    } else {
      return filterProducts;
    }
  };

  return (
    <Container direction="column">
      <Container justify="space-between" height="50px">
        <div>Quantidade Total de Produtos: {sortedProducts().length}</div>
        <select value={sort} onInput={(e) => setSort(e.target.value)}>
          <option value="">Selecione</option>
          <option value="increase">Crescente</option>
          <option value="decrease">Decrescente</option>
        </select>
      </Container>

      <GridContainer>
        {sortedProducts().map((product) => {
          return (
            <Card
              product={product}
              addProduct={addProduct}
              cart={cart}
              removeProduct={removeProduct}
            />
          );
        })}
      </GridContainer>
    </Container>
  );
}
