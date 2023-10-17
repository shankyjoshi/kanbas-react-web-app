import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;

  return (
    <div>
      <div className="d-flex flex-fill flex-column p-3">
        <div className="d-flex align-items-center fs-4">
          <div className="ps-2">Dashboard</div>
        </div>

        <hr />

        <div className="d-flex flex-column flex-fill ms-4">
          <h3 className="fw-medium">Published Courses({courses.length})</h3>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
