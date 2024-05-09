import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountButton from "./components/CountButton";
import Header from "./components/Header";
import Form from "./components/Form/Form";

function App() {
  return (
    <main>
      <Header title="Formulario de ingreso" />
      <Form />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
///<CountButton />
