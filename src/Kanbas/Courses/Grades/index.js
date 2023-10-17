import {
  FaArrowDown,
  FaCog,
  FaEdit,
  FaFileExport,
  FaFileImport,
  FaSearch,
} from "react-icons/fa";
import db from "../../Database";
import { useParams } from "react-router";
const Grades = () => {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <div className="flex-fill flex-grow-1 ">
      <div className="btn-group d-inline-flex">
        <a
          href="#"
          style={{ textDecoration: "none" }}
          className="dropdown-toggle text-danger fw-semibold"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Gradebook
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <button className="dropdown-item" type="button">
              Gradebook
            </button>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row gap-2 float-end align-items-center">
        <button className="btn btn-outline-dark">
          <FaFileImport className="pe-2" style={{ fontSize: "1.5em" }} />
          Import
        </button>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaFileExport className="pe-1" style={{ fontSize: "1.38em" }} />
            Export
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" type="button">
                PDF
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Excel
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="btn p-0 border border-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaCog />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Edit
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Speed Grader
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Duplicate
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Move To..
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Send To..
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Copy To..
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Share To Commons
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6 p-0">
          <div className="mb-3">
            <label for="students" className="fw-semibold form-label">
              Student Names
            </label>
            <div className="input-group">
              <button
                type="button"
                className="btn btn-outline-secondary input-group-text"
              >
                <FaSearch className="text-dark" />
              </button>

              <input
                type="search"
                id="students"
                className="form-control"
                placeholder="Search Students"
              />
              <button
                type="button"
                className="btn btn-outline-secondary input-group-text"
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <label for="assignmentName" className="fw-semibold form-label">
              Assignment Names
            </label>
            <div className="input-group">
              <button
                type="button"
                className="btn btn-outline-secondary input-group-text"
              >
                <FaSearch className="text-dark" />
              </button>

              <input
                type="search"
                id="assignmentName"
                className="form-control"
                placeholder="Search Assignments"
              />
              <button
                type="button"
                className="btn btn-outline-secondary input-group-text"
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <button type="button" className="btn btn-light border border-1">
          <i className="fa fa-filter text-dark"></i>
          <span className="ps-2 fw-semibold">Apply Filter</span>
        </button>
      </div>
      <div className="table-responsive mt-2">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-light fw-medium">
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>
                {assignment.title}
                <div className="d-block fw-lighter">Out of 100</div>
              </th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return (
                      <td>
                        {grade?.grade || (
                          <div class="input-group mb-3">
                            <input
                              type="number"
                              class="form-control"
                              aria-describedby="basic-addon2"
                            />
                            <span class="input-group-text" id="basic-addon2">
                              <FaEdit className="fs-6" />
                            </span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
