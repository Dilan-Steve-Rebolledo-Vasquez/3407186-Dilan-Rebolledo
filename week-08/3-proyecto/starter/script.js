// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Plataforma de Freelancers"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "Freelancers";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

const items = [
  // TODO: Agrega al menos 5 objetos de tu dominio
  { id: 1, name: "Juan Pérez", rate: 1200000, projects: 10, active: true, skill: "Desarrollo Web", experience: "Senior" },
  { id: 2, name: "Ana Gómez", rate: 800000, projects: 5, active: true, skill: "Diseño UX", experience: "Mid" },
  { id: 3, name: "Carlos Ruiz", rate: 1500000, projects: 8, active: false, skill: "Backend", experience: "Senior" },
  { id: 4, name: "Laura Torres", rate: 1000000, projects: 12, active: true, skill: "Marketing", experience: "Senior" },
  { id: 5, name: "Pedro Díaz", rate: 500000, projects: 3, active: true, skill: "Soporte", experience: "Junior" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  items.push(newItem);
  // TODO: Usar push para agregar newItem al array items
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
  // TODO: Usar pop para eliminar y retornar el último elemento
  // Guardar el resultado en una variable y mostrar el nombre
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
  // TODO: Usar unshift para agregar priorityItem al inicio de items
  // console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado: ${removed[0].name}`);
  // TODO: Usar splice para eliminar 1 elemento en la posición index
  // Mostrar el nombre del elemento eliminado
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  // TODO: Usar filter para retornar solo los elementos con la propiedad
  // booleana en true (ajusta el nombre de la propiedad a tu dominio)
  return items.filter(item => item.active === true);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  // TODO: Usar find para retornar el primer elemento cuyo name coincida
  return items.find(item => item.name === name);
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  // TODO: Retornar un string con la información relevante del elemento
  // Usar template literals y mostrar las propiedades más importantes
  // Ejemplo (adaptar al dominio):
  // return `[${item.id}] ${item.name} — ...propiedades...`;
  return `[${item.id}] ${item.name} — Tarifa: ${item.rate.toLocaleString("es-CO")} COP | Proyectos: ${item.projects.toLocaleString("es-CO")} | Activo: ${item.active}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// TODO: Usar forEach para mostrar cada elemento con formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// TODO: Crear un nuevo elemento de tu dominio y usar addItem para agregarlo
// Ejemplo: addItem({ id: 6, name: "Nuevo Elemento", ..., active: true });
addItem({ id: 6, name: "Sofía Martínez", rate: 600000, projects: 6, active: true, skill: "QA", experience: "Mid" });

// TODO: Usar addPriorityItem para agregar un elemento prioritario
// Ejemplo: addPriorityItem({ id: 0, name: "Elemento Prioritario", ..., active: true });
addPriorityItem({ id: 0, name: "Admin Freelance", rate: 3000000, projects: 20, active: true, skill: "Gestión", experience: "Expert" });

// TODO: Usar removeByIndex para eliminar un elemento del medio
// Ejemplo: removeByIndex(2);
removeByIndex(2);

// TODO: Usar removeLastItem para quitar el último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
// TODO: Mostrar el inventario actualizado con forEach + formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});   

console.log("\n--- Búsqueda y filtrado ---\n");

// TODO: Usar find para buscar un elemento específico por nombre
// Mostrar el resultado
const found = findByName("Juan Pérez");
console.log(found ? formatItem(found) : "No encontrado");

// TODO: Usar getActiveItems() y mostrar cuántos están activos
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);


// TODO: Crear un snapshot inmutable con spread [...items]
// y agregar un elemento extra sin modificar items
const snapshot = [...items, { id: 99, name: "Extra", rate: 0, projects: 0, active: false }];

console.log("\n--- Transformación con map ---\n");

// TODO: Usar map para crear un array de solo los nombres de los elementos
// Mostrar los nombres
const names = items.map(item => item.name);
console.log(names);

// TODO: Usar map para crear un array con alguna propiedad numérica transformada
// (ej: precios con descuento, cantidades en otra unidad, etc.)
const transformed = items.map(item => ({
  ...item,
  rate: item.rate * 0.9
}));
transformed.forEach(item => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
// TODO: mostrar total de activos vs total general
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
