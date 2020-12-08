import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { isAdminCheck } from "./AuthQueries";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom:10px;
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



export default function IsAdminPage() {
  const history = useHistory();
  const [code,setcode] = useState("")
  const [isAdminMutation] = useMutation(isAdminCheck,{variables:{code}} )

  const handleCodeChange = (e) => {
    setcode(e.target.value)
  }

  const onSubmit = async () => {
    try {
      const {
        data:{
          isAdmin
        } 
      } = await isAdminMutation();
      if(isAdmin) {
        toast.success("어드민이 맞네요")
        history.push('/edit')
    } else {
        toast.error("어드민이 아닙니다 :(")
      }
    } catch(e) {
      toast.error(e)
    }
  }
  
 
    return (
      <div style={{ width: "100%", height:window.innerHeight,backgroundColor:'#FAFAFA',alignItems:'center',justifyContent:'center',display:'flex' }}>
      <div>       
       <Card style={{height:80}}>
          <Input  id="code" required="" type="email" placeholder="code" value={code} onChange={handleCodeChange} style={{marginTop:10}} ></Input>
       </Card>
          <Button onClick={onSubmit}>
              <p style={{marginLeft:105}}>
                  Go!
              </p>
          </Button>   
       </div>
      </div>
    );
}
