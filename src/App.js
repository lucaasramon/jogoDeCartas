// import Header from './components/header/Header';
// import Main from './components/main/Main';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
