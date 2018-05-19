import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const capitalize = str => str.length ? str[0].toUpperCase() + str.slice(1) : '';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    letter-spacing: 2px;
    font-style: italic;
    text-align: center;
    font-weight: 900;
    margin: 1em 0 1em 0;
    font-family: system-ui;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    > * {
      font-size: 1rem;
    }
    input {
      padding: 0.3em;
    }
    button {
      border: 0;
      outline: 0;
      background: #2165ee;
      color: white;
      border-bottom-left-radius: 0.4em;
      border-bottom-right-radius: 0.4em;
      padding: 0.6em;
      transition: .2s ease all;
      &:disabled {
        opacity: .5;
      }
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
`;

const BarraSustancia = styled.div`
  width: 100%;
  height: 25px;
  border: 2px solid black;
  margin: 0.2em 0;
  position: relative;
  &:before {
    content: "";
    width: ${props => props.ritmosustancia || 0}%;
    height: 100%;
    background: hsl(${props => props.ritmosustancia || 0}, 100% , 50%);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const RitmoSustanciaWrapper = styled.div`
  margin: 1em 0;
  animation: ${fadeIn} 1s ease;
`;

const RitmoSustancia = ({ nombre, ritmosustancia }) => (
  <RitmoSustanciaWrapper>
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
              onChange={e => this.setState({ nombre: capitalize(e.target.value) })}
              placeholder="Ingrese Nombre"
              value={nombre}
              id="nombreInput"
              type="text"
            />
            <button disabled={nombre.length === 0} type="submit" onClick={this.obtenerRitmosustancia}>
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
