import { FaLink, FaUserCircle, FaPenAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router";
const Profile = () => {
  const navigate = useNavigate();
  const handleEditProfile = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Account/Profile/Edit`);
  };
  return (
    <div className="flex-fill ms-4">
      <form>
        <div className="row justify-content-between">
          <div className="col-4">
            <FaUserCircle className="d-block" style={{ fontSize: "10em" }} />
          </div>
          <div className="col-4">
            <button onClick={handleEditProfile} className="btn btn-secondary">
              <FaPenAlt style={{ fontSize: "1em" }} /> Edit Profile
            </button>
          </div>
        </div>
        <h2>Shashank Joshi</h2>
        <br />
        <h2>Contact</h2>
        <p className="text-dark">
          No registered services, you can add some on the
          <a
            className="ps-1 pe-1 text-danger"
            style={{ textDecoration: "none" }}
            href="#"
          >
            settings
          </a>
          page.
        </p>
        <h2>Biography</h2>
        <p>Faculty, Software Engineer, AI, Space and renewables enthusiast</p>

        <h2>Links</h2>

        <FaLink />
        <a
          className="text-danger p-2"
          style={{ textDecoration: "none" }}
          href="https://www.youtube.com"
        >
          YouTube <FiExternalLink className="p-2" style={{ fontSize: "2em" }} />
        </a>
      </form>
    </div>
  );
};

export default Profile;
