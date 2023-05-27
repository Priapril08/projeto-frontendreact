import { Container, GlobalStyles } from "./GlobalStyles";
import { Filter } from "./components/Filter/Filter";
import { Home } from "./components/Home/Home";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import "./App.css";
import { useState } from "react";

function App() {
  const initialProducts = [
    {
      id: 1,
      name: "Morango (12 un)",
      valor: 8.5,
      image:
        "https://i.pinimg.com/originals/ab/50/b6/ab50b6b103a4face5a033fd786a16ea3.jpg ",
    },
    {
      id: 2,
      name: "Mexerica (6 un)",
      valor: 5.5,
      image:
        "https://i.pinimg.com/564x/e6/62/5f/e6625f3709d6fe8f6ff3beb8d15eb043.jpg",
    },
    {
      id: 3,
      name: "Maçã Argentina (6 un)",
      valor: 10.5,
      image:
        "https://i.pinimg.com/564x/6c/ad/df/6caddfe2fcd32a87e2dedcfe52589016.jpg",
    },
    {
      id: 4,
      name: "Figo (6 un)",
      valor: 8.5,
      image:
        "https://images.pexels.com/photos/7438529/pexels-photo-7438529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
    },
    {
      id: 5,
      name: "Abacate (1 un)",
      valor: 2.5,
      image:
        "https://images.pexels.com/photos/9289804/pexels-photo-9289804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
    },
    {
      id: 6,
      name: "Lichia (20 un)",
      valor: 10.0,
      image:
        "https://i.pinimg.com/564x/e2/ab/71/e2ab71f89f528e0d477e6111406bd86e.jpg",
    },
    {
      id: 7,
      name: "Manga (1 un)",
      valor: 2.0,
      image:
        "https://images.pexels.com/photos/2363345/pexels-photo-2363345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      name: "Mamão (1 un)",
      valor: 3.0,
      image:
        "https://i.pinimg.com/564x/c7/a1/dd/c7a1dd2bfe9f4a251aa9c8f8c61bb9f9.jpg",
    },
    {
      id: 9,
      name: "Laranja pera (6 un)",
      valor: 5.5,
      image:
        "https://i.pinimg.com/564x/13/3f/a9/133fa92979b6d71ad4b4d478c4a111ba.jpg",
    },
    {
      id: 10,
      name: "Banana (6 un)",
      valor: 5.5,
      image:
        "https://i.pinimg.com/564x/8f/86/27/8f86278fbc94cb5b518bf5c99cb60389.jpg",
    },
    {
      id: 11,
      name: "Limão Siciliano (6 un)",
      valor: 7.5,
      image:
        "https://i.pinimg.com/564x/6a/b9/e6/6ab9e68410f147aaf7e69f63a588ad96.jpg",
    },
    {
      id: 12,
      name: "Melancia (1 unidade)",
      valor: 7.5,
      image:
        "https://i.pinimg.com/564x/cd/aa/4d/cdaa4d02884643fec4844739a7db4d9f.jpg",
    },
  ];
  const [minValue, setMinValue] = useState(0);
  const [name, setName] = useState("");
  const [maxValue, setMaxValue] = useState(0);
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  console.log(cart);
  const removeProduct = (productId) => {
    const newCart = [...cart];
    const foundProduct = newCart.find(
      (productItem) => productItem.id === productId
    );
    if (foundProduct.quantidade == 1) {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
    } else {
      foundProduct.quantidade--;
      setCart(newCart);
    }
  };
  const addProduct = (product) => {
    const newCart = [...cart];
    const foundProduct = newCart.find(
      (productItem) => productItem.id === product.id
    );
    if (foundProduct) {
      foundProduct.quantidade = foundProduct.quantidade + 1;
    } else {
      newCart.push({ ...product, quantidade: 1 });
    }
    setCart(newCart);
  };

  return (
    <Container height="100vh" justify="space-between">
      <Filter
        setMinValue={setMinValue}
        minValue={minValue}
        setName={setName}
        name={name}
        setMaxValue={setMaxValue}
        maxValue={maxValue}
      />
      <Home
        minValue={minValue}
        name={name}
        products={products}
        maxValue={maxValue}
        addProduct={addProduct}
        cart={cart}
        removeProduct={removeProduct}
      />
      <ShoppingCart cartList={cart} removeProduct={removeProduct} />
      <GlobalStyles></GlobalStyles>
    </Container>
  );
}

export default App;
