import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles"
import AppRouter from './Routes';
import Theme from '../Styles/Theme';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles/>
        <AppRouter isLoggedIn={false}/>
      </>
    </ThemeProvider>
  );
}

export default App;
