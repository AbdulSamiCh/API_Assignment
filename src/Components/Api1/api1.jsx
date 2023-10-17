import axios from "axios";
import React, { useEffect, useState } from "react";

const Api1 = () => {
  const [bodyData, setBodyData] = useState([]);
  const [api, setApi] = useState([]);

  console.log(api);

  useEffect(() => {
    let response = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        setApi(data.data);
      });
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdropOne"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {bodyData
                  ? `${bodyData.id} ${bodyData.title}`
                  : "No data available"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Body: {bodyData?.body}</div>
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {api.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>

                <td>
                  <button
                    onClick={() => {
                      setBodyData(data);
                    }}
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropOne"
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

export default Api1;
