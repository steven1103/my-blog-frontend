import { gql } from '@apollo/react-hooks';

export const CREATE_ACCOUNT = gql`
    mutation createUser(
        $email:String!
        $username:String!
    ) {
        createUser(
            email:$email
            username:$username
        )
    }
`

export const CONFIRM_SECRET = gql`
  mutation confirmSecret(
    $secret: String!,
    $email: String!
    ) 
    {
      confirmSecret(
        secret: $secret, 
        email: $email
        )
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const LOG_IN = gql`
  mutation createSecret($email: String!) {
    createSecret(email: $email)
  }
`;

export const EXPLORE = gql`
  query search($term:String!){
    searchPost(term:$term) {
      id
      title
      text
      createdAt
      tags{
        text
      }
    }
    searchUser(term: $term) {
      id
      avatar
      username
    }
  }
`
export const SINGLE_POST = gql`
  query seeFullPost(
    $id:String!
    ){
    seeFullPost(id:$id) {
      id
      title
      text
      isLiked
      isSelf
      tags {
        id
        text
      }
      user {
        username
        id

      }
      createdAt
      updatedAt
      likeCount
      comments {
        id
        text
        createdAt
        updatedAt
        likeCount
        isLiked
        user {
            username
            avatar
          }
        comments {
          user {
            username
          }
          text
        }
      }
    }
  }
`
export const toggleLikeC = gql`
 mutation toggleLikeC(
   $id:String!
   ) 
   {
   toggleLikeC(
     id:$id
     )
 }
`
export const toggleLikeP = gql`
 mutation toggleLike(
   $id:String!
   ) 
   {
    toggleLike(
     id:$id
     )
 }
`
export const addComment = gql`
 mutation createComment($postId:String!$text:String!) {
    createComment(
      postId:$postId
      text:$text
     ) {
       id
     }
 }
`

export const me = gql`
  {
    me {
      username
      avatar
      id
    }
  }
`

export const isAdminCheck = gql`
  mutation isAdmin($code:String!) {
    isAdmin(
      code:$code
     ) 
  }
`