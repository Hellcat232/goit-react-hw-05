import css from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";
import { useId, useState } from "react";

const SearchBar = ({ onSubmit, onEmpty, changeParams }) => {
  const [query, setQuery] = useState("");
  const id = useId();

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();

    if (event.target.elements.query.value.trim() === "") return onEmpty();
    changeParams(query);
    onSubmit(event.target.elements.query.value);

    event.target.reset();
  };

  // const handleChange = (event) => {
  //   setVal(event.target.value);
  // };

  return (
    <div className={css.div}>
      <form className={css.form} onSubmit={handleForm}>
        <input
          className={css.input}
          id={id}
          type="text"
          name="query"
          placeholder="Search movie"
          onChange={changeQuery}
        />
        <button className={css.button} type="submit">
          <TfiSearch color="lightsalmon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
