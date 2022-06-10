import './App.css';
import './components/css/style.css';
import Header from './components/Header';
import Initialization from './pages/Initialization';
import GettingStarted from './pages/GettingStarted';
import Deployment from './pages/Deployment';

function App() {
  return (
    <div>
      <Header />
      <Initialization />
      <GettingStarted />
      <Deployment />
    </div>
  );
}

export default App;
