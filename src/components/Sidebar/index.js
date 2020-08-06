import React from 'react';
import { FaUserTie, FaHome, FaColumns, FaEnvelope } from 'react-icons/fa'

import { Container, SidebarLink } from './styles';

import math from '../../assets/images/math.png';

function Sidebar() {
  return (
    <Container>
      <center>
        <img src={math} alt="Matheus Schenatto"/>
        <h4>Matheus Schenatto</h4>
      </center>
      <SidebarLink to="/"> <FaHome size={15} /> Home </SidebarLink>
      <SidebarLink to="/about"> <FaUserTie size={15} /> Sobre </SidebarLink>
      <SidebarLink to="/portfolio"> <FaColumns size={15} /> Portfólio </SidebarLink>
      <SidebarLink to="/contact"> <FaEnvelope size={15} /> Contato </SidebarLink>
    </Container>
  );
}

export default Sidebar;