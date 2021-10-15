import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUrl = "https://jsonplaceholder.typicode.com/users";

  const {  url } = useRouteMatch();
  const {theme} = useTheme();

  useEffect(() => {
    axios
      .get(getUrl)
      .then(function (response) {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <div className="container">
      <h1 className="display-4">Users</h1>
      <div className="row">
        {loading ? (
          <div className="display-5">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="col-md-3 my-2" key={user.id}>
              <div className={`card bg-${theme}`}>
                <div className="w-100">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Users Photos"
                  />
                </div>

                <div className="card-body">
                  <h5 className="pl-2 card-title">{user.name}</h5>
                  <ul className="list-group my-3">
                    <li className="list-group-user">
                      <strong>Username: </strong>
                      {user.username}
                    </li>
                    <li className="list-group-user">
                      <strong>Email: </strong>
                      {user.email}
                    </li>
                    <li className="list-group-user">
                      <strong>Phone: </strong>
                      {user.phone}
                    </li>
                  </ul>
                  <Link
                    className="btn btn-outline-danger"
                    to={`${url}/${user.id}`}
                  >
                    Show more details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Users;
