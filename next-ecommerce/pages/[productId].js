import { Add, Remove } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Quantity,
  Title,
  Wrapper,
} from "../styles/ProductStyles";

export default function SingleProduct({ product }) {
  const router = useRouter();

  const [quantity, setQuantity] = useState(product.quantity);
  const [count, setCount] = useState(1);
  const { state, dispatch } = CartContext();

  console.log(state);

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  const handleCount = (param) => {
    if (param === "remove") {
      count > 1 && setCount((prev) => prev - 1);
    } else {
      count < quantity && setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>{`$ ${product.price}`}</Price>
          <Quantity>Available Items: {quantity}</Quantity>

          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color &&
                product.color.map((c) => (
                  <FilterColor
                    key={c}
                    color={c}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSelectedSize(e.target.value)}>
                {product.size &&
                  product.size.map((s) => (
                    <FilterSizeOption key={s}>
                      {s.toUpperCase()}
                    </FilterSizeOption>
                  ))}
              </FilterSize>
            </Filter>
          </FilterContainer> */}

          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleCount("remove")}
                style={{ cursor: "pointer" }}
              />
              <Amount>{count}</Amount>
              <Add
                onClick={() => handleCount("add")}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button
              disabled={quantity === 0}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              {quantity > 0 ? "Add to Cart" : "Out of Stock"}
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
      {
        params: { productId: "2" },
      },
      {
        params: { productId: "3" },
      },
      {
        params: { productId: "4" },
      },
      {
        params: { productId: "5" },
      },
      {
        params: { productId: "6" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { productId } = params;

  try {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const data = await response.json();

    return {
      props: {
        product: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
