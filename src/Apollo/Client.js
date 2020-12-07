import ApolloClient from "apollo-boost"
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://172.30.1.18:4000",

  clientState:{
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
  
});