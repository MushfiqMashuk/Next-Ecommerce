import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: -1px;
  background-color: white;
  z-index: 4;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 550;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 550;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border-style: none;
  ${mobile({ width: "50px" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "22px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  Input,
  SearchContainer,
  Logo,
  MenuItem,
};
