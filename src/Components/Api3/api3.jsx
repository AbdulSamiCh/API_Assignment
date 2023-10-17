import React, { useEffect, useState } from "react";
import axios from "axios";

const Api3 = () => {
  const [bodyDatac, setBodyDatac] = useState({});
  const [apic, setApic] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response2) => {
        setApic(response2.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdropThree"
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
                {bodyDatac
                  ? `${bodyDatac.id} ${bodyDatac.completed}`
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
                <strong>title:</strong> {bodyDatac?.title}
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
            {/* <th scope="col">Email</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {apic.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.completed}</td>

                <td>
                  <button
                    onClick={() => {
                      setBodyDatac(data);
                    }}
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropThree"
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

export default Api3;
