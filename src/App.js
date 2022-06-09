import './App.css';
import './components/css/style.css';
import Header from './components/Header';
import Initialization from './pages/Initialization';
import GettingStarted from './pages/GettingStarted';

function App() {
  return (
    <div>
      <Header />
      <Initialization />
      <GettingStarted />
    </div>
  );
}

export default App;
