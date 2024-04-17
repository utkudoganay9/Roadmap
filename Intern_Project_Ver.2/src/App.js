import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Exams from "./pages/Exams";
import Groups from "./pages/Groups";
import Help from "./pages/Help";
import Notifications from "./pages/Notifications";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Sidebar />
                <Routes>
                  <Route index path="/dashboard" element={<Dashboard />} />
                  <Route index path="/classes" element={<Classes />} />
                  <Route index path="/exams" element={<Exams />} />
                  <Route index path="/groups" element={<Groups />} />
                  <Route index path="/help" element={<Help />} />
                  <Route index path="/notifications" element={<Notifications />} />
                </Routes>
                <Footer />
              </>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
