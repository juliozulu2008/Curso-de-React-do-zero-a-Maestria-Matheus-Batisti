//CSS
import "./App.css";
//Image
import a from "./assets/img/happy-dog.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

function App() {
  return (
    <>
      <div>
        <h1>Olá Mundo</h1>
        {/* Imagem em Public */}
        <div>
          <img src="/a.jpg" alt="Imagem 1" />
        </div>
        <div>
          <img src="/eagle.jpg" alt="Imagem 2" />
        </div>
        {/* Imagem em src */}
        <div>
          <img src={a} alt="Imagem 3" />
        </div>
        <ManageData />
        <ListRender />
        {/*"Rederizando Lista "*/}
      </div>
    </>
  );
}

export default App;
