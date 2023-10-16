import { FaBars } from "react-icons/fa";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import "./Account.css";
function Account() {
  const links = [
    "Notifications",
    "Profile",
    "Files",
    "Settings",
    "ePortfolios",
    "SharedContent",
    "TheHub",
    "QwicklyCourseTools",
    "GlobalAnnouncements",
  ];

  const { pathname } = useLocation();
  return (
    <div className="d-flex flex-fill flex-column p-3">
      <div className="d-flex align-items-center fs-4">
        <FaBars className="me-2 text-danger" />
        <div className="fw-medium ps-4">Shashank Joshi's Profile</div>
      </div>

      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <ul className="list-group list-group-flush">
            {links.map((link, index) => (
              <Link
                key={index}
                to={`${link}`}
                className={`list-group-item  ${
                  pathname.includes(link)
                    ? "text-dark border-start border-dark border-3 border-0 fw-semibold"
                    : "text-danger border-0 fw-semibold"
                }`}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="Profile" />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Profile/Edit" element={<EditProfile />} />
          <Route
            path="*"
            element={
              <h1 className="display-6">Looks like {pathname} in Progress</h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Account;
