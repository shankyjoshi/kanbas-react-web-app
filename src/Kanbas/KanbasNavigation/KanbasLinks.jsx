import { Link, useLocation } from "react-router-dom";
import { RiDashboard3Fill } from "react-icons/ri";
import {
  FaBook,
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaHistory,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTv,
  FaUserCircle,
} from "react-icons/fa";
const KanbasLinks = (props) => {
  const { activeClass, inActiveClass } = props;
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <FaUserCircle className=" d-block" size="2em" />,
    Dashboard: <RiDashboard3Fill className="d-block wd-fared" size="2em" />,
    Courses: <FaBook className="d-block wd-fared" size="2em" />,
    Calendar: <FaCalendarAlt className="d-block wd-fared" size="2em" />,
    Inbox: <FaEnvelopeOpenText className="d-block wd-fared" size="2em" />,
    History: <FaHistory className="d-block wd-fared" size="2em" />,
    Studio: <FaTv className="d-block wd-fared" size="2em" />,
    Commons: <FaSignOutAlt className="d-block wd-fared" size="2em" />,
    Help: <FaQuestionCircle className="d-block wd-fared" size="2em" />,
  };

  const { pathname } = useLocation();
  return links.map((link, index) => (
    <Link
      key={index}
      to={`/Kanbas/${link}/`}
      className={`list-group-item list-group-item-action ${
        pathname.includes(link) ? activeClass : inActiveClass
      }`}
    >
      <div className="d-flex flex-column align-items-center">
        {linkToIconMap[link]}
        {link}
      </div>
    </Link>
  ));
};

export default KanbasLinks;
