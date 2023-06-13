import React, { useEffect, useRef, useState } from "react";
import { Container } from "./component/Pstyle";
import { Link, useNavigate } from "react-router-dom";

const Login = ({logs,setLogs}) => {
  const navi = useNavigate()
  const ref = useRef();
  const [idval, setIdVal] = useState("");
  const [pwval, setPwval] = useState("");

  const [id, setId] = useState("false");
  const [pw, setPw] = useState("false");

  const idHandle = (e) => {
    setIdVal(e.target.value);
    const regex = /^[a-zA-z0-9]{4,12}$/;
    if (regex.test(idval)) {
      setId(true);
    } else {
      setId(false);
    }
  };

  useEffect(() => {
    ref.current.focus()
  }, []);

  const pwHandle = (e) => {
    setPwval(e.target.value);
    const regpw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,11}$/;
    if (regpw.test(pwval)) {
      setPw(true);
    } else {
      setPw(false);
    }
  };
  const loginClick = () => {
    if (!id || idval.length <= 0 || !pw || pwval.length <= 0) {
      alert("아이디 또는 비밀번호를 정확히 입력하세요.");
      return ref.current.focus();
    } else {
      alert("로그인이 완료 되었습니다.");
      navi("/");
      return setLogs(true);
      
       
    }
  };
  return (
    <Container className="container">
      <h1>로그인 페이지</h1>
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
        <div className="pw-wrap">
          <label>
            <div className="pw-text">비밀번호*</div>
            <input
              maxLength="10"
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={pwval}
              onChange={pwHandle}
            ></input>
          </label>
          <div className="pw-error">
            {!pw && <div>비밀번호를 제대로 입력하세요.</div>}
          </div>
        </div>
      </form>
      <div className="btn-wrap">
        <div className="login-btn">
          <button
            onClick={loginClick}
          >
         로그인
          </button>
        </div>
        <Link to="/join" className="Sign-btn">
          <button>회원가입</button>
        </Link>
      </div>
    </Container>
  );
};

export default Login;
