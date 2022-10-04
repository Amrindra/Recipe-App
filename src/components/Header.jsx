import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoWrapper>
          <Logo>FOOD</Logo>
        </LogoWrapper>
      </Link>

      <SearchbarWrapper>
        <Searchbar />
      </SearchbarWrapper>

      <Link to="/cart">
        <CartWrapper>
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
          <GiShoppingCart />
        </CartWrapper>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  position: sticky;
  top: 2%;
  z-index: 999;
`;

const LogoWrapper = styled.div`
  background-color: var(--dark-color);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const SearchbarWrapper = styled.div`
  /* width: 40%; */
`;

const CartWrapper = styled.div`
  background-color: var(--dark-color);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;

  span {
    color: red;
    position: absolute;
    top: 0;
    font-weight: bold;
    background-color: white;
    border-radius: 50px;
    width: 35%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    color: white;
    font-size: 2rem;
  }
`;

export default Header;
