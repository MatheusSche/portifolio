import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  background: #2f323a;
  margin-top: 70px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-bottom: 10px;
  }

  h4 {
    color: #ccc;
    margin-top: 0;
    margin-bottom: 20px;
  }

`;

export const SidebarLink = styled(NavLink)`
  color: #eee;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;

  &:hover {
    background: #1983d3;
  }
`;