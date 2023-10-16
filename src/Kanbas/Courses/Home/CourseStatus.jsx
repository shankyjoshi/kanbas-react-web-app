import { FaBan, FaCheckCircle, FaList } from "react-icons/fa";

const CourseStatusModule = () => {
  return (
    <div className="d-none d-xl-block">
      <div className="p-4 pb-0 text-dark">Course Status</div>
      <div className="p-4 pt-2 pb-1 d-flex gap-1">
        <button type="button" className="btn btn-secondary">
          <FaBan className="wd-font-size-1-5 pe-2" aria-hidden="true" />
          Unpublish
        </button>
        <button type="button" className="btn btn-success disabled">
          <FaCheckCircle
            className=" wd-font-size-1-5 pe-2"
            aria-hidden="true"
          />
          Published
        </button>
      </div>

      <div className="d-flex flex-column p-4 mb-1">
        <button className="btn btn-secondary mb-1">
          Import Existing Content
        </button>
        <button className="btn btn-secondary mb-1">Import From Commons</button>
        <button className="btn btn-secondary mb-1">Choose Home Page</button>
        <button className="btn btn-secondary mb-1">View Course Stream</button>
        <button className="btn btn-secondary mb-1">New Annoucement</button>
        <button className="btn btn-secondary mb-1">New Analystics</button>
        <button className="btn btn-secondary mb-1">
          View Course Notifications
        </button>
      </div>
      <div className="p-4">
        <div className="d-flex justify-content-between">
          <div className="text-dark fw-semibold">Comming Up</div>
          <a
            href="#"
            className="text-danger fw-semibold float-end"
            style={{ textDecoration: "none" }}
          >
            View Calendar
          </a>
        </div>
        <hr />

        <div className="d-flex align-items-center">
          <FaList aria-hidden="true" />
          <a href="#" className="ps-4" style={{ textDecoration: "none" }}>
            <span className="text-danger fw-semibold">Lecture</span>
            <div className="text-muted">
              <small style={{ display: "block" }}>CS4550.12631.202410</small>
              <small style={{ display: "block" }}>Sep 7 at 11:45am est</small>
            </div>
          </a>
        </div>
        <div className="d-flex align-items-center">
          <FaList aria-hidden="true" />
          <a href="#" className="ps-4" style={{ textDecoration: "none" }}>
            <span className="text-danger fw-semibold">Lecture</span>
            <div className="text-muted">
              <small style={{ display: "block" }}>CS4550.12631.202410</small>
              <small style={{ display: "block" }}>Sep 7 at 11:45am est</small>
            </div>
          </a>
        </div>
        <div className="d-flex align-items-center">
          <FaList aria-hidden="true" />
          <a href="#" className="ps-4" style={{ textDecoration: "none" }}>
            <span className="text-danger fw-semibold">Lecture</span>
            <div className="text-muted">
              <small style={{ display: "block" }}>CS4550.12631.202410</small>
              <small style={{ display: "block" }}>Sep 7 at 11:45am est</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseStatusModule;
