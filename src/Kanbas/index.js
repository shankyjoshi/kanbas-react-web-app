import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import CourseNavBar from "./Courses/CourseNavBar";
import { Provider, useSelector } from "react-redux";

function Kanbas() {
  const courses = useSelector((state) => state.coursesReducer.courses);
  const course = courses.length > 0 ? courses[0] : null;
  return (
    <div class="container-fluid g-0 d-flex flex-row ">
      <KanbasNavigation />
      <div class="d-flex flex-fill flex-column p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard/*" element={<Dashboard />} />
          <Route
            path="Courses"
            element={
              course ? (
                <Navigate to={course._id} />
              ) : (
                <h1 className="display-1">No Courses Available</h1>
              )
            }
          />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
