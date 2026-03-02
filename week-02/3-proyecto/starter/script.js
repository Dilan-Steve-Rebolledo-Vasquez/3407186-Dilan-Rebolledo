/**
 * ============================================
 * PROYECTO SEMANA 02 - PLATAFORMA DE FREELANCERS
 * Archivo inicial para el aprendiz
 * ============================================
 *
 * INSTRUCCIONES:
 * 1. Lee el README.md del proyecto para entender los requisitos
 * 2. Adapta TODOS los TODOs a tu dominio asignado por el instructor
 * 3. Usa SOLO características ES2023 aprendidas esta semana:
 *    - Spread operator (...) para copiar arrays/objetos
 *    - Rest parameters (...args) en funciones
 *    - Default parameters
 *    - Array methods: map, filter, reduce, find
 *    - Object enhancements (shorthand, computed properties)
 * 4. NUNCA mutes el estado directamente - usa inmutabilidad
 * 5. Los comentarios deben estar en español
 * 6. La nomenclatura técnica (variables, funciones) en inglés
 *
 * NOTA IMPORTANTE:
 * Este archivo es una PLANTILLA GENÉRICA.
 * Debes adaptarlo completamente a tu dominio asignado.
 * NO copies la implementación de otro compañero.
 *
 * EJEMPLO DE REFERENCIA (NO es un dominio asignable):
 * Planetario - Gestión de cuerpos celestes
 *
 * ============================================
 */

// ============================================
// ESTADO GLOBAL
// ============================================

// Array que almacena todos los elementos de tu colección
let items = [];

// ID del elemento que se está editando (null si es nuevo)
let editingItemId = null;

// ============================================
// TODO 1: DEFINIR CATEGORÍAS DE TU DOMINIO
// ============================================
// Define las categorías específicas de tu dominio.
// Cada categoría debe tener un emoji representativo.
//
// EJEMPLO (Planetario - NO es un dominio asignable):
// const CATEGORIES = {
//   planet: { name: 'Planeta', emoji: '🪐' },
//   star: { name: 'Estrella', emoji: '⭐' },
//   asteroid: { name: 'Asteroide', emoji: '☄️' },
//   comet: { name: 'Cometa', emoji: '💫' },
//   moon: { name: 'Luna', emoji: '🌙' }
// };

const CATEGORIES = {
  web: { name: 'Desarrollo Web', emoji: '🌏' },
  mobile: { name: 'Desarrollo Movil', emoji: '📱' },
  desing: { name: 'Diseño', emoji: '🖌️' },
};

// Prioridades genéricas (adapta los nombres si es necesario)
const PRIORITIES = {
  high: { name: 'Alta', color: '#ef4444' },
  medium: { name: 'Media', color: '#f59e0b' },
  low: { name: 'Baja', color: '#22c55e' },
};

// ============================================
// TODO 2: PERSISTENCIA (LocalStorage)
// ============================================

/**
 * Carga los elementos desde LocalStorage
 * @returns {Array} Array de elementos guardados, o array vacío
 */
  // const loadItems = () => {
  // TODO: Implementa la carga desde localStorage
  // 1. Obtén el valor de localStorage con la key de tu dominio
  // 2. Si existe, usa JSON.parse() para convertirlo a array
  // 3. Si no existe, retorna array vacío []
  // 4. Usa el operador ?? para el valor por defecto
  //
  // EJEMPLO:
  // const stored = localStorage.getItem('celestialBodies');
  // return stored ? JSON.parse(stored) : [];
  // O más moderno:
  // return JSON.parse(localStorage.getItem('celestialBodies') ?? '[]');

const loadItems = () => {
  return JSON.parse(localStorage.getItem('freelancerItems') ?? '[]');
};

/**
 * Guarda los elementos en LocalStorage
 * @param {Array} items - Array de elementos a guardar
 */
  // const saveItems = itemsToSave => {
  // TODO: Implementa el guardado en localStorage
  // 1. Usa JSON.stringify() para convertir el array a string
  // 2. Guarda con localStorage.setItem()
  //
  // EJEMPLO:
  // localStorage.setItem('celestialBodies', JSON.stringify(itemsToSave));

const saveItems = itemsToSave => {
  localStorage.setItem('freelancerItems', JSON.stringify(itemsToSave));
};


// ============================================
// TODO 3: CRUD - CREAR ELEMENTO
// ============================================

/**
 * Crea un nuevo elemento con los datos proporcionados
 * @param {Object} itemData - Datos del nuevo elemento
 * @returns {Array} Nuevo array de elementos (sin mutar el original)
 */
const createItem = (itemData = {}) => {
  // TODO: Implementa la creación de un nuevo elemento
  // 1. Crea un objeto con las propiedades base:
  //    - id: Date.now()
  //    - createdAt: new Date().toISOString()
  //    - updatedAt: null
  //    - active: true (o el estado inicial de tu dominio)
  //
  // 2. Usa spread operator para combinar:
  //    - Valores por defecto (default parameters)
  //    - Los datos recibidos en itemData
  //
  // 3. Usa spread para crear nuevo array: [...items, newItem]
  //
  // 4. Guarda en localStorage
  //
  // 5. Retorna el nuevo array
  //
  // EJEMPLO (Planetario):
  // const newItem = {
  //   id: Date.now(),
  //   name: itemData.name ?? '',
  //   description: itemData.description ?? '',
  //   category: itemData.category ?? 'planet',
  //   priority: itemData.priority ?? 'medium',
  //   active: true,
  //   createdAt: new Date().toISOString(),
  //   updatedAt: null,
  //   // Propiedades específicas del dominio:
  //   magnitude: itemData.magnitude ?? 0,
  //   distance: itemData.distance ?? '',
  //   ...itemData
  // };
  // const newItems = [...items, newItem];
  // saveItems(newItems);
  // return newItems;
};

// ============================================
// TODO 4: CRUD - ACTUALIZAR ELEMENTO
// ============================================

/**
 * Actualiza un elemento existente
 * @param {Number} id - ID del elemento a actualizar
 * @param {Object} updates - Propiedades a actualizar
 * @returns {Array} Nuevo array con el elemento actualizado
 */
const updateItem = (id, updates) => {
  // TODO: Implementa la actualización usando map
  // 1. Usa map para iterar sobre el array
  // 2. Si item.id === id, combina con spread: { ...item, ...updates, updatedAt: new Date().toISOString() }
  // 3. Si no coincide, retorna el item sin cambios
  // 4. Guarda el nuevo array en localStorage
  // 5. Retorna el nuevo array
  //
  // EJEMPLO:
  // const updatedItems = items.map(item =>
  //   item.id === id
  //     ? { ...item, ...updates, updatedAt: new Date().toISOString() }
  //     : item
  // );
  // saveItems(updatedItems);
  // return updatedItems;
};

// ============================================
// TODO 5: CRUD - ELIMINAR ELEMENTO
// ============================================

/**
 * Elimina un elemento por su ID
 * @param {Number} id - ID del elemento a eliminar
 * @returns {Array} Nuevo array sin el elemento eliminado
 */
const deleteItem = id => {
  // TODO: Implementa la eliminación usando filter
  // 1. Usa filter para crear nuevo array excluyendo el elemento
  // 2. Guarda en localStorage
  // 3. Retorna el nuevo array
  //
  // EJEMPLO:
  // const filteredItems = items.filter(item => item.id !== id);
  // saveItems(filteredItems);
  // return filteredItems;
};

// ============================================
// TODO 6: CRUD - TOGGLE ESTADO ACTIVO
// ============================================

/**
 * Alterna el estado activo/inactivo de un elemento
 * @param {Number} id - ID del elemento
 * @returns {Array} Nuevo array con el estado actualizado
 */
const toggleItemActive = id => {
  // TODO: Implementa el toggle usando map
  // 1. Usa map para encontrar y actualizar el elemento
  // 2. Invierte el valor de 'active' con !item.active
  // 3. Actualiza updatedAt
  // 4. Guarda y retorna
  //
  // EJEMPLO:
  // const updatedItems = items.map(item =>
  //   item.id === id
  //     ? { ...item, active: !item.active, updatedAt: new Date().toISOString() }
  //     : item
  // );
  // saveItems(updatedItems);
  // return updatedItems;
};

/**
 * Elimina todos los elementos inactivos
 * @returns {Array} Nuevo array solo con elementos activos
 */
const clearInactive = () => {
  // TODO: Implementa usando filter
  // const activeItems = items.filter(item => item.active);
  // saveItems(activeItems);
  // return activeItems;
};

// ============================================
// TODO 7: FILTROS Y BÚSQUEDA
// ============================================

/**
 * Filtra elementos por estado (activo/inactivo)
 * @param {Array} itemsToFilter - Array de elementos
 * @param {String} status - 'all' | 'active' | 'inactive'
 * @returns {Array} Elementos filtrados
 */
const filterByStatus = (itemsToFilter, status = 'all') => {
  // TODO: Implementa el filtro por estado
  // - 'all': retorna todos
  // - 'active': filtra donde active === true
  // - 'inactive': filtra donde active === false
  //
  // EJEMPLO:
  // if (status === 'all') return itemsToFilter;
  // if (status === 'active') return itemsToFilter.filter(item => item.active);
  // if (status === 'inactive') return itemsToFilter.filter(item => !item.active);
  // return itemsToFilter;
};

/**
 * Filtra elementos por categoría
 * @param {Array} itemsToFilter - Array de elementos
 * @param {String} category - Categoría a filtrar o 'all'
 * @returns {Array} Elementos filtrados
 */
const filterByCategory = (itemsToFilter, category = 'all') => {
  // TODO: Implementa el filtro por categoría
  // if (category === 'all') return itemsToFilter;
  // return itemsToFilter.filter(item => item.category === category);
};

/**
 * Filtra elementos por prioridad
 * @param {Array} itemsToFilter - Array de elementos
 * @param {String} priority - Prioridad a filtrar o 'all'
 * @returns {Array} Elementos filtrados
 */
const filterByPriority = (itemsToFilter, priority = 'all') => {
  // TODO: Similar a filterByCategory
};

/**
 * Busca elementos por texto en nombre y descripción
 * @param {Array} itemsToFilter - Array de elementos
 * @param {String} query - Texto a buscar
 * @returns {Array} Elementos que coinciden
 */
const searchItems = (itemsToFilter, query) => {
  // TODO: Implementa la búsqueda
  // 1. Si query está vacío, retorna todos
  // 2. Convierte query a minúsculas
  // 3. Filtra donde name o description incluyan el query
  // 4. Usa .toLowerCase() para búsqueda case-insensitive
  //
  // EJEMPLO:
  // if (!query || query.trim() === '') return itemsToFilter;
  // const searchTerm = query.toLowerCase();
  // return itemsToFilter.filter(item =>
  //   item.name.toLowerCase().includes(searchTerm) ||
  //   (item.description ?? '').toLowerCase().includes(searchTerm)
  // );
};

/**
 * Aplica todos los filtros de forma encadenada
 * @param {Array} itemsToFilter - Array de elementos
 * @param {Object} filters - Objeto con todos los filtros
 * @returns {Array} Elementos filtrados
 */
const applyFilters = (itemsToFilter, filters = {}) => {
  // TODO: Implementa aplicación de filtros encadenada
  // Usa destructuring con default values para los filtros
  //
  // EJEMPLO:
  // const {
  //   status = 'all',
  //   category = 'all',
  //   priority = 'all',
  //   search = ''
  // } = filters;
  //
  // // Encadena los filtros
  // let result = filterByStatus(itemsToFilter, status);
  // result = filterByCategory(result, category);
  // result = filterByPriority(result, priority);
  // result = searchItems(result, search);
  // return result;
};

// ============================================
// TODO 8: ESTADÍSTICAS
// ============================================

/**
 * Calcula estadísticas generales de la colección
 * @param {Array} itemsToAnalyze - Array de elementos
 * @returns {Object} Objeto con estadísticas
 */
const getStats = (itemsToAnalyze = []) => {
  // TODO: Implementa el cálculo de estadísticas usando reduce
  // Retorna un objeto con:
  // - total: número total de elementos
  // - active: elementos activos
  // - inactive: elementos inactivos
  // - byCategory: objeto con conteo por categoría
  // - byPriority: objeto con conteo por prioridad
  //
  // EJEMPLO:
  // const total = itemsToAnalyze.length;
  // const active = itemsToAnalyze.filter(item => item.active).length;
  // const inactive = total - active;
  //
  // // Usa reduce para agrupar por categoría
  // const byCategory = itemsToAnalyze.reduce((acc, item) => {
  //   acc[item.category] = (acc[item.category] ?? 0) + 1;
  //   return acc;
  // }, {});
  //
  // // Usa reduce para agrupar por prioridad
  // const byPriority = itemsToAnalyze.reduce((acc, item) => {
  //   acc[item.priority] = (acc[item.priority] ?? 0) + 1;
  //   return acc;
  // }, {});
  //
  // return { total, active, inactive, byCategory, byPriority };
};

// ============================================
// TODO 9: RENDERIZADO - ELEMENTO INDIVIDUAL
// ============================================

/**
 * Obtiene el emoji de una categoría
 * @param {String} category - Clave de la categoría
 * @returns {String} Emoji de la categoría
 */
const getCategoryEmoji = category => {
  return CATEGORIES[category]?.emoji ?? '📌';
};

/**
 * Formatea una fecha ISO a formato legible
 * @param {String} dateString - Fecha en formato ISO
 * @returns {String} Fecha formateada
 */
const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Renderiza un elemento individual como HTML
 * @param {Object} item - Objeto del elemento
 * @returns {String} HTML del elemento
 */
const renderItem = item => {
  // TODO: Implementa el renderizado usando template literals
  // 1. Usa destructuring para extraer propiedades
  // 2. Usa template literals para el HTML
  // 3. Añade clases condicionales para estado y prioridad
  // 4. Incluye checkbox, información y botones de acción
  //
  // EJEMPLO:
  // const { id, name, description, category, priority, active, createdAt } = item;
  //
  // return `
  //   <div class="item ${active ? '' : 'inactive'} priority-${priority}" data-item-id="${id}">
  //     <input type="checkbox" class="item-checkbox" ${active ? 'checked' : ''}>
  //     <div class="item-content">
  //       <h3 class="item-name">${name}</h3>
  //       ${description ? `<p class="item-description">${description}</p>` : ''}
  //       <div class="item-meta">
  //         <span class="badge badge-category">${getCategoryEmoji(category)} ${CATEGORIES[category]?.name ?? category}</span>
  //         <span class="badge badge-priority priority-${priority}">${PRIORITIES[priority]?.name ?? priority}</span>
  //         <span class="item-date">📅 ${formatDate(createdAt)}</span>
  //       </div>
  //     </div>
  //     <div class="item-actions">
  //       <button class="btn-edit" title="Editar">✏️</button>
  //       <button class="btn-delete" title="Eliminar">🗑️</button>
  //     </div>
  //   </div>
  // `;
};

// ============================================
// TODO 10: RENDERIZADO - LISTA COMPLETA
// ============================================

/**
 * Renderiza la lista completa de elementos
 * @param {Array} itemsToRender - Array de elementos a renderizar
 */
const renderItems = itemsToRender => {
  const itemList = document.getElementById('item-list');
  const emptyState = document.getElementById('empty-state');

  // TODO: Implementa el renderizado de la lista
  // 1. Si no hay elementos, muestra el empty state
  // 2. Si hay elementos:
  //    - Usa map para convertir cada item a HTML con renderItem
  //    - Une con .join('')
  //    - Asigna a itemList.innerHTML
  //
  // EJEMPLO:
  // if (itemsToRender.length === 0) {
  //   itemList.innerHTML = '';
  //   emptyState.style.display = 'block';
  // } else {
  //   emptyState.style.display = 'none';
  //   itemList.innerHTML = itemsToRender.map(renderItem).join('');
  // }
};

/**
 * Renderiza las estadísticas en el DOM
 * @param {Object} stats - Objeto con estadísticas
 */
const renderStats = stats => {
  // TODO: Actualiza los elementos del DOM con las estadísticas
  // Usa template literals para mostrar los números
  //
  // EJEMPLO:
  // document.getElementById('stat-total').textContent = stats.total;
  // document.getElementById('stat-active').textContent = stats.active;
  // document.getElementById('stat-inactive').textContent = stats.inactive;
  //
  // // Renderiza estadísticas por categoría
  // const categoryStats = Object.entries(stats.byCategory)
  //   .map(([cat, count]) => `${getCategoryEmoji(cat)} ${CATEGORIES[cat]?.name ?? cat}: ${count}`)
  //   .join(' | ');
  // document.getElementById('stats-details').textContent = categoryStats;
};

// ============================================
// TODO 11: EVENT HANDLERS
// ============================================

/**
 * Maneja el envío del formulario (crear/editar)
 * @param {Event} e - Evento del formulario
 */
const handleFormSubmit = e => {
  e.preventDefault();

  // TODO: Obtén los valores del formulario
  // Adapta los campos a tu dominio
  //
  // EJEMPLO:
  // const name = document.getElementById('item-name').value.trim();
  // const description = document.getElementById('item-description').value.trim();
  // const category = document.getElementById('item-category').value;
  // const priority = document.getElementById('item-priority').value;
  // // Campos específicos del dominio:
  // const magnitude = document.getElementById('item-magnitude')?.value ?? '';

  // TODO: Valida que el nombre no esté vacío
  // if (!name) {
  //   alert('El nombre es obligatorio');
  //   return;
  // }

  // TODO: Crea el objeto con los datos
  // const itemData = { name, description, category, priority };

  // TODO: Si hay editingItemId, actualiza; si no, crea nuevo
  // if (editingItemId) {
  //   items = updateItem(editingItemId, itemData);
  // } else {
  //   items = createItem(itemData);
  // }

  // TODO: Resetea el formulario y re-renderiza
  // resetForm();
  // renderItems(applyCurrentFilters());
  // renderStats(getStats(items));
};

/**
 * Maneja el click en checkbox de un elemento
 * @param {Number} itemId - ID del elemento
 */
const handleItemToggle = itemId => {
  // TODO: Implementa el toggle
  // items = toggleItemActive(itemId);
  // renderItems(applyCurrentFilters());
  // renderStats(getStats(items));
};

/**
 * Maneja el click en botón editar
 * @param {Number} itemId - ID del elemento a editar
 */
const handleItemEdit = itemId => {
  // TODO: Implementa la edición
  // 1. Encuentra el elemento con find()
  // 2. Rellena el formulario con sus datos
  // 3. Cambia el título del formulario
  // 4. Cambia el botón submit
  // 5. Muestra el botón cancelar
  // 6. Guarda editingItemId
  //
  // EJEMPLO:
  // const itemToEdit = items.find(item => item.id === itemId);
  // if (!itemToEdit) return;
  //
  // document.getElementById('item-name').value = itemToEdit.name;
  // document.getElementById('item-description').value = itemToEdit.description ?? '';
  // document.getElementById('item-category').value = itemToEdit.category;
  // document.getElementById('item-priority').value = itemToEdit.priority;
  //
  // document.getElementById('form-title').textContent = '✏️ Editar Elemento';
  // document.getElementById('submit-btn').textContent = 'Actualizar';
  // document.getElementById('cancel-btn').style.display = 'inline-block';
  //
  // editingItemId = itemId;
};

/**
 * Maneja el click en botón eliminar
 * @param {Number} itemId - ID del elemento a eliminar
 */
const handleItemDelete = itemId => {
  // TODO: Implementa la eliminación con confirmación
  // if (!confirm('¿Estás seguro de que deseas eliminar este elemento?')) return;
  // items = deleteItem(itemId);
  // renderItems(applyCurrentFilters());
  // renderStats(getStats(items));
};

/**
 * Obtiene los filtros actuales del DOM
 * @returns {Object} Objeto con los valores de los filtros
 */
const getCurrentFilters = () => {
  // TODO: Retorna un objeto con los valores actuales de los filtros
  // return {
  //   status: document.getElementById('filter-status').value,
  //   category: document.getElementById('filter-category').value,
  //   priority: document.getElementById('filter-priority').value,
  //   search: document.getElementById('search-input').value
  // };
};

/**
 * Aplica los filtros actuales y retorna los elementos filtrados
 * @returns {Array} Elementos filtrados
 */
const applyCurrentFilters = () => {
  const filters = getCurrentFilters();
  return applyFilters(items, filters);
};

/**
 * Maneja cambios en los filtros
 */
const handleFilterChange = () => {
  // TODO: Aplica filtros y re-renderiza
  // const filteredItems = applyCurrentFilters();
  // renderItems(filteredItems);
};

/**
 * Resetea el formulario a su estado inicial
 */
const resetForm = () => {
  // TODO: Limpia el formulario
  // document.getElementById('item-form').reset();
  // document.getElementById('form-title').textContent = '➕ Nuevo Elemento';
  // document.getElementById('submit-btn').textContent = 'Crear';
  // document.getElementById('cancel-btn').style.display = 'none';
  // editingItemId = null;
};

// ============================================
// TODO 12: EVENT LISTENERS
// ============================================

/**
 * Adjunta todos los event listeners necesarios
 */
const attachEventListeners = () => {
  // TODO: Form submit
  // document.getElementById('item-form').addEventListener('submit', handleFormSubmit);

  // TODO: Cancel button
  // document.getElementById('cancel-btn').addEventListener('click', resetForm);

  // TODO: Filtros - cada cambio dispara handleFilterChange
  // document.getElementById('filter-status').addEventListener('change', handleFilterChange);
  // document.getElementById('filter-category').addEventListener('change', handleFilterChange);
  // document.getElementById('filter-priority').addEventListener('change', handleFilterChange);
  // document.getElementById('search-input').addEventListener('input', handleFilterChange);

  // TODO: Botón limpiar inactivos
  // document.getElementById('clear-inactive').addEventListener('click', () => {
  //   if (confirm('¿Eliminar todos los elementos inactivos?')) {
  //     items = clearInactive();
  //     renderItems(applyCurrentFilters());
  //     renderStats(getStats(items));
  //   }
  // });

  // TODO: Event delegation para la lista de elementos
  // document.getElementById('item-list').addEventListener('click', e => {
  //   const itemElement = e.target.closest('.item');
  //   if (!itemElement) return;
  //
  //   const itemId = parseInt(itemElement.dataset.itemId);
  //
  //   if (e.target.classList.contains('item-checkbox')) {
  //     handleItemToggle(itemId);
  //   } else if (e.target.classList.contains('btn-edit')) {
  //     handleItemEdit(itemId);
  //   } else if (e.target.classList.contains('btn-delete')) {
  //     handleItemDelete(itemId);
  //   }
  // });
};

// ============================================
// TODO 13: INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación
 */
const init = () => {
  // TODO: Implementa la inicialización
  // 1. Carga los elementos desde localStorage
  // 2. Renderiza la lista
  // 3. Renderiza las estadísticas
  // 4. Adjunta los event listeners
  // 5. Muestra mensaje de éxito en consola
  //
  // EJEMPLO:
  // items = loadItems();
  // renderItems(items);
  // renderStats(getStats(items));
  // attachEventListeners();
  // console.log('✅ Aplicación inicializada correctamente');
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// ============================================
// CHECKLIST DE VERIFICACIÓN
// ============================================
// Después de completar todos los TODOs, verifica:
//
// FUNCIONALIDAD:
// ✓ Puedo crear nuevos elementos
// ✓ Puedo editar elementos existentes
// ✓ Puedo eliminar elementos
// ✓ Puedo marcar como activo/inactivo
// ✓ Los filtros funcionan correctamente
// ✓ La búsqueda funciona en tiempo real
// ✓ Las estadísticas se actualizan
// ✓ Los datos persisten al recargar (localStorage)
//
// CÓDIGO:
// ✓ Uso spread operator para copiar arrays/objetos
// ✓ Uso array methods (map, filter, reduce, find)
// ✓ NUNCA muto el estado directamente
// ✓ Default parameters donde corresponde
// ✓ Destructuring para extraer propiedades
// ✓ Template literals para todo el HTML
// ✓ Comentarios en español
// ✓ Nomenclatura técnica en inglés
//
// DOMINIO:
// ✓ Adaptado completamente a mi dominio asignado
// ✓ Categorías específicas de mi dominio
// ✓ Propiedades adicionales relevantes
// ✓ Emojis y textos coherentes con el dominio
