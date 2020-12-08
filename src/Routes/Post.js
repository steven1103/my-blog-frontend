import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom'
import {  useMutation, useQuery } from "@apollo/client";
import {addComment, me, SINGLE_POST,toggleLikeC, toggleLikeP} from "./AuthQueries"
import { Helmet } from "react-helmet";
import Avatar from "../Component/Avatar";
import { CommentFull, ENTER, HeartEmpty, HeartFull } from "../Component/Icons";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
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
height:auto;
background-color:white;
margin-left:10%;
display:inline-block;
margin-bottom:50px;

`
const TagSection = styled.div`
  width:80%;
  height:50px;
  background-color:white;
  margin-left:10%;
  display:flex;

`

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export default function Login() {
  const [likeCheck, setLikeCheck] = useState(false)
  const [likeCheckP, setLikeCheckP] = useState(false)
  const [lkc, slkc] = useState(0)
  const [lkp, slkp] = useState(0)
  const location = useLocation()
  const {data,loading} = useQuery(SINGLE_POST,{variables:{id:location.pathname.slice(6)}})
  const [toggleLikeMutation] = useMutation(toggleLikeC)
  const [toggleLikePostMutation] = useMutation(toggleLikeP)
  const [addCommentMuatation] = useMutation(addComment)
  const ME = useQuery(me)
  console.log(data)
  console.log(ME)
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
  const toggleLikePost = (id) => {
    toggleLikePostMutation({variables:{id}});
    if (likeCheckP) {
      setLikeCheckP(false)
      slkp(lkp-1)
    } else {
      setLikeCheckP(true)
      slkp(lkp+1)
    }
    window.location.reload()
  }

  const addCommenttoPost = (text, postId) => {
    if (text !== null && text !== "") {
      addCommentMuatation({variables:{postId,text}})
      window.location.reload()
    } 
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
       <h3 style={{color:'black', fontSize:40,paddingLeft:60,fontFamily:'Ubuntu',marginTop:30}}>
         devmac BLOG
       </h3>
       </Link>
     </Header>
     <div style={{width:'100%',height:'90%' ,display:'flex',float:'left',backgroundColor:'#FAFAFA'}}>
        <div style={{width:'100%',height:'100%',backgroundColor:'#FAFAFA',}}>
         {
           data !== undefined ?
            <Post style={{marginTop:30,WebkitBoxShadow:'5px 5px 5px 5px #ccc',justifyContent:'center',alignItems:'center',height:'auto',marginBottom:50,}} >
            <h2 style={{fontSize:60,fontFamily:'Nanum Myeongjo',color:'black',paddingTop:50, marginLeft:'10%',marginTop:100,paddingBottom:50,}}>
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
  <h1 style={{marginLeft:10, fontSize:30, paddingTop:20, color:'#003569'}} key={`${tag.id}`}>
    #{tag.text}
  </h1>
)): <></>
} 
     </TagSection>
    <div style={{width:'80%',marginLeft:'10%',paddingTop:40,display:'flex'}}>
      <div>
        <CommentFull/>
      </div>      
      <div style={{marginLeft:20}} onClick={()=>toggleLikePost(data.seeFullPost.id)}>
        {data.seeFullPost.isLiked ? <HeartFull/> : <HeartEmpty/>}
      </div>
    </div>
     <hr style={{width:'80%',marginLeft:'10%',height:2,backgroundColor:'black',marginTop:30}}/>
     <div style={{display:'flex'}}>
       <Avatar style={{alignSelf:'center',width:36, marginLeft:'10%'}} url={ME.data.me.avatar}/>
     <Textarea 
     id="comment" 
     style={{alignSelf:'center',width:'70%',marginLeft:'2%',marginRight:'2%',border:'1px solid #e6e6e6', backgroundColor:'white', height:50,resize:'none',fontSize:18,fontFamily:'Nanum Myeongjo'}} 
     />
     <div style={{width:'3%'}} onClick={()=>addCommenttoPost(document.getElementById('comment').value,data.seeFullPost.id)}>
     <ENTER size={'100%'} />
     </div>
      </div>
     <CommentSection>
       {
         data !== undefined ?
         !loading &&
         data &&
         data.seeFullPost &&
         (data.seeFullPost.comments.length) !== 0 &&
         data.seeFullPost.comments.map(comment => (
           <Card style={{marginTop:10}} key={comment.id}>
             <div 
             style={{marginLeft:'auto',marginRight:0,display:'inline-block',paddingTop:-20,height:'auto'}} 
             onClick={()=>toggleLikeComment(comment.id)}
             > 
             <div style={{display:'flex'}}>
            {comment.isLiked ? 

             <div style={{display:'inline-block',height:20,width:20,}} >
               <HeartFull/> 
            </div> : 
             <div style={{display:'inline-block'}}>
               <HeartEmpty /> 
               </div>
                
               }
               <h1 style={{paddingTop:3, paddingLeft:8, fontSize:18}}>
                {comment.likeCount}  
               </h1>
             </div>
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
         <div style={{height:50}}>
         </div>
        </div>
     </div>
    </div>
  );
}
