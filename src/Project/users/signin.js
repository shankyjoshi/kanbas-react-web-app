import * as client from "./client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/project/account");
    } catch (err) {
      setError({ message: "Invalid credentials" });
    }
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <>
      {account ? (
        <h1> You are already Signed In as {account.username}! </h1>
      ) : (
        <div className="d-flex flex-column col-2 gap-2">
          <h1>Signin</h1>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <input
            className="form-control"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            className="form-control"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button className="btn btn-success " onClick={signin}>
            Signin
          </button>
        </div>
      )}
    </>
  );
}
export default Signin;
