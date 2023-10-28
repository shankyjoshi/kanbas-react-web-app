import { FaCheckCircle, FaPlus, FaEllipsisV, FaLink } from "react-icons/fa";
import db from "../../Database";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addModule, deleteModule, updateModule } from "./modulesReducer";
const CourseModules = (props) => {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const { courseId } = useParams();
  const [mod, setMod] = useState({
    name: "New Module",
    description: "This is a new Module",
    course: courseId,
  });
  const dispatch = useDispatch();
  return (
    <ul className="list-group flex-grow-1 mt-5 mt-md-0">
      <li className="list-group-item">
        <input
          className="form-control mb-2"
          value={mod.name}
          onChange={(e) =>
            setMod({
              ...mod,
              name: e.target.value,
            })
          }
        />
        <textarea
          className="form-control mb-2"
          value={mod.description}
          onChange={(e) =>
            setMod({
              ...mod,
              description: e.target.value,
            })
          }
        />
        <button
          onClick={() => dispatch(updateModule(mod))}
          className="btn btn-primary mb-2 me-2"
        >
          Update
        </button>
        <button
          onClick={() => dispatch(addModule(mod))}
          className=" btn btn-success mb-2"
        >
          Add
        </button>
      </li>

      {modules
        .filter((x) => x.course === courseId)
        .map((module, index) => (
          <React.Fragment key={index}>
            <li className="list-group-item list-group-item-secondary">
              <span className="h5">{module.name}</span>
              <div className="float-end">
                <button
                  onClick={() => setMod(module)}
                  className="btn btn-primary me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="btn btn-danger me-2"
                >
                  Delete
                </button>
                <FaCheckCircle className="text-success" />
                <FaPlus className="wd-home-faplus text-muted ps-3" />
                <FaEllipsisV className=" wd-home-faellipse text-muted ps-3" />
              </div>
            </li>
            <li className="list-group-item m-0">
              <span className="h5">LEARNING OBJECTIVES</span>
              <div className="float-end">
                <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                <FaEllipsisV />
              </div>
            </li>

            <span className="sublist h6 m-0">
              <li className=" sublist list-group-item ">
                {module.description}
                <div className="float-end">
                  <FaCheckCircle className="  wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV />
                </div>
              </li>

              <li className=" sublist list-group-item">
                Learn what is Web Development
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV />
                </div>
              </li>
              <li className="list-group-item">
                Creating a development environment
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV />
                </div>
              </li>
              <li className="list-group-item">
                Creating a Web Application
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV />
                </div>
              </li>
              <li className="list-group-item">
                Getting started with the 1st assignment
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV />
                </div>
              </li>
            </span>

            <li className="list-group-item  wd-title">
              <span className="h5 ">READING</span>
              <div className="float-end">
                <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                <FaEllipsisV />
              </div>
            </li>

            <div className="sublist h6 m-0">
              <li className="list-group-item">
                Full Stack Developer - Chapter 1 - Introduction
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV />
                </div>
              </li>
              <li className="list-group-item">
                Full Stack Developer - Chapter 2 - Creating User Interfaces With
                HTML
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV />
                </div>
              </li>
            </div>

            <li className="list-group-item wd-title">
              <span className="h5 ">SLIDES</span>
              <div className="float-end">
                <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                <FaEllipsisV />
              </div>
            </li>
            <div className="h6 m-0">
              <a href="#" className="list-group-item text-danger">
                <FaLink
                  className=" wd-font-size-2 text-success pe-3"
                  style={{ opacity: 0.5 }}
                />
                Introduction to Web Development Links to an external site.
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV className="text-dark" />
                </div>
              </a>

              <a href="#" className="list-group-item text-danger">
                <FaLink
                  className=" wd-font-size-2 text-success pe-3"
                  style={{ opacity: 0.5 }}
                />
                Creating an HTTP server with Node.js Links to external site.
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2  text-success pe-3" />
                  <FaEllipsisV className="text-dark" />
                </div>
              </a>

              <a href="#" className="list-group-item text-danger">
                <FaLink
                  className=" wd-font-size-2 text-success pe-3"
                  style={{ opacity: 0.5 }}
                />
                Creating a React Application Links to an external site.
                <div className="float-end">
                  <FaCheckCircle className=" wd-font-size-2 text-success pe-3" />
                  <FaEllipsisV className="text-dark" />
                </div>
              </a>
            </div>
          </React.Fragment>
        ))}
    </ul>
  );
};

export default CourseModules;
