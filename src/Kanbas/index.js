import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import CourseNavBar from "./Courses/CourseNavBar";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
  return (
    <Provider store={store}>
      <div class="container-fluid g-0 d-flex flex-row ">
        <KanbasNavigation />
        <div class="d-flex flex-fill flex-column p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account/*" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses" element={<Navigate to="RS101" />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route
              path="*"
              element={
                <h1 className="display-6">Looks like this is in Progress</h1>
              }
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
