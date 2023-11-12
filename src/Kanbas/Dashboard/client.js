import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;

export const findCourseById = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}`);
  return response.data;
};

export const getAllCourses = async () => {
  const response = await axios.get(`${COURSES_URL}`);
  return response.data;
};

export const createCourse = async (course) => {
  const response = await axios.post(`${COURSES_URL}`, course);
  return response.data;
};

export const delCourse = async (courseId) => {
  const response = await axios.delete(`${COURSES_URL}/${courseId}`);
  return response.data;
};

export const updCourse = async (course) => {
  const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
  return response.data;
};
