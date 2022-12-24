import React from 'react'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuLinks } from '../data/MenuLinks';
import { Button } from './Button';
import { AiOutlineMenu } from 'react-icons/ai';


const Nav = styled.nav`
  
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;

`
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Logo = styled(Link)`
  ${NavLink}
 font-style: italic;
  transition: all 0.7s ease-in-out;
 font-size: 1.5rem;
 font-weight: bold;

 &:hover {
    color: #cd853f;
    transform: scale(1.1);
 }

`

const MenuBars = styled(AiOutlineMenu)`
  
  display: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {

    display: block;
  }
  &:hover {
    color: #cd853f;
    transform: scale(1.2);
  }
  
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavMenuLink = styled(Link)`
  ${NavLink}
  &:hover {
    color: #cd853f;
    transform: scale(1.2);
  }
`;

const NabBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }

`

const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>Property.COM</Logo>
      <MenuBars />
      <NavMenu >
        {MenuLinks.map((item, index) => (
          <NavMenuLink to={item.link} key={index}>{item.title}</NavMenuLink>
          ))}
      </NavMenu>
     <NabBtn>
        <Button to='/contact' primary='true'>Contact Us</Button>
     </NabBtn>
    </Nav>
  )
}

export default Navbar
