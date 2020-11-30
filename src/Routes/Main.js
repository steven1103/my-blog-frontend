import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width:200px;
  height:60px;
  margin-left:80px;
  margin-right:220px;
  border-radius:30px;
  background-color:${props=>props.theme.lpColor};
  margin-top:80px;
  box-shadow:5px 5px 1px ${props=>props.theme.vlpColor};
  border:0;
  color:white;
  font-size:20px;
`;


export default function Login() {
   
  return (
    <div style={{ width: "100%", height:window.innerHeight,paddingTop:window.innerHeight/8,backgroundColor:'#241C59' }}>
     {/* eslint-disable-next-line*/}
      <a style={{ fontSize: 180, marginLeft: 80, marginTop:240,color:'white' }}>DEV.MAC</a>
      <br />
    {/* eslint-disable-next-line*/}
      <h3 style={{ fontSize: 180, marginLeft: 80,marginTop:30,color:'white' }}>BLOG</h3>
      <Link to="/login">
        <Button>
            GO
        </Button>
      </Link>
    </div>
  );
}
