import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom:10px;
  height:80px;
  width:300px;
`;

const Button = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  align-items: center;
  padding: 20px;
  width:300px;
  height:30px;
  border-radius:10px;
  background-color:${props=>props.theme.lpColor};
  border:0;
  color:white;
  font-size:20px;
  align-self:center;
  position: relative;
top: 0;
transition: top ease 0.5s;
&:hover{
  top: -10px;

}
`;

const Input = styled.input`
border:0;
border:1px solid #e6e6e6;  
background:transparent;
width:100%;
padding:8px 0 5px 0;
font-size:16px;
color:black;
text-align:center;
border-radius:10px;
`

export default function Login() {
   
  return (
    <div style={{ width: "100%", height:window.innerHeight,backgroundColor:'#FAFAFA',alignItems:'center',justifyContent:'center',display:'flex' }}>
    <div>       
     <Card>
        <Input required="" type="email" placeholder="email"></Input>
     </Card>
      <Link>
        <Button>
            <p style={{marginLeft:105}}>
                Login
            </p>
        </Button>
      </Link>
        </div>
    </div>
  );
}
