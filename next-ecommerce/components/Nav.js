import { Badge } from "@material-ui/core";
import { SearchTwoTone, ShoppingCartTwoTone } from "@material-ui/icons";
import Link from "next/link";
import { CartContext } from "../context/CartContext";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "../styles/NavbarStyles";

export default function Nav() {
  const {
    state: { cart },
  } = CartContext();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchTwoTone style={{ fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MASH</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Link href="/cart">
              <Badge color="secondary" badgeContent={cart.length}>
                <ShoppingCartTwoTone />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
