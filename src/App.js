import Navigation from "./components/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

function App() {
  return (
    <div className="container">
      <Navigation />
      <Carousel />
    </div>
  );
}

export default App;
