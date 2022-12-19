import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: red;
  height: 60px;
`

const Logo = styled(Link)`
  color: #fff;
`

const MenuBars = styled.i``

const NavMenu = styled.div``

const Navbar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <MenuBars />
      <NavMenu />
      Navbar
    </Nav>
  )
}

export default Navbar
