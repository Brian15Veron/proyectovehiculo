const { Ecologica, Estandar, Deportiva } = require("./tiposConduccion");

// Definición de la clase Vehiculo
class Vehiculo {
  constructor(combustible) {
    this.combustible = combustible;
    this.kilometros = 0.0;
    this.tipoConduccion = new Ecologica();
  }

  cambiarTipoConduccion() {
    this.tipoConduccion = this.tipoConduccion.siguiente();
  }

  avanzar(cantKms) {
    const combustibleNecesario = (1 / this.tipoConduccion.consumo()) * cantKms;
    const kilometrosPosibles = this.combustible * this.tipoConduccion.consumo();
    this.kilometros += Math.min(cantKms, kilometrosPosibles);
    this.combustible = Math.max(0.0, this.combustible - combustibleNecesario);

    if (cantKms > kilometrosPosibles) {
      throw new Error(
        `Combustible insuficiente, solo pude recorrer ${kilometrosPosibles} del total de ${cantKms} kilometros.`
      );
    }
  }

  getCombustible() {
    return this.combustible;
  }

  getKilometros() {
    return this.kilometros;
  }

  velocidadMaxima() {
    return this.tipoConduccion.velocidadMaxima();
  }

  consumo() {
    return this.tipoConduccion.consumo();
  }
}

module.exports = Vehiculo;
