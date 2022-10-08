import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const goBackHome = (e) => {
    navigate("/");
    console.log(navigate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please Fill All Input Field");
    } else {
      dispatch(addUser(state));

      navigate("/");
      setError("");
    }
  };

  const { name, email, contact, address } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <h2 className="heading ">Add Student Detail</h2>
      {error && (
        <h3 className="errormsg" style={{ color: "red" }}>
          {error}
        </h3>
      )}
      <div className="addStudent">
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="name"
            value={name}
            type="text"
            name="name"
            onChange={handleInputChange}
          />
          <br /> <br />
          <TextField
            id="standard-basic"
            label="email"
            value={email}
            name="email"
            type="email"
            onChange={handleInputChange}
          />
          <br /> <br />
          <TextField
            id="standard-basic"
            label="contact"
            value={contact}
            name="contact"
            type="number"
            onChange={handleInputChange}
          />
          <br /> <br />
          <TextField
            id="standard-basic"
            label="address"
            name="address"
            value={address}
            type="text"
            onChange={handleInputChange}
          />
          <br /> <br />
          <div className="btn">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => goBackHome()}
              type="submit"
            >
              Go Back
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddUser;
