import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 3px 1px 1px black;
  padding: 1rem 0;
  .depth1 {
    display: flex;
    li {
      padding: 0 1rem;
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
  .logo {
    font-weight : bold;
    font-size : 1.7rem;
  }
  .login {
    display: flex;
    align-items: center;
    cursor: pointer;
    .img {
      width: 35px;
      height: 35px;
      color: white;
      margin-right: 0.5rem;
    }
    .text {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

export { Container };
