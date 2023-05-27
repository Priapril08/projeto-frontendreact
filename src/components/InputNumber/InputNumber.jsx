import { InputNumberContainer } from "./InputNumberStyles";

export const InputNumber = ({ addProduct, product, removeProduct }) => {
  const { quantidade = 0 } = product;
  return (
    <InputNumberContainer>
      <button
        onClick={() => removeProduct(product.id)}
        disabled={quantidade <= 0}
      >
        -
      </button>
      <div className="label">{quantidade}</div>
      <button onClick={() => addProduct(product)}>+</button>
    </InputNumberContainer>
  );
};
