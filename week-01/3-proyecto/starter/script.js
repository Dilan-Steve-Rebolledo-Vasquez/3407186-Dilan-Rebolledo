/* ============================================
   PROYECTO SEMANA 01 - FICHA DE FREELANCER
   Perfil real del estudiante
   ============================================ */

// ============================================
// DATOS DE LA ENTIDAD
// ============================================

const entityData = {
  name: 'Dilan Steve Rebolledo Vasquez',
  description: 'Joven técnico en programación de software con metas de aprender más.',
  identifier: 'FL-002',

  contact: {
    email: 'dilanrebolledob436@gmail.com',
    phone: '3208054034',
    location: 'Bogotá, Colombia'
  },

  items: [
    { name: 'HTML', level: 50, category: 'Frontend' },
    { name: 'CSS', level: 50, category: 'Frontend' },
    { name: 'SQL', level: 20, category: 'Base de Datos' }
  ],

  links: [
    { platform: 'GitHub', url: 'https://github.com/Dilan-Steve-Rebolledo-Vasquez', icon: '💻' },
    { platform: 'Portafolio', url: 'https://drive.google.com/drive/folders/131K0UQcN2UxIghcoSacU1f5QJl-1M4D5', icon: '🌐' }
  ],

  stats: {
    totalProjects: 2,
    completedProjects: 1,
    rating: 4,
    experienceYears: 2
  }
};

// ============================================
// REFERENCIAS AL DOM
// ============================================

const entityName = document.getElementById('userName');
const entityDescription = document.getElementById('userBio');
const entityLocation = document.getElementById('userLocation');
const entityEmail = document.getElementById('userEmail');
const entityPhone = document.getElementById('userPhone');

const itemsList = document.getElementById('skillsList');
const statsContainer = document.getElementById('stats');
const linksContainer = document.getElementById('socialLinks');

const themeToggle = document.getElementById('themeToggle');
const copyBtn = document.getElementById('copyEmailBtn');
const toggleItemsBtn = document.getElementById('toggleSkills');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ============================================
// RENDER INFORMACIÓN BÁSICA
// ============================================

const renderBasicInfo = () => {
  const {
    name,
    description,
    contact: { email, phone, location }
  } = entityData;

  entityName.textContent = name;
  entityDescription.textContent = description;
  entityLocation.textContent = `📍 ${location}`;
  entityEmail.textContent = email;
  entityPhone.textContent = phone;
};

// ============================================
// RENDER HABILIDADES
// ============================================

const renderItems = (showAll = false) => {
  const { items } = entityData;

  const itemsToShow = showAll ? items : items.slice(0, 4);

  const itemsHtml = itemsToShow.map(({ name, level, category }) => `
    <div class="item">
      <div class="item-name">${name} • ${category}</div>
      <div class="item-level">
        <span>${level}%</span>
        <div class="level-bar">
          <div class="level-fill" style="width: ${level}%"></div>
        </div>
      </div>
    </div>
  `).join('');

  itemsList.innerHTML = itemsHtml;
};

// ============================================
// RENDER LINKS
// ============================================

const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links.map(({ platform, url, icon }) => `
    <a href="${url}" target="_blank" class="social-link">
      ${icon} ${platform}
    </a>
  `).join('');

  linksContainer.innerHTML = linksHtml;
};

// ============================================
// RENDER ESTADÍSTICAS
// ============================================

const renderStats = () => {
  const { stats, items } = entityData;

  const averageSkill =
    Math.round(items.reduce((acc, item) => acc + item.level, 0) / items.length);

  const statsArray = [
    { label: 'Proyectos Totales', value: stats.totalProjects },
    { label: 'Completados', value: stats.completedProjects },
    { label: 'Rating', value: stats.rating },
    { label: 'Experiencia (años)', value: stats.experienceYears },
    { label: 'Promedio Habilidades', value: `${averageSkill}%` }
  ];

  const statsHtml = statsArray.map(({ label, value }) => `
    <div class="stat-item">
      <span class="stat-value">${value}</span>
      <span class="stat-label">${label}</span>
    </div>
  `).join('');

  statsContainer.innerHTML = statsHtml;
};

// ============================================
// CAMBIO DE TEMA
// ============================================

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

// ============================================
// COPIAR INFORMACIÓN
// ============================================

const copyInfo = () => {
  const { name, description, contact } = entityData;

  const infoText = `
${name}
${description}
Email: ${contact.email}
Teléfono: ${contact.phone}
  `.trim();

  navigator.clipboard.writeText(infoText);
  showToast('Información copiada al portapapeles');
};

// ============================================
// TOAST
// ============================================

const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ============================================
// MOSTRAR / OCULTAR HABILIDADES
// ============================================

let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);

  toggleItemsBtn.textContent =
    showingAllItems ? 'Mostrar menos' : 'Mostrar más';
};

// ============================================
// EVENT LISTENERS
// ============================================

themeToggle.addEventListener('click', toggleTheme);
copyBtn.addEventListener('click', copyInfo);
toggleItemsBtn.addEventListener('click', handleToggleItems);

// ============================================
// INIT
// ============================================

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log('✅ Aplicación inicializada correctamente');
};

init();
