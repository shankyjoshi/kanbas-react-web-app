import { useState } from "react";
import db from "../Database";
import { Link, useNavigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddEditCourse from "./AddEditCourse";

function Dashboard() {
  return (
    <div>
      <div className="d-flex flex-fill flex-column p-3">
        <div className="d-flex align-items-center fs-4">
          <div className="ps-2">Dashboard</div>
        </div>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AddEditCourse/:courseId" element={<AddEditCourse />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
