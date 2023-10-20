import { useSelector, useDispatch } from "react-redux";

const HelloRedux = () => {
  const { message } = useSelector((state) => state.helloReducer);

  // basically useselector hook get thes access to store, in that store it has states corresponding to reducers
  //with each reducer has its current state either it could be an initial state or updated state

  console.log(useSelector((state) => state.helloReducer)); // this returns me an object with message property
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default HelloRedux;
