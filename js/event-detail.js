const detailBlock = document.querySelector(".detail__block");
const detailTitle = document.querySelector("h1");
const detailDate = detailBlock.querySelector(".detail__date");
const detailDescription = detailBlock.querySelector(".detail__description");
const detailStep = detailBlock.querySelector(".detail__steps");
const faqTitles = document.querySelectorAll(".faq__title");
const faqContent = document.querySelectorAll(".faq__content");
const faqsArrows = document.querySelectorAll(".faq__arrow");
const openModalButton = document.querySelector(".modal__btn");
const closeModalButton = document.getElementById("cancel");
const modal = document.getElementById("dialog");

// Metodo para el renderizado de los datos del evento
const renderEventDetailData = (eventData) => {
  detailTitle.innerHTML = eventData.title;
  detailDate.innerHTML = `
    <div class="detail__date--info">      
        <p>🗓️ ${eventData.time}</p>
        <p>📍 ${eventData.location}</p>
    </div>

    <div class="detail__users">
          <img src="./assets/user1.jpg" alt="Foto de perfil de un chico en la naturaleza sonriendo" />
          <img src="./assets/user2.jpg" alt="oto de perfil de una chica pelirroja sonriendo" />
          <p>+ 7 más</p>
    </div>
    `;
  detailDescription.innerHTML = `
        <h3>¿Que vamos a hacer?</h3>
        <p>${eventData.description}</p>
    `;
  detailStep.innerHTML = `
        <div class="detail__steps--step">
             <h4>¿Dónde quedamos?</h4>
            <p>${eventData.meetingpoint}</p>
        </div>
        <div class="detail__steps--step">
            <h4>¿Qué traer?</h4>
            <p>${eventData.toBring}</p>
        </div>
        <div class="detail__steps--step">
            <h4>Lo mejor de este plan:</h4>
            <p>${eventData.bestOfPlan}</p>
      </div>
    `;
};

// Renderizado de los datos del evento
const eventData = JSON.parse(localStorage.getItem("selectedEvent"));
renderEventDetailData(eventData);

// Evento para abrir el modal
openModalButton.addEventListener("click", () => {
  modal.showModal();
  document.querySelector("body").classList.toggle("no-scroll");
});

// Cierre del modal
closeModalButton.addEventListener("click", () => {
  modal.close();
  document.querySelector("body").classList.toggle("no-scroll");
});

// Evento para abrir y cerrar las tabs
faqTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    const isActive = faqContent[index].classList.contains("active");
    faqContent.forEach((div, i) => {
      div.classList.remove("active");
      faqsArrows[i].style.transform = "rotate(0deg)";
    });

    if (!isActive) {
      faqsArrows[index].style.transition = "transform .5s ease";
      faqsArrows[index].style.transform = "rotate(90deg)";
      faqContent[index].classList.toggle("active");
    }
  });
});
