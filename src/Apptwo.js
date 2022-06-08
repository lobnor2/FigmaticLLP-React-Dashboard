import "./Apptwo.css";
import Dashboard from "./pages/Dashboard";
import Knowledge from "./pages/Knowledge";
import Members from "./pages/Members";
import Teams from "./pages/Teams";
import Vault from "./pages/Vault";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import Company from "./pages/Company";
import Myprofile from "./pages/Myprofile";

function Apptwo() {
  return (
    <div className="App">
      <h3>Remote SalesFuel</h3>
      <div className="sidebar">
            <div className="div1">
              <Dashboard />
              <Knowledge />
              <Members />
              <Teams />
              <Vault />
              <Chat />
            </div>

            <div className="div2">
              <Settings />
              <Company />
              <Myprofile />
              <hr className="horizontal" />
              <p className="footernote">Powered By TeamJeenyus</p>
            </div>
      </div>
    </div>
  );
}

export default Apptwo;
