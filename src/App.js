import "./App.css";
import Dashboard from "./pages/Dashboard";
import Knowledge from "./pages/Knowledge";
import Members from "./pages/Members";
import Teams from "./pages/Teams";
import Vault from "./pages/Vault";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import Company from "./pages/Company";
import Myprofile from "./pages/Myprofile";

function App() {
  return (
    <div className="App">
      <h3>Remote SalesFuel</h3>
      <div className="sidebar">
            <div className="div1">
              <Dashboard className="dashboard"/>
              <Knowledge className="knowledge"/>
              <Members className="members"/>
              <Teams className="teams"/>
              <Vault className="vault"/>
              <Chat className="chat"/>
            </div>

            <div className="div2">
              <Settings className="settings"/>
              <Company className="company"/>
              <Myprofile className="myprofile"/>
              <hr className="horizontal" />
              <p className="footernote">Powered By TeamJeenyus</p>
            </div>
      </div>
    </div>
  );
}

export default App;
