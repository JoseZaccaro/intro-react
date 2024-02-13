import React from 'react'
import Anchor from './Anchor';
import { LINKS_HEADER } from '../utils/links';

const Header = () => {

  return (
    <header>
      <nav>
        {/* <Anchor href="/" content="home"></Anchor>
        <Anchor href="/about" content="about"></Anchor>
        <Anchor href="/contact" content="contact" ></Anchor> */}

        {
          LINKS_HEADER.map((link) => {
            return (
              <Anchor key={link.href} href={link.href} text={link.name}>
                <span style={{ fontWeight: "bold" }}>{link.name}</span>
              </Anchor>)
          })
        }
      </nav>
    </header>
  )
}

export default Header