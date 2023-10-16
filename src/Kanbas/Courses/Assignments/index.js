import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Assignments = () => {
  const dropdownOptions = [
    "Edit",
    "Speed Grader",
    "Duplicate",
    "Move To..",
    "Send To..",
    "Copy To..",
    "Share To Commons",
  ];
  const assignments = db.assignments;
  const list = [
    { data: assignments, name: "Assignments" },
    { data: db.quizzes, name: "Quizzes" },
  ];
  const { courseId } = useParams();
  return (
    <div className="flex-fill">
      <div className="d-inline-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search For Assignment"
          aria-label="Search For Assignment"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="d-flex flex-row gap-1 float-end">
        <div>
          <button type="button" className="btn btn-secondary border border-3">
            <FaPlus className="pe-1" />
            Group
          </button>
        </div>

        <div>
          <button type="button" className="btn btn-danger border border-3">
            <FaPlus className="pe-1" />
            Assignment
          </button>
        </div>
        <div className="btn p-0 border border-3">
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaEllipsisV />
          </button>
          <ul className="dropdown-menu">
            {dropdownOptions.map((option, index) => (
              <li>
                <a className="dropdown-item" href="#">
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <ul className="list-group">
        {list.map((item, index) => (
          <>
            <li className="list-group-item list-group-item-secondary h5">
              {item.name}
              <div className="float-end">
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2 rounded-pill"
                >
                  40% of Total
                </button>
                <i
                  className="fa fa-plus text-muted me-2"
                  aria-hidden="true"
                ></i>
                <div className="btn p-0 border border-3">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaEllipsisV />
                  </button>
                  <ul className="dropdown-menu">
                    {dropdownOptions.map((option, index) => (
                      <li>
                        <a className="dropdown-item" href="#">
                          {option}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            {item.data
              .filter((x) => x.course === courseId)
              .map((assignment, index) => (
                <li className="list-group-item m-0" key={index}>
                  <div className="d-inline-flex flex-column justify-content-between">
                    <h5 className="mb-1">
                      <Link
                        to={`${assignment._id}`}
                        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-dark"
                      >
                        {assignment.title}
                      </Link>
                    </h5>
                    <p className="mb-1">
                      Week 0 - SETUP - Week Starting on Monday
                      September-5th(9/5/2022) Module |
                    </p>
                    <p>
                      <span className="fw-bold">Due</span> Sept 18 2022 at 11:56
                      pm | 100 pts
                    </p>
                  </div>

                  <div className="float-end">
                    <FaCheckCircle className="text-success pe-3" />
                    <FaEllipsisV />
                  </div>
                </li>
              ))}
          </>
        ))}

        <li className="list-group-item list-group-item-secondary h5">
          PROJECTS
          <div className="float-end">
            <button
              type="button"
              className="btn btn-outline-secondary me-2 rounded-pill"
            >
              30% of Total
            </button>
            <FaPlus className="text-muted me-2" />
            <div className="btn p-0 border border-3">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul className="dropdown-menu">
                {dropdownOptions.map((option, index) => (
                  <li>
                    <a className="dropdown-item" href="#">
                      {option}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
        <li className="list-group-item m-0">
          <div className="d-inline-flex flex-column justify-content-between">
            <h5 className="mb-1">
              <a
                href="AssignmentEditor/"
                className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-dark"
              >
                Project
              </a>
            </h5>
            <p className="mb-1">
              Week 0 - SETUP - Week Starting on Monday September-5th(9/5/2022)
              Module |
            </p>
            <p>
              <span className="fw-bold">Due</span> Sept 18 2022 at 11:56 pm |
              100 pts
            </p>
          </div>

          <div className="float-end">
            <i
              className="fa fa-check-circle text-success pe-3"
              aria-hidden="true"
            ></i>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Assignments;
