const CourseNavigationTab = () => {
  const items = [
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
  ];

  const secondList = [
    "Chat",
    "SCORM",
    "Attendance",
    "Barnes and Noble Bookstore",
    "Digication",
    "Top Hat",
    "Syllabus",
    "Perusall",
    "Microsoft Team Meetings",
    "FACT Reporting and Photo Rooster",
    "Progress Reports (Navigate)",
    "Microsoft Teams for Canvas",
    "VHL Central",
    "Gradescope 1.3",
    "Credentials",
    "iClicker",
  ];
  return (
    <>
      <span>Drag and drop items to reorder them in course Navigation</span>
      <div className="col-5">
        <ul className="list-group mt-3">
          <li className="list-group-item">Home</li>
          {items.map((item) => (
            <li className="list-group-item">
              {item}
              <i
                className="fa fa-ellipsis-v float-end text-secondary"
                aria-hidden="true"
              ></i>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3">Drag Items here to hide them from students</div>
      <small>
        Disabling most pages will cause students who visit those pages tobe
        redirected to the course page here.
      </small>
      <ul className="list-group col-5">
        {secondList.map((item) => (
          <li className="list-group-item">
            <div>{item}</div>
            &ensp;<sub>Page disabled won't appear in Navigation</sub>
            <i
              className="fa fa-ellipsis-v float-end text-secondary"
              aria-hidden="true"
            ></i>
          </li>
        ))}
      </ul>
      <div className="col-6 mt-3">
        <button className="btn btn-danger">Save</button>
      </div>
    </>
  );
};

export default CourseNavigationTab;
