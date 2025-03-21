const Vehiculo = require("./vehiculos");

describe("Simulacion", () => {
  describe("Vehiculo1", () => {
    let vehiculo1;

    beforeEach(() => {
      vehiculo1 = new Vehiculo(25);
    });

    test("vehículo 1 debería inicializar con combustible y kilometros en 0", () => {
      expect(vehiculo1.getCombustible()).toBe(25);
      expect(vehiculo1.getKilometros()).toBe(0);
    });

    test("vehículo 1 debería volver al modo Ecologica después de Deportiva", () => {
      vehiculo1.cambiarTipoConduccion(); // Estandar
      vehiculo1.cambiarTipoConduccion(); // Deportiva
      vehiculo1.cambiarTipoConduccion(); // Ecologica
      expect(vehiculo1.velocidadMaxima()).toBe(120); // Velocidad máxima en modo Ecologica
    });

    test("vehículo 1 en conducion Estandar debería avanzar correctamente y reducir el combustible", () => {
      vehiculo1.cambiarTipoConduccion(); // Estandar
      vehiculo1.avanzar(200);
      expect(vehiculo1.getKilometros()).toBe(200);
      expect(vehiculo1.getCombustible()).toBe(5); //
    });
  });

  describe("Vehiculo2", () => {
    let vehiculo2;

    beforeEach(() => {
      vehiculo2 = new Vehiculo(13);
    });

    test("vehículo 1 debería inicializar con combustible y kilometros en 0", () => {
      expect(vehiculo2.getCombustible()).toBe(13);
      expect(vehiculo2.getKilometros()).toBe(0);
    });

    test("vehículo 2 en conducion Deportiva ddebería lanzar un error si no hay suficiente combustible", () => {
      vehiculo2.cambiarTipoConduccion(); // Estandar
      vehiculo2.cambiarTipoConduccion(); // Deportiva
      expect(() => vehiculo2.avanzar(75)).toThrow(
        "Combustible insuficiente, solo pude recorrer 65 del total de 75 kilometros."
      );
      expect(vehiculo2.getKilometros()).toBe(65);
      expect(vehiculo2.getCombustible()).toBe(0); //
    });
  });
});
