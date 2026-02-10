import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, submitForm } from "./redux/formSlice";

function App() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleChange = (e) => {
    dispatch(
      updateField({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
