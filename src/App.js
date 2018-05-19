import React, { Component } from "react";
import { AppWrapper, BarraSustancia, RitmoSustanciaWrapper } from "./styles";

const capitalize = str =>
  str.length ? str[0].toUpperCase() + str.slice(1) : "";

const RitmoSustancia = ({ nombre, ritmosustancia, id }) => (
  <RitmoSustanciaWrapper key={id}>
    <h3>Nombre: {nombre}</h3>
    <p>Ritmosustancia: {ritmosustancia}</p>
    <BarraSustancia ritmosustancia={ritmosustancia} />
  </RitmoSustanciaWrapper>
);

class App extends Component {
  state = {
    nombre: "",
    ritmosustancias: [
      {
        id: new Date().getTime(),
        nombre: "Micael",
        ritmosustancia: 100
      }
    ]
  };

  componentDidMount() {
    document.querySelector("#nombreInput").focus();
  }

  obtenerRitmosustancia = e => {
    e.preventDefault();

    this.setState(({ nombre, ritmosustancias }) => ({
      nombre: "",
      ritmosustancias: [
        ...ritmosustancias,
        {
          id: new Date().getTime(),
          nombre: nombre,
          ritmosustancia: Math.floor(Math.random() * 100) + 1
        }
      ]
    }));
  };

  render() {
    const { nombre, ritmosustancias } = this.state;
    return (
      <AppWrapper>
        <div className="container">
          <h1>RITMOSUSTANCIOMETRO</h1>
          <form>
            <input
              onChange={e =>
                this.setState({ nombre: capitalize(e.target.value) })
              }
              placeholder="Ingrese Nombre"
              value={nombre}
              id="nombreInput"
              type="text"
            />
            <button
              disabled={nombre.length === 0}
              type="submit"
              onClick={this.obtenerRitmosustancia}
            >
              Obtener ritmosustancia
            </button>
          </form>
          {ritmosustancias.map(RitmoSustancia)}
        </div>
      </AppWrapper>
    );
  }
}

export default App;
