import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateDoctor() {
  const [name, setName] = useState("");
  const [spesialis, setSpesialis] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Female");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDoctorsById();
  }, []);

  const updateDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/update/${id}`, {
        name,
        spesialis,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorsById = async () => {
    const response = await axios.get(`http://localhost:8000/doctors/${id}`);
    setName(response.data.name);
    setSpesialis(response.data.spesialis);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateDoctor}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label for="email">Spesialis:</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={spesialis}
                onChange={(e) => setSpesialis(e.target.value)}
                placeholder="Spesialis"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is fullwidth">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateDoctor;
