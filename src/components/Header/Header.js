
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiTerminal } from 'react-icons/di';
import { Link } from 'react-scroll';


import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container className='header sticky'>
    <Div1>
        <a style={{ display : "flex", alignItems : "center", color : 'white', marginBottom : '20px'}}>
          <DiTerminal size = "3rem" /> <Span>Davide Falcone</Span>
        </a>
    </Div1>
    <Div2>
      <li>
        <Link to="projects" smooth={true} offset={-80}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to="tech" smooth={true}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} offset={-80}>
          <NavLink>About me</NavLink>
        </Link>
      </li>
      <li>
      <a href="docs/cv.pdf">
            <NavLink>CV</NavLink>
            </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Demigod21">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/davide-falcone/">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
