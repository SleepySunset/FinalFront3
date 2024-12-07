import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useContextGlobal();
  return (
    <main>
      <h1 className="main-title">Favorite Dentists</h1>
      <div className="card-grid">
        {favs.map(dentist => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </main>
  );
};

export default Favs;
