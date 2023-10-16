import "./index.css";
import KanbasLinks from "./KanbasLinks";

const KanbasNavigation = (props) => {
  return (
    <div className="col-auto bg-dark d-none d-md-block  ">
      <div className="wd list-group ">
        <KanbasLinks
          activeClass="bg-white text-danger"
          inActiveClass="bg-dark text-white"
        />
      </div>
    </div>
  );
};

export default KanbasNavigation;
