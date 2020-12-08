import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CONFIRM_SECRET, LOCAL_LOG_IN, LOG_IN } from "./AuthQueries";

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



export default function  Login() {
  const [email,setemail] = useState("")
  const [code,setcode] = useState("")
  const [step,setStep] = useState(1)
  const history = useHistory()

  const handleChange = (e) => {
    setemail(e.target.value)
  }
  const handleCodeChange = (e) => {
    setcode(e.target.value)
  }
  const [loginMuatation] = useMutation(LOG_IN, {
    variables: { email: email }
  })
  const [confrirmSecretMutation] = useMutation(CONFIRM_SECRET,{
    variables:{email,secret:document.getElementById('code')?document.getElementById('code').value:''}
  })
  const [localLoginMutation] = useMutation(LOCAL_LOG_IN) 
  const onSubmit = async () => {
    try {
      const {
        data:{
          createSecret
        } 
      } = await loginMuatation();
      if(createSecret) {
        toast.success("이메일에서 코드를 확인해주세요")
        setStep(2)
      } else {
        toast.error("가입부터 해주세요")
      }
    } catch(e) {
      toast.error(e)
    }
  }
  
  const onCodeSubmit = async() => {
    try {
      const {
        data:{
          confirmSecret:token
        } 
      } = await confrirmSecretMutation();
      if(token !== "" && token !== undefined) {
       
        localLoginMutation({variables:{token}})
        history.push('/')
        toast.success("환영합니다!")

        setStep(3)
       
      } else {
        toast.error("코드가 잘못 되었습니다")
      }
    } catch(e) {
      toast.error(e)
    }
  }
 
    return (
      <div style={{ width: "100%", height:window.innerHeight,backgroundColor:'#FAFAFA',alignItems:'center',justifyContent:'center',display:'flex' }}>
      <div>       
       <Card style={{height:step === 1 ? 80 : 120}}>
          <Input required="" type="email" placeholder="email" value={email} onChange={handleChange}></Input>
          <Input  id="code" required="" type="email" placeholder="code" value={code} onChange={handleCodeChange} style={{display:step ===1 ?'none':"",marginTop:10}} ></Input>
       </Card>
          <Button onClick={step===1?onSubmit:onCodeSubmit}>
              <p style={{marginLeft:105}}>
                  Login
              </p>
          </Button>
   
        <div style={{display:'flex',}}>
        <p style={{marginTop:5,marginLeft:3}}>아직 회원이 아니신가요?</p>
        <Link to="signup">
          <p style={{marginTop:5, marginLeft:3}}>
          가입하기
                      </p>
        </Link>
        </div>
          </div>
      </div>
    );
}
