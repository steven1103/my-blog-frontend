import React, { useRef } from "react";
import styled from "styled-components";
import "draft-js/dist/Draft.css";
import Embed from "@editorjs/embed";
import EditorJs from "react-editor-js";
import Header from "@editorjs/header";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import Marker from "@editorjs/marker";

import "./edit.css";
export const EDITOR_JS_TOOLS = {
  embed: Embed,
  header: Header,
  table:Table,
  list:List,
  inlineCode:InlineCode,
  quote:Quote,
  simpleImage:SimpleImage,
  code:Code,
  marker:Marker,
};

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

export default function Edit() {
  const instanceRef = useRef(null);
  const data = {
    time: 1556098174501,
    blocks: [
        {
          type: "header",
          data: {
            text: "Editor.js",
            level: 12
          }
        },
        {
            type:'paragraph',
            data :{
                text:"Let's POST!"
            }
        }
    ],
  }
  const onClickHandler = () => {
      console.log(data)
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFAFA",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "auto",
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EditorJs
        
        tools={EDITOR_JS_TOOLS}
        instanceRef={(instance) => (instanceRef.current = instance)}                
          data={data}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 40,
        }}
      >
        <Button
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}

          onClick={onClickHandler}
        >
          <p>UPLOAD</p>
        </Button>
      </div>
    </div>
  );
}
