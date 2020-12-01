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
