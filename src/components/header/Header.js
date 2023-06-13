import React, {useEffect, useRef} from "react";
import Img from '../../img/user.png'
import {Link} from 'react-router-dom'
import { Container } from "./component/style";


const Header = ({logs}) => {

  console.log('sdf',logs)

  return (
    <Container>
      <Link to='/' className="logo">Logo</Link>
      <ul className="depth1">
        <li><Link to="/list">List</Link></li>
        <li>Skill</li>
        <li>Gallery</li>
        <li>ADD</li>
      </ul>
      <Link to='login' className="login">
        <img src={Img} alt="user-image" className="img"/>
        <span className="text">{ logs ? '로그아웃' : '로그인'}</span>
      </Link>
    </Container>
  );
};

export default Header;
