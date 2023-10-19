import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import CourseNavBar from "./CourseNavBar";
import Home from "./Home";
import CourseModules from "./Modules/CourseModules";
import Assignments from "./Assignments";
import EditAssignment from "./Assignments/EditAssignment";
import Grades from "./Grades";
import Settings from "./Settings";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div class="d-flex flex-fill flex-column p-3">
      {/* <h1>Courses {course._id}</h1> */}
      <CourseNavBar />
      <div class="d-flex mt-sm-5 mt-md-0">
        <CourseNavigation />

        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<CourseModules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Settings/*" element={<Settings />} />
          <Route path="Assignments/:assignid" element={<EditAssignment />} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}

export default Courses;
