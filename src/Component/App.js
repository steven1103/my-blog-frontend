import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles"
import AppRouter from './Routes';
import Theme from '../Styles/Theme';
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from 'react-toastify';
import { gql} from 'apollo-boost';
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;



function App() {
  const isLoggedIn = useQuery(QUERY).data.isLoggedIn
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles/>
        <AppRouter isLoggedIn={isLoggedIn}/>
      </>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
    
  );
}

export default App;
