const eventsContainer = document.querySelector(".events");
const filtersButtons = document.querySelectorAll(".event__btn");
const modal = document.getElementById("dialog");
const closeModalButton = document.getElementById("cancel");
// Datos de los eventos
const eventsData = [
  {
    id: 1,
    title: "Taller de pintura en la playa",
    subtitle: "Exprésate con colores y nuevas amistades",
    description:
      "Descubre tu lado artístico con un taller relajado al aire libre, ideal para principiantes o apasionados del arte.",
    meetingpoint:
      "Playa de la Barceloneta, zona del espigón. Recibirás la ubicación exacta por email tras inscribirte.",
    toBring:
      "Algo para sentarte (manta, cojín, etc.). Bebida o snack para compartir (opcional). ¡Ganas de pasarlo bien!",
    bestOfPlan:
      "Gente auténtica con ganas de desconectar. Ambiente acogedor con mantas y luces. Dinámicas para romper el hielo. La oportunidad perfecta para hacer nuevos amigos.",
    time: "Martes 15 de Abril 2025 15:00",
    location: "Centro Cultural Las Artes",
    category: "creative",
    image: "../assets/paint-beach",
  },
  {
    id: 2,
    title: "Escapada de Senderismo con Yoga al Amanecer",
    subtitle: "Activa tu cuerpo y tu mente rodeado de naturaleza",
    description:
      "Una experiencia revitalizante combinando senderismo en plena naturaleza y una sesión de yoga guiada al amanecer.",
    meetingpoint:
      "Entrada del Parque Natural de Collserola. Recibirás coordenadas exactas tras inscribirte.",
    toBring:
      "Ropa cómoda, agua, esterilla de yoga y ganas de conectar con la naturaleza.",
    bestOfPlan:
      "Paisajes increíbles, conexión cuerpo-mente, energía positiva y grupo reducido para una experiencia íntima.",
    time: "Sábado 20 de Abril 2025 06:00",
    location: "Parque Natural de Collserola",
    category: "adventure",
    image: "../assets/yoga-sunset",
  },
  {
    id: 3,
    title: "Noche de cine + Cervezas",
    subtitle: "Cine, crítica y cervezas entre nuevos amigos",
    description:
      "Apúntate a una noche de cina seguida de un coloquio distendido con cervezas artesanas.",
    meetingpoint: "Bar cultural 'La Fábrica', sala del fondo.",
    toBring: "Curiosidad, ideas para compartir y ganas de conectar con gente.",
    bestOfPlan:
      "Ambiente relajado, nuevas perspectivas, buena conversación y cinéfilos con alma crítica.",
    time: "Viernes 12 de Abril 2025 19:30",
    location: "La Fábrica, Espacio Cultural",
    category: "cultural",
    image: "../assets/cinema",
  },
  {
    id: 4,
    title: "Customiza tu tote bag + Picoteo",
    subtitle:
      "Taller de pintura o bordado sobre bolsos de tela con vino y charlas.",
    description:
      "Una tarde relajada creando tu bolso de tela con música de fondo y buena compañía. No necesitas experiencia previa, solo ganas de expresarte y compartir un rato diferente.",
    meetingpoint: "Plaza del MACBA.",
    toBring:
      "Cámara o móvil con buena lente, ropa cómoda y algo para compartir en el picnic.",
    bestOfPlan:
      "Ambiente cero presión, momentos creativos compartidos, conversaciones espontáneas y nuevas conexiones sin pantallas de por medio.",
    time: "Domingo 21 de Abril 2025 17:00",
    location: "Centro de Barcelona",
    category: "creative",
    image: "../assets/painted-totebags",
  },
  {
    id: 5,
    title: "Escape Room Urbano en Equipos",
    subtitle: "Conoce gente resolviendo un misterio por la ciudad",
    description:
      "Juego de pistas por la ciudad con un toque de misterio y desafíos mentales, perfecto para romper el hielo.",
    meetingpoint:
      "Puerta principal del CCCB. Te enviaremos pistas por WhatsApp.",
    toBring: "Zapatos cómodos, móvil cargado y espíritu competitivo.",
    bestOfPlan:
      "Trabajo en equipo con desconocidos, mucha risa y sorpresas inesperadas por las calles de la ciudad.",
    time: "Sábado 13 de Abril 2025 16:00",
    location: "Barrio Gótico",
    category: "adventure",
    image: "../assets/scaperoom",
  },
  {
    id: 6,
    title: "Noche de Juegos de Mesa y Tapas Caseras",
    subtitle: "Diversión y conexión en una casa acogedora",
    description:
      "Encuentro social en un local con variedad de juegos, tapas compartidas y dinámicas para conocerse.",
    meetingpoint:
      "Te enviaremos la dirección exacta tras confirmar asistencia.",
    toBring: "Tu juego favorito (opcional), bebida o tapa y buena vibra.",
    bestOfPlan:
      "Ambiente cercano, ideal para los más tímidos, risas aseguradas y cero presión.",
    time: "Jueves 18 de Abril 2025 20:00",
    location: "Casa de un anfitrión local",
    category: "social",
    image: "../assets/social1",
  },
  {
    id: 7,
    title: "Club de Lectura + Brunch especial",
    subtitle: "Libros que remueven y conversaciones profundas",
    description:
      "Lecturas que provocan y remueven, con debates en cafés tranquilos entre gente con inquietudes.",
    meetingpoint: "Café 'Lento y Rico', mesa del fondo.",
    toBring: "El libro leído, mente abierta y respeto por otras opiniones.",
    bestOfPlan:
      "Intercambio de ideas, profundidad sin rigidez y posibilidad de nuevos amigos lectores.",
    time: "Miércoles 17 de Abril 2025 19:00",
    location: "Café Literario",
    category: "cultural",
    image: "../assets/reading-club",
  },
  {
    id: 8,
    title: "Bordado + Merienda",
    subtitle: "Agujas, hilos y una deliciosa merienda entre nuevos amigos",
    description:
      "Un taller relajado para aprender técnicas básicas de bordado contemporáneo sobre tote bags, camisetas o parches. Diseña, cose y disfruta de una tarde creativa en buena compañía con una merienda rica.",
    meetingpoint: "Taller compartido 'La Aguja Rebelde', sala 2.",
    toBring:
      "Una prenda que quieras personalizar o usa los materiales del taller.",
    bestOfPlan:
      "Ritmo tranquilo, charlas espontáneas, creatividad en grupo y un resultado que te llevas a casa. Perfecto para desconectar y conectar con gente creativa.",
    time: "Domingo 5 de Mayo 2025 17:00",
    location: "La Aguja Rebelde",
    category: "creative",
    image: "../assets/bordado",
  },
  {
    id: 9,
    title: "Ruta en Bici + Vermut",
    subtitle: "Pedalea con nuevos amigos y descubre un rincón oculto",
    description:
      "Un paseo en bicicleta a ritmo tranquilo por senderos urbanos y verdes. Terminamos en un bar de la zona con un vermut compartido, música y juegos al aire libre.",
    meetingpoint:
      "Puerta principal del Parc de la Ciutadella. Busca al grupo con cascos.",
    toBring:
      "Bicicleta propia o de alquiler, bebida, algo de comer para compartir.",
    bestOfPlan:
      "Actividad física suave, naturaleza en la ciudad, gente con buena onda y un final de plan que no querrás que acabe.",
    time: "Domingo 14 de Abril 2025 11:00",
    location: "Barcelona (ruta urbana + parque sorpresa)",
    category: "adventure",
    image: "../assets/bike",
  },
  {
    id: 10,
    title: "Ruta Secreta de pubs",
    subtitle: "Descubre el arte urbano más oculto y socialízalo",
    description:
      "Tour alternativo para descubrir pubs desconocidos y acabar en un bar con buena vibra.",
    meetingpoint: "Metro Poblenou, salida Rambla.",
    toBring:
      "Móvil o cámara, ropa cómoda y curiosidad por conocer partes de la ciudad desconocidas.",
    bestOfPlan:
      "Historias sorprendentes, buena música en cada esquina y conversaciones espontáneas en cada parada.",
    time: "Sábado 27 de Abril 2025 17:00",
    location: "Poblenou",
    category: "cultural",
    image: "../assets/pubs",
  },
  {
    id: 11,
    title: "Noche de Karaoke",
    subtitle: "Canta, ríe y suéltate con desconocidos",
    description:
      "Karaoke temático con dinámicas para perder la vergüenza y pasarlo bien desde la primera canción.",
    meetingpoint: "Pub underground 'El Sótano', sala 2.",
    toBring: "Tu canción favorita, garganta lista y buen humor.",
    bestOfPlan: "Cero juicio, aplausos garantizados, y un ambiente que une.",
    time: "Viernes 26 de Abril 2025 21:00",
    location: "El Sótano",
    category: "social",
    image: "../assets/karaoke",
  },
  {
    id: 12,
    title: "Taller de Arcilla + Merienda",
    subtitle: "Corta, pega y charla entre snacks y revistas",
    description:
      "Taller relajado donde crear arte en papel mientras compartes merienda con otros creativos.",
    meetingpoint: "Espacio Creativo 'Manos Libres'.",
    toBring: "Revistas viejas, tijeras, pegamento y ganas de expresarte.",
    bestOfPlan: "Cero presión artística, charlas espontáneas y ambiente slow.",
    time: "Domingo 28 de Abril 2025 16:00",
    location: "Manos Libres",
    category: "creative",
    image: "../assets/ceramic",
  },
  {
    id: 13,
    title: "Ruta en Kayak + Picnic al Atardecer",
    subtitle: "Aventura acuática y merienda con vistas",
    description:
      "Navega en grupo por la costa y termina compartiendo un picnic viendo la puesta de sol.",
    meetingpoint: "Puerto de Badalona, zona de embarque.",
    toBring: "Ropa de baño, toalla, protector solar y algo para el picnic.",
    bestOfPlan:
      "Conexión con la naturaleza, deporte y una puesta de sol épica en grupo.",
    time: "Sábado 4 de Mayo 2025 17:00",
    location: "Playa de Badalona",
    category: "adventure",
    image: "../assets/picnic",
  },
  {
    id: 14,
    title: "Fiesta de Intercambio de Idiomas",
    subtitle: "Aprende otro idioma en un entorno divertido",
    description:
      "Conecta con locales e internacionales a través de dinámicas lingüísticas divertidas.",
    meetingpoint: "Terraza del hostal MundoMundo.",
    toBring: "Tu mejor sonrisa y curiosidad por aprender otros idiomas.",
    bestOfPlan:
      "Cero clases aburridas, mucha risa, conexiones interculturales y potenciales planes futuros.",
    time: "Jueves 25 de Abril 2025 19:30",
    location: "Hostal MundoMundo",
    category: "social",
    image: "../assets/languages",
  },
  {
    id: 15,
    title: "Tour Gastronómico Multicultural",
    subtitle: "Sabores del mundo con nueva compañía",
    description:
      "Recorrido por restaurantes de distintas culturas con paradas para compartir impresiones y anécdotas.",
    meetingpoint: "Plaza Universitat, punto de encuentro gastronómico.",
    toBring: "Apetito, curiosidad culinaria y conversación fácil.",
    bestOfPlan:
      "Cocinas del mundo, conversaciones entre bocado y bocado, y gente abierta.",
    time: "Viernes 3 de Mayo 2025 20:00",
    location: "Centro multicultural",
    category: "social",
    image: "../assets/food-tour",
  },
];

// Filtros de los eventos
let selectedFilter;
renderEventsCards();

filtersButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    const filterType = button.dataset.category;
    filtersButtons.forEach((b) => b.classList.remove("selected"));

    if (selectedFilter === filterType) {
      selectedFilter = "all";
      filtersButtons[0].classList.add("selected");
    } else {
      filtersButtons.forEach((b) => b.classList.remove("selected"));
      selectedFilter = filterType;
      button.classList.add("selected");
      button.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    renderEventsCards();
  });
});

// Función para renderizar los eventos filtrados
function renderEventsCards() {
  const eventsFiltered =
    selectedFilter && selectedFilter !== "all"
      ? eventsData.filter((event) => selectedFilter === event.category)
      : eventsData;

  eventsContainer.innerHTML = "";
  eventsFiltered.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                 <picture>
                  <source srcset=${event.image}.webp type="image/webp" />
                  <img src=${event.image}.jpg loading="lazy" alt=${event.title} />
                </picture>
 
            <div class="card__body">
              <div class="card__title">
                    <h3>${event.title}</h3>
                    <p class="card__description">
                    ${event.subtitle}
                    </p>
              </div>
                <span class="card__line"></span>
                <div class="card__info">
                    <p>🗓️ ${event.time}</p>
                    <p>📍 ${event.location}</p>
                </div>
            </div>
            <div class="card__bottom">
                <a class="card__link detail__btn" data-id="${event.id}" href="event-detail.html">+ info</a>
                <a class="btn__primary modal__btn" href="#" title="Me apunto"
                    >¡Me apunto!
                    <svg width="20" height="20">
                      <use href="./assets/icons.svg#arrow-up-right"></use>
                    </svg>
                </a>
            </div>
        `;
    eventsContainer.appendChild(card);
  });

  // Cada boton abre el formulario de inscripción
  document.querySelectorAll(".modal__btn").forEach((button) => {
    button.addEventListener("click", () => {
      modal.showModal();
      document.querySelector("body").classList.toggle("no-scroll");
    });
  });

  // Cada boton de más información escucha el click y guarda la informacion del evento en localStorage
  document.querySelectorAll(".detail__btn").forEach((button) => {
    button.addEventListener("click", () => {
      const eventId = button.dataset.id;
      const selectedEvent = eventsData.find((event) => event.id == eventId);
      localStorage.setItem("selectedEvent", JSON.stringify(selectedEvent));
    });
  });
}

// Cierre del modal
closeModalButton.addEventListener("click", () => {
  modal.close();
  document.querySelector("body").classList.toggle("no-scroll");
});
