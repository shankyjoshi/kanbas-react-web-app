import { MdAdd } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
import CourseStatusModule from "./CourseStatus";
import CourseModules from "../Modules/CourseModules";
import "./home.css";
const Home = () => {
  return (
    <div className="d-flex flex-fill ">
      <div className="d-flex flex-column flex-grow-1">
        <div className="d-flex flex-row gap-1 justify-content-end">
          <div>
            <button type="button" className="btn btn-secondary border border-3">
              Collapse all
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-secondary border border-3">
              View Progress
            </button>
          </div>
          <div className="btn p-0 border border-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Publish All
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="btn btn-danger border border-3">
              <MdAdd className="wd-font-size-1-5 pe-1" />
            </button>
          </div>
          <button type="button" className="btn btn-secondary border border-3">
            <FaEllipsisV />
          </button>
        </div>
        <hr />
        <CourseModules />
      </div>

      <CourseStatusModule />
    </div>
  );
};

export default Home;
