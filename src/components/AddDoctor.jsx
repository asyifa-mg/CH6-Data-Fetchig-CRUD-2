import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [spesialis, setSpesialis] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Female");
  const navigate = useNavigate();

  const saveDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/create", {
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

  return (
    <div>
      <div className="columns mt-5 is centered">
        <div className="column is-half"></div>
        <form onSubmit={saveDoctor}>
          <div className="field">
            <label className="Label">Name</label>
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
            <label className="label">Spesialis</label>
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
            <label className="">Email</label>
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
            <label className="">Gender</label>
            <div className="control">
              <div className="select is fullwidth">
                <select
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
