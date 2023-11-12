import { useNavigate, useParams } from "react-router";
import db from "../../Database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./assignmentsReducer";
import * as client from "./client";
const EditAssignment = () => {
  const { courseId, assignid } = useParams();
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState({});

  const [addFlag, setAddFlag] = useState(false);

  useEffect(() => {
    client
      .findAssignmentById(assignid)
      .then((assignment) => {
        setAssignment(assignment);
      })
      .catch((err) => {
        setAddFlag(true);
        setAssignment({
          _id: assignid,
          title: "New Assignment",
          description: "New Description",
          course: courseId,
        });
      });
  }, [assignid]);

  const navigate = useNavigate();
  const handleCancel = () => {
    console.log("Actually cancelling assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Actually saving assignment TBD in later assignments");
    if (addFlag) {
      client.createAssignment(assignment).then((assignment) => {
        dispatch(addAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      });
    } else {
      client.updateAssignment(assignment).then((assignment) => {
        dispatch(updateAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      });
    }
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  return (
    <div class="flex-grow-1">
      <form action="/kanbas/assignments">
        <div className="mb-3">
          <label for="assignmentName" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={assignment.title}
            onChange={handleValueChange}
            id="assignmentName"
            placeholder="Assignment Name"
          />
        </div>

        <textarea
          name="description"
          onChange={handleValueChange}
          value={assignment.description}
          className="form-control"
          cols="50"
          rows="5"
        />
        <div className="container text-end">
          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="points" className="col-form-label">
                Points
              </label>
            </div>
            <div className="col-5">
              <input
                className="form-control"
                value="100"
                type="number"
                max="100"
                min="50"
                step="5"
              />
            </div>
          </div>
          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="assignments" className="col-form-label">
                Assignment Group
              </label>
            </div>
            <div className="col-5">
              <select id="assignments" className="form-select">
                <option>ASSIGNMENTS</option>
              </select>
            </div>
          </div>
          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="grade" className="col-form-label">
                Display Grade as
              </label>
            </div>
            <div className="col-5">
              <select id="grade" className="form-select mb-2">
                <option>Percentage</option>
              </select>
              <div className="form-check text-start">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Do not consider this assignment for final grade.
                </label>
              </div>
            </div>
          </div>

          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="grade" className="col-form-label">
                Submission Type
              </label>
            </div>
            <div className="border border-1 border-secondary-subtle rounded p-3 col-5">
              <div className="row mb-1">
                <div className="col-8">
                  <select id="online" className="form-select col-3">
                    <option>Online</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column mt-4 gap-2">
                <span className="fs-6 fw-semibold text-start">
                  Online Entry Options
                </span>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="textEntry"
                  />
                  <label className="form-check-label" for="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="websiteURL"
                  />
                  <label className="form-check-label" for="websiteURL">
                    Website URL
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="mediaRec"
                  />
                  <label className="form-check-label" for="mediaRec">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="studAnnot"
                  />
                  <label className="form-check-label" for="studAnnot">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="fileUploads"
                  />
                  <label className="form-check-label" for="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="grade" className="col-form-label">
                Submission Type
              </label>
            </div>
            <div className="border border-1 border-secondary-subtle rounded p-3 col-5">
              <div className="row mb-1">
                <div className="col-8">
                  <select id="online" className="form-select col-3">
                    <option>Online</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column mt-4 gap-2">
                <span className="fs-6 fw-semibold text-start">
                  Online Entry Options
                </span>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="textEntry"
                  />
                  <label className="form-check-label" for="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="websiteURL"
                  />
                  <label className="form-check-label" for="websiteURL">
                    Website URL
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="mediaRec"
                  />
                  <label className="form-check-label" for="mediaRec">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="studAnnot"
                  />
                  <label className="form-check-label" for="studAnnot">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="fileUploads"
                  />
                  <label className="form-check-label" for="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="submissionattempts" className="col-form-label">
                Submission Attempts
              </label>
            </div>
            <div className="col-5">
              <select id="submissionattempts" className="form-select">
                <option>Unlimited</option>
              </select>
            </div>
          </div>
          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="plag" className="col-form-label">
                Plagiarism Review
              </label>
            </div>
            <div className="col-5">
              <select id="plag" className="form-select">
                <option>None</option>
              </select>
            </div>
          </div>

          <div className="row m-2 g-3">
            <div className="col-3">
              <label className="col-form-label d-block">Group Assignment</label>
            </div>

            <div className="col-5 form-check text-start ms-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="textEntry"
              />
              <label className="form-check-label" for="textEntry">
                This is a Group Assignment
              </label>
            </div>
          </div>
          <div className="row m-2 g-3">
            <div className="col-3">
              <label className="col-form-label d-block">Peer Reviews</label>
            </div>

            <div className="col-5 form-check text-start ms-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="textEntry"
              />
              <label className="form-check-label" for="textEntry">
                Require Peer Reviews
              </label>
            </div>
          </div>

          <div className="row m-2 g-3">
            <div className="col-3">
              <label for="grade" className="col-form-label">
                Assign
              </label>
            </div>
            <div className="border border-1 border-secondary-subtle rounded p-0 col-5 card">
              <div className="row mb-1 card-body">
                <div className="col-8 d-flex flex-column text-start">
                  <label
                    className="fs-6 fw-semibold text-start col-form-label"
                    for="assign"
                  >
                    Assign To
                  </label>
                  <select id="online" className="form-select col-3">
                    <option>Everyone</option>
                  </select>
                  <label
                    className="fs-6 fw-semibold text-start col-form-label"
                    for="due"
                  >
                    Due
                  </label>
                  <input
                    name="availDueDate"
                    value={assignment.availDueDate}
                    onChange={handleValueChange}
                    type="date"
                    className="form-control"
                  />
                  <div className="row">
                    <div className="col-6 pe-0">
                      <label
                        className="fs-6 fw-semibold text-start col-form-label"
                        for="due"
                      >
                        Availaible From
                      </label>
                      <input
                        name="availFromDate"
                        value={assignment.availFromDate}
                        onChange={handleValueChange}
                        type="date"
                        className="form-control"
                      />
                    </div>

                    <div className="col-6 ps-1">
                      <label
                        className="fs-6 fw-semibold text-start col-form-label"
                        for="due"
                      >
                        Until
                      </label>
                      <input
                        name="availUntilDate"
                        value={assignment.availUntilDate}
                        onChange={handleValueChange}
                        type="date"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" style={{ "text-decoration": "none" }}>
                <div className="card-footer text-muted text-center">
                  <i className="fa fa-plus pe-3" aria-hidden="true"></i>Add
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="form-check text-start">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="notify"
            />
            <label className="form-check-label" for="notify">
              Notify users that this content has been changed.
            </label>
          </div>
          <div className="float-end">
            <button
              onClick={handleCancel}
              className="btn btn-light border border-2"
            >
              Cancel
            </button>
            <button onClick={handleSave} className="btn btn-danger">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditAssignment;
