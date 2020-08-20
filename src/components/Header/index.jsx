import React from 'react';
import Wrapper from '../Wrapper';
import Search from '../SearchPanel';
import Brand from '../Brand';
import './style.css';

const Header = () => (
  <header>
    <Wrapper>
      <Brand/>
      <Search/>
    </Wrapper>
  </header>
);

export default Header;
