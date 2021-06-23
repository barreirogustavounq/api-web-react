import React, { useState, useEffect } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

function ImagesPage() {
  const [state, setState] = useState(null);
  const [images, setImages] = useState([]);
  const [pagina, setPagina] = useState(1);

  const scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smoth", "start");
  };

  const paginaAnterior = () => {
    if (pagina === 1) return null;
    let pagAnt = pagina - 1;
    setPagina(pagAnt);
    scroll();
  };
  const paginaSiguiente = () => {
    let pagSig = pagina + 1;
    setPagina(pagSig);
    scroll();
  };

  useEffect(() => {
    const pag = pagina;
    const url = `https://pixabay.com/api/?key=17713072-aeb5e2c0b7e7434e347180944&q=${state}&per_page=30&page=${pag}`;

    console.log(url);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => setImages(data.hits));
  }, [state, pagina]);

  const datosBusqueda = (termino) => {
    setState(termino);
    setPagina(1);
  };

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de Imagenes</p>
        <Buscador datosBusqueda={datosBusqueda} />
      </div>
      <div className="row justify-content-center">
        <Resultado
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          imagenes={images}
        />
      </div>
    </div>
  );
}

export default ImagesPage;
