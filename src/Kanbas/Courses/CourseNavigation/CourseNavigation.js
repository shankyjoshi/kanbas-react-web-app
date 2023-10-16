import CourseNavLinks from "../CourseNavLinks";

const CourseNavigation = () => {
  return (
    <div className="d-none d-md-block">
      <ul className="list-group list-group-flush">
        <CourseNavLinks
          activeClass="list-group-item border-0 text-dark border-start border-dark border-3 fw-semibold"
          inActiveClass="list-group-item text-danger border-0 fw-semibold"
        />
      </ul>
    </div>
  );
};

export default CourseNavigation;
