const Vehiculo = require("./vehiculos");

const miVehiculo = new Vehiculo(25.0); // Crear un vehículo con 25 litros de combustible
console.log("Combustible inicial:", miVehiculo.getCombustible());
console.log("Velocidad máxima inicial:", miVehiculo.velocidadMaxima());

// Cambio el tipo de conducción
miVehiculo.cambiarTipoConduccion();

miVehiculo.avanzar(200.0); // Avanzar 200 km
console.log("Combustible después de avanzar:", miVehiculo.getCombustible());
console.log("Kilómetros recorridos:", miVehiculo.getKilometros());
