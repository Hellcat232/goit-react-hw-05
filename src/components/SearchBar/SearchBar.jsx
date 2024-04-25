import css from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";

const SearchBar = ({ onSubmit, onEmpty }) => {
  const handleForm = (event) => {
    event.preventDefault();

    if (event.target.elements.query.value.trim() === "") return onEmpty();

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
          type="text"
          name="query"
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">
          <TfiSearch color="lightsalmon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
