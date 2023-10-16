import { Link, useLocation } from "react-router-dom";

const CourseNavLinks = (props) => {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Colloborations",
    "Syllabus",
    "Settings",
  ];

  const { activeClass, inActiveClass } = props;
  const { pathname } = useLocation();
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`${link}`}
          className={pathname.includes(link) ? activeClass : inActiveClass}
        >
          {link}
        </Link>
      ))}
    </>
  );
};

export default CourseNavLinks;
