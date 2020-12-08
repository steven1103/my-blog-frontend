import React,{useState} from "react";
import styled from "styled-components";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './edit.css'
const EditPost = styled.div`
    width:75%;
    height:85%;
    background-color:white;
    align-self:center;
    display:flex;
    justify-content:center;
    box-shadow:5px 5px 5px 5px #e6e6e6;
`


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


export default function Edit() { 
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
      );
    
    return (

      <div style={{width:"100%",height:'100%',backgroundColor:'#FAFAFA',position:'fixed',top:0,left:0,bottom:0,right:0,overflow:'auto',display:'inline-block',alignItems:'center',justifyContent:'center', }}>
          <div style={{height:'100%',display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <EditPost>
        <Editor editorState={editorState} onChange={setEditorState}  />
        </EditPost> 
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingBottom:40}}>
        <Button style={{textAlign:'center',alignItems:'center',justifyContent:'center'}}>
            <h1>
                UPLOAD
            </h1>
        </Button>
          </div>
      </div>
    );
}
