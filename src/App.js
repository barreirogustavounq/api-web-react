import React from "react";
import { Button, Accordion, Card, Alert } from "react-bootstrap";
import ImagesPage from "./ImagesPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/imagenes">
              Buscador <br />
              de Imágenes
            </Link>


 
          </nav>
        </header>
        <div>
          <Switch>      
            <Route path="/">
            <ImagesPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
