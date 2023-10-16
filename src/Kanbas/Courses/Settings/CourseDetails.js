const CourseDetails = (props) => {
  return (
    <>
      <h1 className="display-5">Course Details</h1>
      <div className="col-9 mt-4 d-flex flex-column gap-2">
        <div className="row">
          <label for="name" className="col-2 form-label fw-semibold">
            Upload:
          </label>
          <div className="col-6">
            <input
              type="file"
              className="form-control col-6"
              id="photo"
              accept=".jpg,.jpeg,.png"
            />
          </div>
        </div>

        <div className="row">
          <label for="name" className="col-2 form-label fw-semibold">
            Name:
          </label>
          <label for="name" className="col-6 form-label">
            CS 5610 Web Dev Course
          </label>
        </div>
        <div className="row">
          <label for="name" className="col-2 form-label fw-semibold">
            Course Code:
          </label>
          <label for="name" className="col-6 form-label">
            CS 5610
          </label>
        </div>
        <div className="row">
          <label for="name" className="col-2 form-label fw-semibold">
            Blueprint Course:
          </label>
          <label for="name" className="col-6 form-label">
            No
          </label>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Course Template:
            </label>
          </div>
          <div className="col-5">
            <button className="btn btn-outline-secondary">
              Enable Course as a Template
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Time Zone:
            </label>
          </div>
          <div className="col-5">
            <select id="assignments" className="form-select">
              <option>Eastern Time (US &amp; Canada)</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              SSID:
            </label>
          </div>
          <div className="col-5">
            <label for="name" className="col-form-label">
              CS4550 12631
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Subaccount:
            </label>
          </div>
          <div className="col-5">
            <label for="name" className="col-form-label">
              CS4550 12631
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Subaccount:
            </label>
          </div>
          <div className="col-6 d-flex flex-column gap-2">
            <select id="assignments" className="form-select">
              <option>Term</option>
            </select>
            <label for="name" className="col-form-label">
              Course Participation is limited to <b>Term</b> start and end dates
            </label>
            <label for="name" className="col-form-label fw-semibold">
              Start
            </label>
            <input type="date" className="form-control" />
            <label for="name" className="col-form-label fw-semibold">
              End
            </label>
            <input type="date" className="form-control" />
            <div className="form-check text-start">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Restrict students from viewing course before term start date
              </label>
            </div>
            <div className="form-check text-start">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Restrict students from viewing course before term end date
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Default Due Time:
            </label>
          </div>
          <div className="col-6 d-flex flex-column gap-2">
            <select id="assignments" className="form-select">
              <option>Account default(11:59pm)</option>
            </select>
            <label for="assignments" className="col-form-label">
              This influences the user interface for setting the due dats.
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Language:
            </label>
          </div>
          <div className="col-6 d-flex flex-column gap-2">
            <select id="assignments" className="form-select">
              <option>Not set the user interface</option>
            </select>
            <label for="assignments" className="col-form-label">
              This override any user/system language pref.
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              File Storage:
            </label>
          </div>
          <div className="col-5">
            <label for="name" className="col-form-label">
              100000 megabytes
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Large Course:
            </label>
          </div>
          <div className="col-5">
            <div className="form-check text-start">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Launched SpeedGrader filtered by Student Group
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Grading Scheme:
            </label>
          </div>
          <div className="col-5">
            <div className="form-check text-start">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Enable Course grading scheme
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              License:
            </label>
          </div>
          <div className="col-6">
            <select id="assignments" className="form-select">
              <option>Private</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              File Copyright:
            </label>
          </div>
          <div className="col-5">
            <div className="form-check text-start">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Copyright and license information must be provided for files
                before they are published
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Visiblity:
            </label>
          </div>
          <div className="col-6 d-flex flex-column gap-2">
            <div>
              <label className="col-form-label">
                If you need to make your course public please contact your
                support
              </label>
            </div>
            <select id="assignments" className="form-select" disabled>
              <option>Course</option>
            </select>
            <div class="form-check text-start">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Include this course in this public course index
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Format:
            </label>
          </div>
          <div className="col-6">
            <select id="assignments" className="form-select">
              <option>On Campus</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Mastery Paths:
            </label>
          </div>
          <div className="col-6 ">
            <div class="form-check text-start ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Enables individual learning path
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label for="assignments" className="col-form-label fw-semibold">
              Description:
            </label>
          </div>
          <div className="col-6">
            <textarea cols="50" rows="10" className="form-control"></textarea>
            <a
              className="text-danger fw-semibold"
              style={{ textDecoration: "none" }}
            >
              moreoptions
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <button className="btn btn-danger float-end">
              Update Course Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
