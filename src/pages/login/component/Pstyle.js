import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 799px) {
    margin: 0 auto;
    color: blue;

    .formWrap {
      input {
        padding: 0 32rem;
      }
    }
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1024px;
  text-align: center;
  h1 {
    position: relative;
    bottom: 5rem;
    font-size: 2.5rem;
  }
  .formWrap {
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    .id-wrap {
      position: relative;
      margin-bottom: 2rem;

      .id-text {
        position: absolute;
        bottom: 100%;
      }
      input {
        outline: none;
        margin-top: 0.5rem;
        padding-left: 1rem;
        min-width: 30rem;
        min-height: 3rem;
        border: 1px solid grey;
        border-radius: 5px;
        font-size: 1rem;
        &:hover,
        &:focus {
          border: 1px solid blue;
        }
      }

      .id-error {
        color: red;
      }
    }

    .email-wrap {
      position: relative;
      margin-bottom: 2rem;

      .email-text {
        position: absolute;
        bottom: 100%;
      }
      input {
        outline: none;
        margin-top: 0.5rem;
        padding-left: 1rem;
        min-width: 30rem;
        min-height: 3rem;
        border: 1px solid grey;
        border-radius: 5px;
        font-size: 1rem;
        &:hover,
        &:focus {
          border: 1px solid blue;
        }
      }
      .email-error {
        color: red;
      }

      .id-error {
        color: red;
      }
    }

    .pw-wrap {
      position: relative;
      .pw-text {
        position: absolute;
        bottom: 100%;
      }
      input {
        outline: none;
        margin-top: 0.5rem;
        padding-left: 1rem;
        min-width: 30rem;
        min-height: 3rem;
        border-radius: 5px;
        font-size: 1rem;
        border: 1px solid grey;
        &:hover,
        &:focus {
          border: 1px solid blue;
        }
      }
      .pw-error {
        color: red;
      }
    }
  }

  .btn-wrap {
    margin-top: 2rem;
    .login-btn {
      margin-bottom: 1rem;
      button {
        cursor: pointer;
        padding: 0.5rem 0;
        border: none;
        border-radius: 5px;
        background: #3261f6;
        width: 100%;
        font-size: 1.2rem;
        color: white;
      }
    }
    .Sign-btn {
      button {
        cursor: pointer;
        padding: 0.5rem 0;
        border: none;
        border-radius: 5px;
        background: light-grey;
        width: 100%;
        font-size: 1.2rem;
        color: #3261f6;
        transition: all 0.3s;
        &:hover {
          background: #3261f6;
          color: white;
        }
      }
    }
  }
`;

export { Container };
