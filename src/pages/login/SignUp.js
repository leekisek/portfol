import React, { useEffect, useState, useRef } from "react";
import { Container } from "./component/Pstyle";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const ref = useRef();
  const [idval, setIdVal] = useState("");
  const [pwval, setPwval] = useState("");
  const [emailval, setEmailval] = useState("");

  const [id, setId] = useState("false");
  const [pw, setPw] = useState("false");
  const [email, setEmail] = useState("false");

  const navigate = useNavigate();
  const idHandle = (e) => {
    setIdVal(e.target.value);
    const regex = /^[a-zA-z0-9]{4,12}$/;
    if (regex.test(idval)) {
      setId(true);
    } else {
      setId(false);
    }
  };

  useEffect(()=>{
    ref.current.focus();
  },[])

  const pwHandle = (e) => {
    setPwval(e.target.value);
    const regpw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    if (regpw.test(pwval)) {
      setPw(true);
    } else {
      setPw(false);
    }
  };

  const emailHandle = (e) => {
    setEmailval(e.target.value);
    const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regEmail.test(emailval)) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };
  const SignClick = () => {
    if (
      !id ||
      idval.length <= 0 ||
      !pw ||
      pwval.length <= 0 ||
      !email ||
      emailval.length <= 0
    ) {
      alert("아이디 또는 비밀번호, 이메일을 정확히 입력하세요.");
      return ref.current.focus();
    } else {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };
  return (
    <Container className="container">
      <h1>회원가입 페이지</h1>
      <form className="formWrap" action="#">
        <div className="id-wrap">
          <label>
            <div className="id-text">아이디*</div>
            <input
              ref={ref}
              className="id-inputs"
              maxLength="12"
              type="text"
              placeholder="아이디를 입력하세요."
              value={idval}
              onChange={idHandle}
            ></input>
            <div className="id-error">
              {!id && idval.length > 0 && (
                <div>아이디를 제대로 입력하세요.</div>
              )}
            </div>
          </label>
        </div>
        <div className="email-wrap">
          <label>
            <div className="email-text">이메일*</div>
            <input
              className="email-inputs"
              type="text"
              placeholder="이메일을 입력하세요."
              value={emailval}
              onChange={emailHandle}
            ></input>
            <div className="email-error">
              {!email && emailval.length > 0 && (
                <div>올바른 이메일 형식이 아닙니다.</div>
              )}
            </div>
          </label>
        </div>
        <div className="pw-wrap">
          <label>
            <div className="pw-text">비밀번호*</div>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              maxLength="10"
              value={pwval}
              onChange={pwHandle}
            ></input>
          </label>
          <div className="pw-error">
            {!pw && pwval.length > 0 && (
              <div>비밀번호를 제대로 입력하세요.</div>
            )}
          </div>
        </div>
      </form>
      <form className="btn-wrap">
        <div className="Sign-btn">
          <button onClick={SignClick}>회원가입</button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
