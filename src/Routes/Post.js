import styled from "styled-components";

export const Header = styled.div`
width:100%;
height:10%;
background-color:${props=>props.theme.lpColor}
`

const Post = styled.div`
  width:90%;
  height:90%;
  margin-left:5%;
  background-color:${props=>props.theme.vlpColor};
`
export default function Login() {
  return (
    <div style={{ width: "100%", height:window.innerHeight,backgroundColor:'white' }}>
     <Header>
       <h3 style={{color:'white', fontSize:40,paddingTop:40,paddingLeft:60,fontFamily:'Ubuntu'}}>
         devmac BLOG
       </h3>
     </Header>
     <div style={{width:'100%',height:'90%',display:'flex',float:'left'}}>
        <div style={{width:'75%',height:'100%',backgroundColor:'#482EF2'}}>
          <Post style={{marginTop:30}} />
        </div>
        <div style={{width:'25%',height:'100%',backgroundColor:'#241C59',float:'left'}}>
        </div>
     </div>
    </div>
  );
}
