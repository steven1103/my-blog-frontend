import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom'
import {  useMutation, useQuery } from "@apollo/client";
import {SINGLE_POST,toggleLikeC} from "./AuthQueries"
import { Helmet } from "react-helmet";
import Avatar from "../Component/Avatar";
import { HeartEmpty, HeartFull } from "../Component/Icons";
import { useState } from "react";
export const Header = styled.div`
width:100%;
height:10%;
background-color:#FAFAFA
`
const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom:10px;
  width:100%;
`;

const Post = styled.div`
  width:90%;
  height:90%;
  margin-left:5%;
  background-color:white;
`
const CommentSection = styled.div`
width:80%;
height:50px;
background-color:white;
margin-left:10%;
display:inline-block;

`
const TagSection = styled.div`
  width:80%;
  height:50px;
  background-color:white;
  margin-left:10%;
  display:flex;

`
export default function Login() {
  const [likeCheck, setLikeCheck] = useState(false)
  const [lkc, slkc] = useState(0)
  const location = useLocation()
  const {data,loading} = useQuery(SINGLE_POST,{variables:{id:location.pathname.slice(6)}})
  const [toggleLikeMutation] = useMutation(toggleLikeC)
  const toggleLikeComment = (id) => {
    toggleLikeMutation({variables:{id}});
    if (likeCheck) {
      setLikeCheck(false)
      slkc(lkc-1)
    } else {
      setLikeCheck(true)
      slkc(lkc+1)
    }
    window.location.reload()
  }
  return (
    <div style={{ width: "100%", height:window.innerHeight,backgroundColor:'white' }}>
      <Helmet>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap')
        </style>
        
    </Helmet>

     <Header>
       <Link to="/">
       <h3 style={{color:'black', fontSize:40,paddingLeft:60,fontFamily:'Ubuntu',marginTop:80}}>
         devmac BLOG
       </h3>
       </Link>
     </Header>
     <div style={{width:'100%',height:'100%',display:'flex',float:'left',}}>
        <div style={{width:'100%',height:'100%',backgroundColor:'#e6e6e6'}}>
         {
           data !== undefined ?
          
            <Post style={{marginTop:30,WebkitBoxShadow:'5px 5px 5px 5px #ccc',justifyContent:'center',alignItems:'center'}} >
            <h2 style={{fontSize:60,fontFamily:'Nanum Myeongjo',color:'black',paddingTop:50, marginLeft:'10%',marginTop:100}}>
              {data.seeFullPost.title}
            </h2> 
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h2 style={{fontSize:30,fontFamily:'Nanum Myeongjo',color:'black',paddingTop:30, marginLeft:5,lineHeight:1.5,width:'80%',alignSelf:'center'}}>
              {data.seeFullPost.text}
            </h2>
              </div>
              <TagSection>
       
     {

data !== undefined ?
!loading &&
data &&
data.seeFullPost &&
(data.seeFullPost.tags.length) !== 0 &&
data.seeFullPost.tags.map(tag => (
  <h1 style={{marginLeft:10, fontSize:30, paddingTop:20, color:'#003569'}}>
    #{tag.text}
  </h1>
)): <></>
} 
     </TagSection>
     <hr style={{width:'80%',marginLeft:'10%',height:2,backgroundColor:'black',marginTop:30}}/>
     <CommentSection>
       {

         data !== undefined ?
         !loading &&
         data &&
         data.seeFullPost &&
         (data.seeFullPost.comments.length) !== 0 &&
         data.seeFullPost.comments.map(comment => (
           <Card style={{marginTop:10}}>
             <div 
             style={{marginLeft:'auto',marginRight:0,display:'inline-block',paddingTop:-20}} 
             onClick={()=>toggleLikeComment(comment.id)}
             > 
             {comment.likeCount } {comment.isLiked ? 

             <div style={{display:'inline-block',height:20,width:20,}} >
               <HeartFull/> 
            </div> : 
             <div style={{display:'inline-block'}}>
               <HeartEmpty /> 
               </div>}  
             </div>
             <div style={{display:'flex',}}>
              <Avatar url={comment.user.avatar} style={{marginTop:10,marginLeft:10}} />
           <h1 style={{marginLeft:10, fontSize:25, paddingTop:10, color:'black',fontWeight:400}}>
             {comment.user.username}
           </h1>
             </div>
           <h1 style={{marginLeft:50, fontSize:20, color:'black',paddingTop:20, }}>
             {comment.text}
           </h1>
          <div style={{float:'right',textAlign:'right'}}>
            <h1 style={{color:'grey'}}>
              생성일 : {comment.createdAt.slice(0,10)}
              <br/>
              수정일 : {comment.updatedAt.slice(0,10)}
            </h1>
          </div>
           </Card>
         )): <></>
       } 
     </CommentSection>
          </Post>
           :<></>
         }
        </div>
     </div>

    
    </div>
  );
}
