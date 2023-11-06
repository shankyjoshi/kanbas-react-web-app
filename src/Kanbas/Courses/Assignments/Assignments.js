import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import db from "../../Database";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./assignmentsReducer";
import ConfirmationModal from "./ConfirmationModal";
import Projects from "./Projects";
import { useEffect } from "react";
import * as client from "./client";
export const Assignments = () => {
  const dropdownOptions = [
    "Edit",
    "Speed Grader",
    "Duplicate",
    "Move To..",
    "Send To..",
    "Copy To..",
    "Share To Commons",
  ];
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const list = [
    { data: assignments, name: "Assignments" },
    { data: db.quizzes, name: "Quizzes" },
  ];
  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleAddAssignment = (e) => {
    e.preventDefault();
    navigate(`${new Date().getTime().toString()}`);
  };

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    client.deleteAssignment(id).then((status) => {
      dispatch(deleteAssignment(id));
    });
  };

  useEffect(() => {
    client.findAssignmentForCourse(courseId).then((assignments) => {
      dispatch(setAssignments(assignments));
    });
  }, []);
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
          <button
            onClick={handleAddAssignment}
            type="button"
            className="btn btn-danger border border-3"
          >
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
                <li className="list-group-item m-0 " key={index}>
                  <div className="row justify-content-between ">
                    <div className="col-8 ">
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
                        <span className="fw-bold">Due</span> Sept 18 2022 at
                        11:56 pm | 100 pts
                      </p>
                    </div>

                    <div className="col-2 d-flex justify-content-end ">
                      <div className="d-flex flex-column">
                        <div>
                          <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                          <FaEllipsisV />
                        </div>
                        <ConfirmationModal
                          key={index}
                          handleDelete={handleDelete}
                          id={assignment._id}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </>
        ))}
        <Projects dropdownOptions={dropdownOptions} />
      </ul>
    </div>
  );
};

export default Assignments;
