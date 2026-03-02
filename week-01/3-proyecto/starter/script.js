/* ============================================
PROYECTO SEMANA 01 - PLATAFORMA DE FREELANCERS
Archivo inicial para el aprendiz
============================================

INSTRUCCIONES:
1. Lee el README.md del proyecto para entender los requisitos
2. Adapta TODOS los TODOs a tu dominio asignado por el instructor
3. Usa SOLO características ES2023 aprendidas esta semana:
      - const/let (nunca var)
      - Template literals
      - Arrow functions
      - Destructuring
4. Prueba tu código frecuentemente en el navegador
5. Los comentarios deben estar en español
6. La nomenclatura técnica (variables, funciones) en inglés

NOTA IMPORTANTE:
Este archivo es una PLANTILLA GENÉRICA.
Debes adaptarlo completamente a tu dominio asignado.
NO copies la implementación de otro compañero.

============================================ */

// ============================================
// TODO 1: Crear el objeto de datos de tu dominio
// ============================================
// Crea un objeto constante con los datos de la entidad principal de tu dominio.
// Consulta con tu instructor cuál es tu dominio asignado.
//
// Tu objeto debe incluir:
// - Propiedades básicas (strings, numbers, booleans)
// - Un array de elementos relacionados (cada uno con name/level o similar)
// - Un objeto de estadísticas o contadores
//
// EJEMPLO (Planetario - NO es un dominio asignable):
// const exhibitData = {
//   name: 'Sistema Solar Interactivo',
//   description: 'Exhibición inmersiva del sistema solar',
//   code: 'EXH-001',
//   location: { room: 'Sala Principal', floor: 2 },
//   features: [
//     { name: 'Proyección 360°', level: 95 },
//     { name: 'Audio envolvente', level: 88 }
//   ],
//   stats: { visitors: 15000, rating: 4.8, duration: 45 }
// };

// PLATAFORMA DE FREELANCERS 
const entityData = {
  // Propiedades básicas (adapta a tu dominio)
  name: 'LancerWork',
  description: 'LancerWork es una plataforma digital que conecta talento independiente con personas y empresas que necesitan soluciones rápidas, confiables y de alta calidad. Nuestro objetivo es simplificar la forma en que se contratan servicios freelance, ofreciendo un espacio seguro donde los profesionales pueden mostrar sus habilidades y los clientes pueden encontrar al experto ideal para cada proyecto.',
  identifier: '131211',

  // Propiedad de contacto o ubicación (si aplica)
  contact: {
  email: 'LANCERWORK131211@CORREO.COM',
  phone: '32481709',
  location: 'Carrera 604 # 970-769'
  },

  // Array de elementos relacionados (adapta a tu dominio)
  // Ejemplos: skills, ingredients, services, features, amenities
  items: [
  { name: 'Desarrollo Web', level: 100, category: 'Programacion' },
  { name: 'Desarrollo Movil', level: 100, category: 'Programacion' },
  { name: 'Diseño', level: 100, category: 'Diseño' }
  ],

  // Array de enlaces o referencias (si aplica)
  links: [
    { platform: 'https://www.freelancer.com.co/', url: 'https://www.freelancer.com.co/', icon: '' }
  ],

  // Estadísticas o contadores (adapta a tu dominio)
  stats: {
  total: 8711,
  active: 140,
  rating: 5.0,
  completed: 8705  // renombra según tu dominio
  }
};

// ============================================
// TODO 2: Referencias a elementos del DOM
// ============================================
// Obtén referencias a todos los elementos del DOM necesarios usando const.
// Usa document.getElementById() o document.querySelector()
//
// Necesitarás referencias para:
// - Elementos de información principal (nombre, descripción, etc.)
// - Contenedor de la lista de items
// - Contenedor de estadísticas
// - Botones de interacción (tema, copiar, mostrar/ocultar)
// - Elementos de notificación (toast)

// TODO: Agrega tus referencias al DOM aquí
const entityName = document.getElementById("userName");
const entityDescription = document.getElementById("userBio");
const emailElement = document.getElementById("userEmail");
const phoneElement = document.getElementById("userPhone");
const copyBtn = document.getElementById("copyEmailBtn");
const skillsList = document.getElementById("skillsList");
const toggleItemsBtn = document.getElementById("toggleSkills");
const socialLinks = document.getElementById("socialLinks");
const statsContainer = document.getElementById("stats");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// ============================================
// TODO 3: Renderizar información básica
// ============================================
// Crea una arrow function llamada 'renderBasicInfo' que:
// 1. Use destructuring para extraer propiedades de entityData
// 2. Actualice los elementos del DOM con template literals
// 3. Muestre la información principal de tu entidad

const renderBasicInfo = () => {
  const { name, description, contact: { email, phone } } = entityData;

  // TODO: Actualiza los elementos del DOM usando template literals
  entityName.textContent = name;
  entityDescription.textContent = description;
  emailElement.textContent = email;
  phoneElement.textContent = phone;
};

// ============================================
// TODO 4: Renderizar lista de elementos
// ============================================
// Crea una arrow function llamada 'renderItems' que:
// 1. Reciba un parámetro 'showAll' (por defecto false)
// 2. Filtre los items para mostrar solo los primeros 4 si showAll es false
// 3. Use map() para crear el HTML de cada item
// 4. Use template literals para generar la estructura HTML
// 5. Actualice el innerHTML del contenedor de items
//
// Estructura HTML sugerida para cada item:
// <div class="item">
//   <div class="item-name">{name}</div>
//   <div class="item-level">
//     <span>{level}%</span>
//     <div class="level-bar">
//       <div class="level-fill" style="width: {level}%"></div>
//     </div>
//   </div>
// </div>

const renderItems = (showAll = true) => {
const { items } = entityData;

const itemsToShow = showAll ? items : items.slice(0, 4);

const itemsHtml = itemsToShow.map(item => {
const { name, level } = item;
    return `
      <div class="item">
        <div class="item-name">${name}</div>
        <div class="item-level">
          <span>${level}%</span>
          <div class="level-bar">
            <div class="level-fill" style="width: ${level}%"></div>
          </div>
        </div>
      </div>
    `;
}).join("");

  skillsList.innerHTML = itemsHtml;
};

// ============================================
// TODO 5: Renderizar enlaces/referencias
// ============================================
// Crea una arrow function llamada 'renderLinks' que:
// 1. Use destructuring para extraer el array de links de entityData
// 2. Use map() para crear HTML de cada enlace
// 3. Use template literals para generar etiquetas anchor
// 4. Actualice el contenedor de links

const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links.map(link => {
    const { platform, url } = link;
    return `<a href="${url}" target="_blank">${platform || "Sitio"}</a>`;
  }).join("");

  socialLinks.innerHTML = linksHtml;
};

// ============================================
// TODO 6: Calcular y renderizar estadísticas
// ============================================
// Crea una arrow function llamada 'renderStats' que:
// 1. Use destructuring para extraer el objeto stats de entityData
// 2. Crea un array de objetos con label y value para cada estadística
// 3. Use map() para generar HTML de cada estadística
// 4. Use template literals para la estructura HTML
// 5. Actualice el contenedor de stats
//
// Estructura HTML sugerida para cada stat:
// <div class="stat-item">
//   <span class="stat-value">{value}</span>
//   <span class="stat-label">{label}</span>
// </div>

const renderStats = () => {
  // TODO: Extrae las estadísticas de entityData
  const { stats } = entityData;

  // TODO: Crea array con labels descriptivos en español
  const statsArray = [
  { label: "Freelancers", value: stats.total },
  { label: "Activos", value: stats.active },
  { label: "Rating", value: stats.rating },
  { label: "Proyectos completados", value: stats.completed }
];

  // TODO: Genera el HTML usando map()
  const statsHtml = statsArray.map(stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join("");

  // TODO: Actualiza el contenedor
  statsContainer.innerHTML = statsHtml;
};

// ============================================
// TODO 7: Funcionalidad de cambio de tema
// ============================================
// Crea una arrow function llamada 'toggleTheme' que:
// 1. Obtenga el tema actual de document.documentElement.dataset.theme
// 2. Calcule el nuevo tema (si es 'dark' cambia a 'light' y viceversa)
// 3. Actualice document.documentElement.dataset.theme
// 4. Actualice el ícono del botón (🌙 para modo claro, ☀️ para modo oscuro)
// 5. (Opcional) Guarde la preferencia en localStorage
//
// También crea 'loadTheme' para:
// 1. Obtener el tema guardado de localStorage
// 2. Aplicarlo si existe

const toggleTheme = () => {
  // TODO: Implementa el cambio de tema
  const currentTheme = document.documentElement.dataset.theme;
  newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = newTheme;

  // TODO: Actualiza el ícono del botón
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

  // TODO: (Opcional) Guarda en localStorage
  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  // TODO: Carga el tema desde localStorage
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

// ============================================
// TODO 8: Funcionalidad de copiar información
// ============================================
// Crea una arrow function llamada 'copyInfo' que:
// 1. Construya un string con la información principal usando template literals
// 2. Use navigator.clipboard.writeText() para copiar al portapapeles
// 3. Muestre una notificación toast de éxito
// 4. Use la función auxiliar showToast

const copyInfo = () => {
  // TODO: Construye el texto a copiar
  const { name, description, contact } = entityData;
  const infoText = `
${name}
${description}
Email: ${contact.email}
Tel: ${contact.phone}
`.trim();

  // TODO: Copia al portapapeles
  navigator.clipboard.writeText(infoText);

  // TODO: Muestra notificación
  showToast('¡Información copiada al portapapeles!');
};

// Función auxiliar para mostrar notificaciones toast
const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ============================================
// TODO 9: Funcionalidad de mostrar/ocultar items
// ============================================
// Crea una arrow function llamada 'handleToggleItems' que:
// 1. Use una variable para rastrear si todos los items están visibles
// 2. Alterne la visibilidad
// 3. Llame a renderItems con el parámetro apropiado
// 4. Actualice el texto del botón ("Mostrar más" / "Mostrar menos")

let showingAllItems = false;

const handleToggleItems = () => {
  // TODO: Implementa la lógica de toggle
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);
  toggleItemsBtn.textContent =
    showingAllItems ? 'Mostrar menos' : 'Mostrar más';
};

// ============================================
// TODO 10: Event Listeners
// ============================================
// Agrega event listeners para:
// 1. Click en botón de tema -> toggleTheme
// 2. Click en botón de copiar -> copyInfo
// 3. Click en botón de toggle items -> handleToggleItems

// TODO: Agrega los event listeners aquí
themeToggle.addEventListener('click', toggleTheme);
copyBtn.addEventListener('click', copyInfo);
toggleItemsBtn.addEventListener('click', handleToggleItems);

// ============================================
// TODO 11: Inicializar la aplicación
// ============================================
// Crea una arrow function llamada 'init' que:
// 1. Llame a loadTheme()
// 2. Llame a renderBasicInfo()
// 3. Llame a renderItems()
// 4. Llame a renderLinks()
// 5. Llame a renderStats()
// 6. Muestre un mensaje de éxito en la consola

const init = () => {
  //TODO: Inicializa todos los componentes
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log('✅ Plataforma de freelancers iniciada');
};

// Ejecuta init cuando el DOM esté listo
init();

// ============================================
// CHECKLIST DE VERIFICACIÓN
// ============================================
// Después de completar todos los TODOs, verifica:
// ✓ La información de tu dominio se muestra correctamente
// ✓ Los items muestran niveles/porcentajes con barras
// ✓ Los enlaces/referencias funcionan y abren en nueva pestaña
// ✓ Las estadísticas se muestran correctamente
// ✓ El cambio de tema funciona (claro/oscuro)
// ✓ El botón de copiar funciona y muestra notificación
// ✓ El botón de mostrar más/menos funciona
// ✓ Todo usa sintaxis ES2023 (sin var, sin funciones tradicionales)
// ✓ Template literals para toda interpolación de strings
// ✓ Arrow functions en todo el código
// ✓ Destructuring usado donde corresponde
// ✓ Comentarios en español
// ✓ Nomenclatura técnica en inglés