import { FaUserCircle, FaPencilAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Account/`);
  };
  return (
    <div className="flex-fill ms-4">
      <form action="index.html">
        <div className="row justify-content-between">
          <div className="col-4">
            <FaUserCircle className="d-block " style={{ fontSize: "10em" }} />
          </div>
          <div className="col-4">
            <button onClick={handleSave} className="btn btn-secondary">
              <FaPencilAlt className="p-2" style={{ fontSize: "2em" }} />
              Cancel Editing
            </button>
          </div>
        </div>
        <br />
        <div className="mb-3 col-4">
          <label htmlFor="name" className="form-label fw-bold">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            value="Shashank Joshi"
            placeholder="Enter Name"
            id="name"
          />
        </div>
        <div className="mb-3 col-3">
          <label htmlFor="pronouns" className="form-label fw-bold">
            Pronouns:
          </label>
          <select id="pronouns" className="form-select">
            <option value="None">None</option>
            <option value="HeHim">He/Him</option>
          </select>
        </div>

        <div className="mb-3 col-4">
          <label htmlFor="title" className="form-label fw-bold">
            Title:
          </label>
          <input
            className="form-control"
            type="text"
            value=""
            placeholder="Enter Title"
            id="title"
          />
        </div>
        <div className="mb-3 col-4">
          <h3>Contact</h3>
          <p className="text-dark">
            No registered services, you can add some on the
            <a
              className="text-danger"
              style={{ textDecoration: "none" }}
              href="#"
            >
              settings
            </a>
            page.
          </p>
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="biography" className="form-label h2">
            Biography
          </label>
          <textarea className="form-control" id="biography" cols="54" rows="5">
            Faculty, Software Engineer, AI, Space and renewables enthusiast
          </textarea>
        </div>

        <h2>Links</h2>

        <div className="col-5 mb-3 text-center">
          <div className="row">
            <div className="col-5 text-center fw-bold p-0">Title</div>
            <div className="col-1 p-2"></div>
            <div className="col-5 text-center fw-bold p-0">URL</div>
          </div>
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                id="Title"
                placeholder="Enter Title"
              />
            </div>
            <div className="col-1">&rarr;</div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                id="URL"
                placeholder="Enter URL"
              />
            </div>

            <FaTimes
              className="fa col-1 text-danger"
              style={{ fontSize: "2em" }}
            />
          </div>
          <div className="row p-2">
            <div className="col-5 ps-0 text-start">
              <button className="btn btn-secondary">Add another link</button>
            </div>
          </div>
        </div>
        <div className="d-grid col-5 gap-2 mb-3 d-md-flex justify-content-md-end">
          <button onClick={handleSave} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={handleSave} className="btn btn-danger">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
