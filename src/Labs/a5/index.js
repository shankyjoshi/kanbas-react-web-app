import WorkingWithArrays from "./WorkingWithArrays";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const LAB_BASE = process.env.REACT_APP_LAB_BASE;
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${LAB_BASE}/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <h1>SimpleAPIExamples </h1>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}

export default Assignment5;
