import axios from "axios";
import React, { useState, useEffect } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const LAB_BASE = process.env.REACT_APP_LAB_BASE;
  const URL = `${LAB_BASE}/assignments`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="text"
      />
      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Completed
      </a>
      <label>
        <input
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
          value={assignment.completed}
          type="checkbox"
        />{" "}
        Completed
      </label>
      <h4>Retrieving Objects</h4>
      <a href={`${LAB_BASE}/assignment`} className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${LAB_BASE}/assignment/title`} className="btn btn-primary me-2">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;
