import css from "./MovieList.module.css";

const MovieList = ({ children }) => {
  return (
    <main className={css.main}>
      <ul className={css["list-item"]}>{children}</ul>
    </main>
  );
};

export default MovieList;
