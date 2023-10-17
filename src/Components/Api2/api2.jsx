import React, { useEffect, useState } from "react";
import axios from "axios";

const Api2 = () => {
  const [bodyDatab, setBodyDatab] = useState({});
  const [apib, setApib] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response2) => {
        setApib(response2.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdropTwo"
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
                {bodyDatab
                  ? `${bodyDatab.id} ${bodyDatab.name}`
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
                <strong>Name:</strong> {bodyDatab?.name}
              </div>
              <div>
                <strong>Email:</strong> {bodyDatab?.email}
              </div>
              <div>
                <strong>Body:</strong> {bodyDatab?.body}
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
        {apib.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>

                <td>
                  <button
                    onClick={() => {
                      setBodyDatab(data);
                    }}
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropTwo"
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

export default Api2;
