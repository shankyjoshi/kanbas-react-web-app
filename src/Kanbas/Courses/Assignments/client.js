import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

export const findAssignmentForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const findAssignmentById = async (assignmentId) => {
  const response = await axios.get(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${assignment.course}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignment) => {
  const response = await axios.put(
    `${ASSIGNMENTS_URL}/${assignment._id}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
