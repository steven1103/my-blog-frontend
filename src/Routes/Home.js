import { useQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { EXPLORE } from "./AuthQueries";

export const Header = styled.div`
width:100%;
height:10%;
background-color:white;
`

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom:10px;
  width:250px;
  height:280px;
  border-radius:10px;
  &:hover{
    cursor:pointer;
  }
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const PostContainer = styled.div`
width:100%;
height:90%;
display:grid;
background-color:#FAFAFA;
grid-template-rows: repeat(3, 300px);
grid-template-columns: repeat(3, 300px);
justify-content:center;
align-items:center;

`
export default function Login() {

  const {data,loading} = useQuery(EXPLORE,{variables:{term:""}})
  console.log(data)
  return (
    <div style={{ width: "100%", height:'100%',}}>
    <Helmet>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap')
        </style>
    </Helmet>
     <Header>
      <h3 style={{color:'black', fontSize:40,paddingTop:20,paddingLeft:6,fontFamily:'Ubuntu',paddingBottom:20}}>
         devmac BLOG
       </h3>
     </Header>

     <div style={{marginTop:30,width:'100%',height:130,backgroundColor:'#FAFAFA',display:'flex',alignItems:'center',justifyContent:'center',}}>
        <h1 style={{fontSize:30,fontFamily:'Nanum Myeongjo'}} >
          저의 블로그에 오신 걸 환영합니다,  
        </h1>
        <h1 style={{fontSize:30,fontFamily:'Nanum Myeongjo',paddingLeft:3}} >
          {[' React',' React Native',' JavaScript',' TypeScript','Graphql','NestJS'][Math.floor(Math.random() * 6)]} 개발을 합니다
        </h1>
     </div>
     <PostContainer>
        {data !== undefined ? 
          !loading &&
          data &&
          data.searchPost &&
          data.searchPost.map(post => (
            <Link to={"/post/"+post.id} >
            <Card style={{marginLeft:20, marginTop:20,position:'relative'}} key={post.id}>
              <h2 style={{fontSize:30,fontFamily:'Nanum Myeongjo',color:'black'}}>
                {post.title}
              </h2>
              <h4 style={{fontSize:18,marginTop:80,fontFamily:'Nanum Myeongjo',color:'black'}}>
                {post.text.slice(0,12).concat("...")}
              </h4>
              <Timestamp style={{bottom:5,position:'absolute',color:'black'}}>
                {post.createdAt.slice(0,10)}
              </Timestamp>
            </Card>
            </Link>
            )) : <></>
      }
     </PostContainer>
    <div style={{minHeight:30,}}>
      </div>  
    </div>
  );
}
