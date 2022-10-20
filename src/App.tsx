import "./App.css";
import User from "./components/01&2/User";
import Array from "./components/03/Array";
import StateOne from "./components/04/StateOne";
import ToDo from "./components/05/ToDo";
import API from "./components/07/API";
import StateTwo from "./components/08&9/StateTwo";
import { Form } from "./components/11/Form";
import { Database } from "./components/16&17/Database";
import { OldPage } from "./OldPage";
import { NavContainer } from "./pages/NavContainer";

function App() {
  return (
    <div>

      <NavContainer />

      <OldPage />

      <div className="App">
        <h1>PHASE 1 & 2</h1>
        <User name='Max' age={8} />
        <User name='Manu' age={29} />

        <h1>PHASE 3</h1>
        <Array />

        <h1>PHASE 4</h1>
        <StateOne />

        <h1>PHASE 5</h1>
        <ToDo />

        <h1>PHASE 7</h1>
        <API />

        <h1>PHASE 8,9&15</h1>
        <StateTwo />

        <h1>PHASE 11</h1>
        <Form />

        <h1>PHASE 16&17</h1>
        <Database />
      </div>
    </div>
  );
}

export default App;
