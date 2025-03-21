// Definición de la clase Ecologica
class Ecologica {
  consumo() {
    return 15.0;
  }

  velocidadMaxima() {
    return 120.0;
  }

  siguiente() {
    return new Estandar();
  }
}

// Definición de la clase Estandar
class Estandar {
  consumo() {
    return 10.0;
  }

  velocidadMaxima() {
    return 150.0;
  }

  siguiente() {
    return new Deportiva();
  }
}

// Definición de la clase Deportiva
class Deportiva {
  consumo() {
    return 5.0;
  }

  velocidadMaxima() {
    return 200.0;
  }

  siguiente() {
    return new Ecologica();
  }
}

module.exports = { Ecologica, Estandar, Deportiva };
