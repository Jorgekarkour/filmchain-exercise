import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";
import { FaEthereum, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaEthereum />
            <p>Test app</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink
                to="/"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                ADMIN VIEW
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
