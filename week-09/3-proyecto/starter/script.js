// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "Plataforma de Freelancer";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "Freelancers";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
  { id: 1, name: "Juan Pérez", rate: 1200000, active: true, skill: "Web", experience: "Senior" },
  { id: 2, name: "Ana Gómez", rate: 800000, active: true, skill: "UX", experience: "Mid", remote: true },
  { id: 3, name: "Carlos Ruiz", rate: 1500000, active: false, skill: "Backend", experience: "Senior" },
  { id: 4, name: "Laura Torres", rate: 1000000, active: true, skill: "Marketing", experience: "Senior", remote: false },
  { id: 5, name: "Pedro Díaz", rate: 500000, active: true, skill: "Soporte", experience: "Junior" },
  { id: 6, name: "Sofía Martínez", rate: 600000, active: true, skill: "QA", experience: "Mid" }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  // TODO: Usar Object.entries() + forEach para imprimir cada clave y valor
  // Alinear las claves con padEnd para formato de tabla
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });
};


/**
 * Calcula estadísticas numéricas del catálogo
 * @param {string} numericKey - El nombre de la propiedad numérica a analizar
 */
const calculateStats = (numericKey) => {
  // TODO: Usar Object.values() sobre el array de valores numéricos
  // Calcular: total, promedio, máximo, mínimo
  // Imprimir los resultados
  const values = items
  .map(item => item[numericKey])
  .filter(val => typeof val === "number");
  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values)
  console.log(`\n📊 Estadísticas (${numericKey})`);
  console.log(`Total: ${total.toLocaleString("es-CO")} COP`);
  console.log(`Promedio: ${avg.toLocaleString("es-CO")} COP`);
  console.log(`Máximo: ${max.toLocaleString("es-CO")} COP`);
  console.log(`Mínimo: ${min.toLocaleString("es-CO")} COP`);
};  


// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  // TODO: Mostrar propiedades básicas siempre
  // TODO: Usar Object.hasOwn() para verificar propiedades opcionales
  //       y mostrarlas solo si existen
  console.log(`Tarifa: ${item.rate.toLocaleString("es-CO")} COP`);
  console.log(`Activo: ${item.active}`);
  if (item.hasOwnProperty("remote")) {
  console.log(`Remoto: ${item.remote}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (let key in item) {
  // TODO: Usar for...in + Object.hasOwn() para recorrer propiedades propias
  // Imprimir cada clave y su valor
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  // TODO: Retornar un nuevo objeto usando spread + changes
  // El objeto original NO debe modificarse
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  // TODO: Usar filter() por la propiedad booleana de tu dominio
  return items.filter(item => item.active);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Usar find()
  return items.find(item => item.id === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  // TODO: Usar map() para agregar una propiedad calculada
  // Ejemplos: priceWithTax, totalPages, formattedDuration
  // Recuerda: item => ({ ...item, newProp: calculation })
    return items.map(item => ({
    ...item,
    yearlyIncome: item.rate * 12 // Calcula ingreso anual
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */
const sortByNumericProp = (ascending = true) => {
  // TODO: Usar [...items].sort() con un comparador
  // No mutar el array original
  return [...items].sort((a, b) =>
    ascending ? a.rate - b.rate : b.rate - a.rate
  );
};

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  // TODO: Mostrar cantidad total de elementos
  // TODO: Mostrar cuántos están disponibles/activos
  // TODO: Mostrar estadísticas de la propiedad numérica principal
  // TODO: Listar todos los elementos ordenados (usar sortByNumericProp)
  // TODO: Mostrar el elemento con el valor numérico más alto y más bajo

  console.log("=".repeat(50));
  console.log(`Total: ${items.length}`);
  console.log(`Activos: ${getAvailable().length}`);
 calculateStats("rate"); // Estadísticas de la tarifa
  const ascendingSorted = sortByNumericProp(true);   
  const descendingSorted = sortByNumericProp(false);
  ascendingSorted.forEach(item => {
    console.log(`${item.name} — ${item.rate.toLocaleString("es-CO")} COP`);
  });
  const highest = descendingSorted[0];
  const lowest = ascendingSorted[0];
  console.log(`Mayor tarifa: ${highest.name}`);
  console.log(`Menor tarifa: ${lowest.name}`);
  console.log("=".repeat(50));
};  

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

// TODO: Llamar a las funciones implementadas en este orden:
// 1. inspectItem(items[0])
// 2. calculateStats("nombreDeTuPropiedadNumerica")
// 3. items.forEach(showWithOptionals)
// 4. printAllProperties(items[0])
// 5. Demostrar updateItem con un ejemplo
// 6. Mostrar elementos disponibles con getAvailable()
// 7. Demostrar findById con un id válido y uno inexistente
// 8. Mostrar addCalculatedProp()
// 9. Mostrar sortByNumericProp()
// 10. buildReport()
inspectItem(items[0]);
calculateStats("rate");
items.forEach(item => showWithOptionals(item));
printAllProperties(items[0]);
const updated = updateItem(items[0], { rate: 1300000 });
console.log("\nActualizado:", updated);
console.log("\nDisponibles:");
getAvailable().forEach(item => {
  console.log(`${item.name} — ${item.rate.toLocaleString("es-CO")} COP`);
});
console.log("\nBuscar ID 1:", findById(1));
console.log("Buscar ID 99:", findById(99));
addCalculatedProp().forEach(item => {
  console.log(`${item.name} — Ingreso anual: ${item.yearlyIncome.toLocaleString("es-CO")} COP`);
  });
sortByNumericProp().forEach(item => {
  console.log(`${item.name} — ${item.rate.toLocaleString("es-CO")} COP`);
  });
buildReport();