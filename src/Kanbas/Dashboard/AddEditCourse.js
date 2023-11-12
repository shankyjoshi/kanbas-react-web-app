import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addCourse, updateCourse } from "./coursesReducer";
import { useState } from "react";
import { createCourse, updCourse } from "./client";

const AddEditCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { courseId } = useParams();

  const currentCourse = useSelector((state) =>
    state.coursesReducer.courses.find((course) => course._id === courseId)
  );

  const defaultNewCourse = {
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  };

  const [course, setCourse] = useState(
    currentCourse ? currentCourse : defaultNewCourse
  );

  const handleSaveCourse = () => {
    if (currentCourse) {
      updCourse(course).then((res) => navigate("/Kanbas/Dashboard"));
    } else {
      createCourse(course).then((res) => navigate("/Kanbas/Dashboard"));
    }
  };
  return (
    <div className="container ">
      <h5>Course</h5>
      <div class="input-group mb-3">
        <span class="input-group-text" id="name">
          Name:
        </span>
        <input
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="name"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="number">
          Number:
        </span>
        <input
          value={course.number}
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="number"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="startDate">
          Start Date:
        </span>
        <input
          value={course.startDate}
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          type="date"
          class="form-control"
          id="basic-url"
          aria-describedby="startDate"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="endDate">
          End Date:
        </span>
        <input
          value={course.endDate}
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          type="date"
          class="form-control"
          id="basic-url"
          aria-describedby="endDate"
        />
      </div>
      <div>
        <button className="btn btn-danger me-2" onClick={handleSaveCourse}>
          Save
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/Kanbas/Dashboard")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddEditCourse;
