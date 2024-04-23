import { useState } from "react";

const Searching = ({ onSubmit }) => {
  const [val, setVal] = useState("");

  const handleForm = (event) => {
    event.preventDefault();

    if (event.target.query.value.trim() === "") return;

    onSubmit(event.target.query.value);

    event.target.reset();
  };

  return (
    <form onSubmit={handleForm}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searching;
