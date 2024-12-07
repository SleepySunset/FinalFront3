import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  return (
    <main className={state.darkTheme ? "main-dark" : "main-light"}>
      <h1
        className={`${
          state.darkTheme ? "title-dark" : "title-light"
        } main-title`}
      >
        Favorite Dentists
      </h1>

      {state.favs.length > 0 ? (
        <div className="card-grid">
          {state.favs.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
        </div>
      ) : (
        <h2
          className={`${state.darkTheme ? "text-dark" : "text-light"} fav-mssg`}
        >
          We did not find any dentists in your favorites list.
        </h2>
      )}
    </main>
  );
};

export default Favs;
