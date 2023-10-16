import "./index.css";
import KanbasLinks from "./KanbasLinks";

const KanbasNavigation = (props) => {
  return (
    <div className="bg-dark d-none d-md-block  min-vh-100">
      <div className="wd list-group " style={{ minHeight: "100%" }}>
        <KanbasLinks
          activeClass="bg-white text-danger"
          inActiveClass="bg-dark text-white"
        />
      </div>
    </div>
  );
};

export default KanbasNavigation;
