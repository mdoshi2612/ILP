import logo from './logo.svg';
import { Route, Router, Switch, BrowserRouter,Link, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
import Home from './Home';
import FAQ from './FAQ';
import Alumni from './Alumni';
import ContactUs from './Team';
import Register from './Register';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e85a50;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100%;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 3;
  left: 0;
  transition: all 0.3s ease-in-out !important;


  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear !important;

    &:hover {
      color: #000000;
    }
  }
`
const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#ffffff' : '#96938b'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const NavbarHome = () => {
    const [open, setOpen] = useState(false);
  const node = useRef();
  

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/FAQ">
        FAQ
        </a>
      <a href="/Alumni">
        Alumni
        </a>
        <a href="/Contactus">
        Contact Us
        </a>
        <a href="/Register">
        Register
        </a>
    </StyledMenu>
  )
}



const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}



const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

  
  return (
    <div className="App">
      <div ref={node} className="mob-nav">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
      </div>
      <nav>
        <ul>
          <NavLink to="/Home" className={"nav-link"} activeClassName="active" >Home</NavLink>
          <a href="#faq" className={"nav-link"}>FAQ</a>
          <a href="#contact" className={"nav-link"}>Contact Us</a>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarHome
