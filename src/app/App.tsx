import React, {FC} from 'react';
import './App.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import "../themed-bootstrap.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App: FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <header>
        <Header/>
      </header>

      <main className="flex-grow-1" style={{  }}>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
