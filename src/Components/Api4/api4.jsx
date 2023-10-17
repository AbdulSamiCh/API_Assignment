import React, { useEffect, useState } from "react";
import axios from "axios";

const Api4 = () => {
  const [bodyDatad, setBodyDatad] = useState({});
  const [apid, setApid] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response2) => {
        setApid(response2.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdropFour"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {bodyDatad
                  ? `${bodyDatad.id} ${bodyDatad.name}`
                  : "No data available"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <strong>Email:</strong> {bodyDatad?.email}
              </div>
              <div>
                <strong>Username:</strong> {bodyDatad?.username}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {apid.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setBodyDatad(data);
                    }}
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropFour"
                  >
                    Data
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Api4;
