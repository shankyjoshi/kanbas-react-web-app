import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteCourse, setCourses, updateCourse } from "./coursesReducer";
import { useEffect } from "react";
import { delCourse, getAllCourses } from "./client";

const Home = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getAllCourses().then((courses) => {
      dispatch(setCourses(courses));
    });
  }, []);

  const handleDelete = (courseId) => {
    delCourse(courseId).then(() => {
      dispatch(deleteCourse(courseId));
    });
  };
  return (
    <div className="d-flex flex-column flex-fill ms-4">
      <h3 className="fw-medium">
        Published Courses({courses.length})
        <button
          className="btn btn-primary float-end"
          onClick={() => navigate("AddEditCourse/-1")}
        >
          Add Course
        </button>
      </h3>
      <hr />
      <div className="row grid gap-4">
        {courses.map((course) => (
          <div
            className="card col-12 col-sm-6 col-md-4 col-lg-3 p-0"
            key={course._id}
          >
            <div
              className="card-header bg-primary"
              style={{ height: "150px" }}
            ></div>
            <div className="card-body">
              <Link
                to={`/Kanbas/Courses/${course._id}`}
                className="ic-DashboardCard__header_content text-dark"
              >
                <h5 className="flex-nowrap" title={course.title}>
                  <span style={{ color: "rgb(79, 128, 69)" }}>
                    {course.name}
                  </span>
                </h5>
                <div className="" title={course.courseCode}>
                  {course.number}
                </div>
                <div className="d-flex flex-column" title={course.semester}>
                  {course.startDate + " - " + course.endDate}
                  <span>Fall 2023 Semester Grad Term</span>
                </div>
              </Link>

              <div className="d-flex mt-2">
                <button
                  className="btn btn-primary me-2 rounded-pill"
                  onClick={() => navigate(`AddEditCourse/${course._id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger me-2 rounded-pill"
                  onClick={() => handleDelete(course._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
