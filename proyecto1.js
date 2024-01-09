// Definición de variables
let precioOriginal, porcentajeDescuento, iva, cantidad, pesoPaquete, destinoEnvio;
let descuentoProducto, precioConDescuento, impuestos, descuentoCantidad, costoEnvio, costoFinal;

// Lectura de datos
precioOriginal = prompt("Ingrese el precio original del producto:");
porcentajeDescuento = prompt("Ingrese el porcentaje de descuento aplicado:");
cantidad = prompt("Ingrese la cantidad de productos:");
pesoPaquete = prompt("Ingrese el peso del paquete en kg:");
destinoEnvio = prompt("Ingrese el destino del envío:");

// Cálculos
descuentoProducto = precioOriginal * (porcentajeDescuento / 100);
precioConDescuento = precioOriginal - descuentoProducto;
iva = precioConDescuento * 0.12; // 12% de IVA
descuentoCantidad = cantidad > 1 ? precioConDescuento * 0.05 : 0.0; // 5% de descuento por cantidad
costoEnvio = 10 + pesoPaquete * 2; // Costo fijo + $2 por kg

// Costo final
costoFinal = (precioConDescuento * cantidad) + iva + descuentoCantidad + costoEnvio;

// Mostrar resultados
console.log("Costo final del producto: $" + costoFinal.toFixed(2));
console.log("Desglose de costos:");
console.log("  - Descuento: $" + descuentoProducto.toFixed(2));
console.log("  - Impuestos (IVA): $" + iva.toFixed(2));
console.log("  - Descuento por cantidad: $" + descuentoCantidad.toFixed(2));
console.log("  - Costo de envío: $" + costoEnvio.toFixed(2));