// ============================================
// PROYECTO SEMANA 03: Calculadora de Plataforma de Freelancers
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus 
const PLATFORM_NAME = "Freelix";
const PROJECT_PAYMENT = 300000;
const PLATFORM_COMMISSION = 0.10;
const ACTIVE_FREELANCERS = 6;
const PROJECTS_COMPLETED = 8;
const MAX_PROJECTS_PER_FREELANCER = 3;

function formatoCOP(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    });
}

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones de la plataforma ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);

const totalRevenue = PROJECT_PAYMENT * PROJECTS_COMPLETED;
console.log("Ingresos generados por proyectos:", formatoCOP(totalRevenue));
const commissionEarned = totalRevenue * PLATFORM_COMMISSION;
console.log("Comisión de la plataforma:", formatoCOP(commissionEarned));
const freelancersTotal = totalRevenue - commissionEarned;
console.log("Ganancias totales de freelancers:", formatoCOP(freelancersTotal));
const averageFreelancerIncome = freelancersTotal / ACTIVE_FREELANCERS;
console.log("Promedio ganado por freelancer:", formatoCOP(averageFreelancerIncome));

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("\n=== Actualización de ganancias ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);
let freelancerBalance = 0;
freelancerBalance += 120000;
console.log("Después del primer proyecto:", formatoCOP(freelancerBalance));
freelancerBalance += 180000;
console.log("Después del segundo proyecto:", formatoCOP(freelancerBalance));
freelancerBalance *= 0.90; 
console.log("Después de comisión de plataforma:", formatoCOP(freelancerBalance));
// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("\n=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);

const MIN_PROJECTS_REQUIRED = 5;
const meetsRequirement = PROJECTS_COMPLETED === MIN_PROJECTS_REQUIRED;
console.log("¿Cumple mínimo de proyectos?", meetsRequirement);
const hasManyProjects = PROJECTS_COMPLETED > 5;
console.log("¿Hay muchos proyectos en la plataforma?", hasManyProjects);

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("\n=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);

const freelancerAvailable = true;
const paymentHigh = PROJECT_PAYMENT >= 250000;
const canTakeProject = freelancerAvailable && paymentHigh;
console.log("¿Freelancer puede aceptar proyecto?", canTakeProject);
const highPlatformActivity = ACTIVE_FREELANCERS > 5 || PROJECTS_COMPLETED > 10;
console.log("¿Alta actividad en la plataforma?", highPlatformActivity);
const platformClosed = !freelancerAvailable;
console.log("¿Plataforma sin freelancers disponibles?", platformClosed);
console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("\n=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("Freelancers activos:", ACTIVE_FREELANCERS);
console.log("Proyectos completados:", PROJECTS_COMPLETED);
console.log("Ingresos totales generados:", formatoCOP(totalRevenue));
console.log("Comisión plataforma:", formatoCOP(commissionEarned));
console.log("Ganancias totales de freelancers:", formatoCOP(freelancersTotal));
console.log("Promedio de ingreso por freelancer:", formatoCOP(averageFreelancerIncome));
console.log("Balance final freelancer ejemplo:", formatoCOP(freelancerBalance));
