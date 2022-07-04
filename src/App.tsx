import './App.css';
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import CatFact from './components/CatFact';
import DogDay from './components/DogDay';
import Banner from './components/Banner';

function App() {
  return (
    <div id='contenedor' className="App">
      <Header />
      <Banner text="Bienvenido equipo"/>
      <UserInfo />
      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        <CatFact />
        <DogDay />
      </div>
    </div>
  );
}

export default App;
