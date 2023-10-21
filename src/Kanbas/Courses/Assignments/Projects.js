import { FaEllipsisV, FaPlus } from "react-icons/fa";

const Projects = ({ dropdownOptions }) => {
  return (
    <>
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
              <FaEllipsisV />
            </button>
            <ul className="dropdown-menu">
              {dropdownOptions.map((option, index) => (
                <li key={index}>
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
            <span className="fw-bold">Due</span> Sept 18 2022 at 11:56 pm | 100
            pts
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
    </>
  );
};

export default Projects;
