import styled from "styled-components";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  background-color: #f7efef;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  min-width: 30px;
  width: fit-content;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Quantity = styled.div`
  margin: 20px 0px;
  font-weight: 100;
  font-size: 30px;
`;

const Button = styled.button`
  font-weight: 500;
  border: 2px solid teal;
  background-color: white;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;

export {
  Button,
  Amount,
  AmountContainer,
  AddContainer,
  FilterSizeOption,
  FilterSize,
  FilterColor,
  FilterTitle,
  Filter,
  FilterContainer,
  Description,
  Price,
  Title,
  InfoContainer,
  ImageContainer,
  Image,
  Wrapper,
  Quantity,
};
