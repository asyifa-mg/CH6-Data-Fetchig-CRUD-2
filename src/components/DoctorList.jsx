import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const DoctorList = () => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/doctors");
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false); // set loading to false after fetching data
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const getDoctors = async () => {
    const response = await axios.get("http://localhost:8000/doctors");
    setDoctor(response.data);
  };

  //Bagian Delete Data
  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/delete/${id}`);
      getDoctors();
    } catch (error) {
      console.log(error);
    }
  };
  //akhir delete data

  return (
    <div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <a href="add" className="button is -small is-info custom-color">
            ADD +
          </a>
          <table className="table is-striped is fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Spesialis</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor.id}>
                  <td>{index + 1}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.spesialis}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.gender}</td>
                  <td>
                    <Link
                      to={`update/${doctor.id}`}
                      className="button is -small is-info mr-2 custom-color"
                    >
                      UPDATE
                    </Link>
                    <button
                      onClick={() => deleteDoctor(doctor.id)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
