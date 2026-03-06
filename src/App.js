import { Outlet } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import './App.css';
function App() {
  return (
    <>
      <h1>Acervo Digital</h1>
      <NavBar />
      <Outlet />
    </>
  );
}
export default App;
