import React from "react";
import { Link, useDisclosure, Box, useColorModeValue } from "@chakra-ui/react";
import { FaHamburger as HamburgerIcon } from "react-icons/fa";
import { CgClose as CloseIcon } from "react-icons/cg";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Links = ["Dashboard", "Projects", "Team"];

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: ${(props) => props.theme.headerBgColor};
  ${breakpoint("mobile", "tablet")`
  flex-direction: column;`}
`;

const LinkContainer = styled.div`
  padding: 5px;
  &:hover {
    font-decoration: inherit;
  }
  ${breakpoint("mobile", "tablet")`
  width: 100%;
  text-align: center;
  `}
`;

const LinksContainer = styled.div`
  display: flex;
  ${breakpoint("mobile", "tablet")`
  display: ${(props) => (props.closed ? "none" : "block")};
  flex-direction: column;`}
`;

const HamburgerButton = styled.div`
  ${breakpoint("tablet")`
  display: none;
  `}
`;

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <NavbarContainer>
      <HamburgerButton onClick={onToggle}>
        {isOpen ? <CloseIcon size="30px" /> : <HamburgerIcon size="30px" />}
      </HamburgerButton>
      <LinksContainer closed={!isOpen}>
        {Links.map((link) => (
          <LinkContainer key={link} onClick={onToggle}>
            <Link>link</Link>
          </LinkContainer>
        ))}
      </LinksContainer>
    </NavbarContainer>
  );
};
