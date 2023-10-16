import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import CourseNavigationTab from "./CourseNavigationTab";
import CourseDetails from "./CourseDetails";

const Settings = () => {
  const links = [
    "Course Details",
    "Sections",
    "Navigation",
    "Apps",
    "Feature Options",
    "Integrations",
  ];

  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex-fill ms-4">
      <ul className="nav nav-tabs mb-3">
        {links.map((link) => (
          <li className="nav-item">
            {console.log(link.replace(/\s/g, ""))}
            <Link
              to={link.replace(/\s/g, "")}
              className={
                pathname.includes(link.replace(/\s/g, ""))
                  ? "nav-link active text-dark fw-semibold"
                  : "nav-link text-danger fw-semibold"
              }
              aria-current="page"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<Navigate to="CourseDetails" />} />
        <Route path="CourseDetails" element={<CourseDetails />} />
        <Route path="Sections" element={<h1>Sections</h1>} />
        <Route path="Navigation" element={<CourseNavigationTab />} />
        <Route path="Apps" element={<h1>Apps</h1>} />
        <Route path="FeatureOptions" element={<h1>Feature Options</h1>} />
        <Route path="Integrations" element={<h1>Integrations</h1>} />
      </Routes>
    </div>
  );
};

export default Settings;
