import Canvas from "./canvas";
import Customizer from "./pages/customizer";
import Home from "./pages/home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home></Home>
      <Canvas></Canvas>
      <Customizer></Customizer>
    </main>
  )
}

export default App
