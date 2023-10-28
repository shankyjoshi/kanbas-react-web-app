import { useParams } from "react-router-dom";
import KanbasLinks from "../KanbasNavigation/KanbasLinks";
import CourseNavLinks from "./CourseNavLinks";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CourseNavBar = () => {
  const object = useParams();
  const restPath = object["*"].split("/");
  console.log(restPath);
  const courseId = object.courseId;
  const course = useSelector((state) =>
    state.coursesReducer.courses.find((course) => course._id === courseId)
  );
  const getActiveClass = (index) => {
    return index == restPath.length - 1 ? " active" : "text-danger fw-semibold";
  };

  const renderBreadCrumbs = () => {
    let basePath = `/Kanbas/Courses/${courseId}`;
    return restPath.map((path, index) => {
      basePath += "/" + path;
      return (
        <li className="breadcrumb-item ">
          <Link to={basePath} className={"wd-link " + getActiveClass(index)}>
            <span className="fw-semibold">{path}</span>
          </Link>
        </li>
      );
    });
  };
  return (
    <>
      <div className="flex-row d-none d-md-block">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item ">
              <FaBars
                className="me-2 text-danger"
                style={{ fontSize: "1.5em" }}
              />
              <Link
                to={`/Kanbas/Courses/${courseId}`}
                className="wd-link fw-semibold text-danger"
              >
                <span className="fw-semibold">
                  {course.name}.{course.number}
                </span>
              </Link>
            </li>
            {renderBreadCrumbs()}
          </ol>
        </nav>
        <hr />
      </div>
      <nav className="navbar navbar-dark bg-dark fixed-top d-flex d-block d-md-none">
        <div className="container-fluid col-3 m-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header align-self-center">
              <h5
                className="offcanvas-title text-danger"
                id="offcanvasDarkNavbarLabel"
              >
                Kanbas Navigation
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav fw-semibold justify-content-end flex-grow-1 pe-3">
                <KanbasLinks
                  activeClass="pb-2"
                  inActiveClass="text-danger pb-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="fw-semibold text-white col-3">
            CS5610.11550.202410
          </span>
        </div>
        <div className="container-fluid justify-content-end col-3 m-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar2"
            aria-controls="offcanvasDarkNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasDarkNavbar2"
            aria-labelledby="offcanvasDarkNavbar2Label"
          >
            <div className="offcanvas-header align-self-center">
              <h5
                className="offcanvas-title text-danger"
                id="offcanvasDarkNavbar2Label"
              >
                Course Navigation
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav fw-semibold justify-content-end flex-grow-1 pe-3">
                <CourseNavLinks
                  activeClass="nav-link text-center text-dark"
                  inActiveClass="nav-link text-center text-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CourseNavBar;
