const openButton = document.querySelector(".mob-menu-open");
const closeButton = document.querySelector(".mob-menu-close");
const menuContainer = document.querySelector(".mob-menu-container");

// Функция для открытия меню
function openMobileMenu() {
  menuContainer.classList.add("is-open");
}

// Функция для закрытия меню
function closeMobileMenu() {
  menuContainer.classList.remove("is-open");
}

// Назначаем обработчики событий
openButton.addEventListener("click", openMobileMenu);
closeButton.addEventListener("click", closeMobileMenu);
