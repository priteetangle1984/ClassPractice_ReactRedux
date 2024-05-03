import { useState } from "react";

export default function ControlledForm() {
  // State to hold the form data
  const [form, setForm] = useState({
    name: "",
    age: 0,
  });

  // need a handleChange function in order to use my state values in my form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
          placeholder="Your Name"
        />
        <input
          type="number"
          value={form.age}
          onChange={handleChange}
          name="age"
          placeholder="Your Age"
        />
        <input type="submit" value="Submit Form" />
      </form>
      <p>
        {form.name ? (
          <>
            {form.name} is {form.age}
          </>
        ) : (
          <>no input yet</>
        )}
      </p>
    </>
  );
}
