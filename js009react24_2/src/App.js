import './App.css';

import Header from "./components/template/Header";
import Footer from "./components/template/Footer";
import Content from "./components/template/Content";

function App() {
  return (
    <div className="App">
      <Header />
        <Content />
      <Footer />
    </div>
  );
}

export default App;
