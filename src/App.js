import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import Main from './Main';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Main></Main>
      </Router>
    </AuthProvider>
  );
}

export default App;
