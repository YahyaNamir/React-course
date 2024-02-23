import "./Form.css";
import React, { useState } from "react";

export default function FormPhoenix() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    occupation: "",
    gender: "",
    languages: [],
  });

  const onChangeHandler = (event) => {
    if (event.target.name === "languages") {
      let copy = { ...formData };
      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(
          (el) => el !== event.target.value
        );
      }
      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            className="form-control"
            name="username"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">
            Occupation
          </label>
          <select
            className="form-select"
            name="occupation"
            onChange={onChangeHandler}
          >
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <div>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={onChangeHandler}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={onChangeHandler}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={onChangeHandler}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Languages
          </label>
          <div>
            <div>
              <input
                type="checkbox"
                name="languages"
                value="HTML"
                onChange={onChangeHandler}
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="languages"
                value="CSS"
                onChange={onChangeHandler}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="languages"
                value="JAVASCRIPT"
                onChange={onChangeHandler}
              />
              <label htmlFor="javascript">Javascript</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button
            className="btn"
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   console.log(formData);
            // }}
          >
            Submit
          </button>
        </div>
        <>
          <p>
            Your name : <b>{formData.username} </b>
          </p>
          <p>
            Your email : <b>{formData.email} </b>
          </p>
          <p>
            Your occupation : <b>{formData.occupation} </b>
          </p>
          <p>
            Your gender : <b>{formData.gender} </b>
          </p>
          <p>
            Your languages : <b>{formData.languages.join(" - ")} </b>
          </p>
        </>
      </form>
    </div>
  );
}
