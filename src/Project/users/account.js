import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchUserById(id);
    } else {
      fetchAccount();
    }
  }, [id]);
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div className="d-flex flex-column col-6 gap-2">
          <input
            type="text"
            value={account.username}
            className="form-control"
            disabled
          />

          <input
            type="password"
            value={account.password}
            className="form-control"
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            value={account.firstName}
            className="form-control"
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            value={account.lastName}
            className="form-control"
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            className="form-control"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-control"
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary " onClick={save}>
            Save
          </button>
          <button className="btn btn-danger " onClick={signout}>
            signout
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
