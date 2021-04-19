import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from "./pages/login";
import { BrowserView, MobileView } from "react-device-detect";
import MobileLogin from "./pages/login/mobile";
import MobileDashboard from "./pages/dashboard/mobile";
import Dashboard from "./pages/dashboard";
import MobileNewTask from "./pages/dashboard/mobile/newTask";
import PrivateRoute from "./components/auth/privateRoute";

function App() {
  
  return (
    <Router>
      <BrowserView>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </BrowserView>
      <MobileView>
        <Route exact path="/" component={MobileLogin} />
        <PrivateRoute path="/dashboard" component={MobileDashboard} />
        <PrivateRoute path="/newTask" component={MobileNewTask} />
      </MobileView>
    </Router>
  );
}

export default App;
