import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CREATE_ACCOUNT } from "./AuthQueries";

const Card = styled.div`
  ${(props) => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  height: 120px;
  width: 300px;
`;

const Button = styled.div`
  ${(props) => props.theme.whiteBox}
  display:flex;
  align-items: center;
  padding: 20px;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lpColor};
  border: 0;
  color: white;
  font-size: 20px;
  align-self: center;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  &:hover {
    top: -10px;
  }
`;

const Input = styled.input`
  border: 0;
  border: 1px solid #e6e6e6;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: black;
  text-align: center;
  border-radius: 10px;
`;

export default function Login() {
  const [un, setUn] = useState("");
  const [em, setEm] = useState("");
  const [signInMutation] = useMutation(CREATE_ACCOUNT, {
    variables: { email: em, username: un },
  });

  const handleChange = (e) => {
    setEm(e.target.value);
  };
  const handleUnChange = (e) => {
    setUn(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const {
        data: { createUser },
      } = await signInMutation();
      if (createUser) {
        toast.success("가입에 성공하였습니다!");
      } else {
        toast.error("message");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: window.innerHeight,
        backgroundColor: "#FAFAFA",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div>
        <Card>
          <Input
            onChange={handleChange}
            required=""
            type="email"
            placeholder="email"
            value={em}
          ></Input>
          <Input
            onChange={handleUnChange}
            required=""
            type="username"
            placeholder="username"
            style={{ marginTop: 10 }}
            value={un}
          ></Input>
        </Card>
        <Link>
          <Button>
            <p onClick={onSubmit} style={{ marginLeft: 95 }}>
              Sign Up
            </p>
          </Button>
        </Link>
        <div style={{ display: "flex" }}>
          <p style={{ marginTop: 5, marginLeft: 3 }}>이미 가입하셨나요?</p>
          <Link to="login">
            <p style={{ marginTop: 5, marginLeft: 3 }}>로그인하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
