// DOMs
const categoryButtons = document.getElementsByClassName("category-btn");

function initCategoryButtons() {
  if (categoryButtons.length !== 2) return;

  for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener("click", () => {
      categoryButtons[categoryButtons.length - i - 1].id = "";
      categoryButtons[i].id = "category-btn-selected";
    });
  }
}

function initViews() {
  initCategoryButtons();
}

initViews();
