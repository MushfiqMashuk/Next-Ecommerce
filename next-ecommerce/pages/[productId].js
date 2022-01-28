import { useRouter } from "next/router";
import { Add, Remove } from "@material-ui/icons";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Description,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "../styles/ProductStyles";

export default function SingleProduct({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

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
                
              />
              <Amount>7</Amount>
              <Add
                
              />
            </AmountContainer>
            <Button>ADD TO CART</Button>
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
