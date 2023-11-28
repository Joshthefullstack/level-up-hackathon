const main = document.querySelector(".main__section");
const toggle = document.querySelector("#toggle");
const toggle_two = document.querySelector("#toggle-two");
const notificationSvg = document.querySelector('.notification_svg');
const profile = document.querySelector('.profile');


main.addEventListener("click", () => {
  if (toggle.checked) {
    toggle.checked = false;
    toggle_two.checked = false;
  }
  if (toggle_two.checked) {
    toggle_two.checked = false;
    toggle.checked = false;
    88;
  }
});

// Theme: Fireside Chat: Perspectives from Experts (doens't change)
// Track: Backend Engineering (changes with track)
// Speaker name: 
// Speaker jd/small detail:
// Speaker avatar:
// time: (doesn't change)
// date: (definitely changes)

toggle.addEventListener('mouseover', () => {
  notificationSvg.style.backgroundColor = '#656266';
});

toggle.addEventListener('mouseout', () => {
  notificationSvg.style.backgroundColor = '#303030';
});

toggle_two.addEventListener('mouseover', () => {
  profile.style.backgroundColor = "#656266"
});

toggle_two.addEventListener('mouseout', () => {
  profile.style.backgroundColor = '#303030';
});

const checkBoxOne = document.querySelector("#ac-1");
let checkBoxOneChecked = false;
const checkBoxTwo = document.querySelector("#ac-2");
let checkBoxTwoChecked = false;
const checkBoxThree = document.querySelector("#ac-3");
let checkBoxThreeChecked = false;
const checkBoxFour = document.querySelector("#ac-4");
let checkBoxFourChecked = false;
const checkBoxFive = document.querySelector("#ac-5");
let checkBoxFiveChecked = false;

const acSmall = document.querySelector(".ac-small");

const notLoadedSvg = document.querySelector(".not-loaded-svg");
const loadingSvg = document.querySelector(".loading-svg");
const loadedSvg = document.querySelector(".loaded-svg");
const notLoadedSvgTwo = document.querySelector(".not-loaded-svg-2");
const loadingSvgTwo = document.querySelector(".loading-svg-2");
const loadedSvgTwo = document.querySelector(".loaded-svg-2");
const notLoadedSvgThree = document.querySelector(".not-loaded-svg-3");
const loadingSvgThree = document.querySelector(".loading-svg-3");
const loadedSvgThree = document.querySelector(".loaded-svg-3");
const notLoadedSvgFour = document.querySelector(".not-loaded-svg-4");
const loadingSvgFour = document.querySelector(".loading-svg-4");
const loadedSvgFour = document.querySelector(".loaded-svg-4");
const notLoadedSvgFive = document.querySelector(".not-loaded-svg-5");
const loadingSvgFive = document.querySelector(".loading-svg-5");
const loadedSvgFive = document.querySelector(".loaded-svg-5");

const thirdHeaderText = document.querySelector('.third-header-text');
let numberOfCheckedBoxes = 0;
let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
thirdHeaderText.textContent = checkedBoxText;
const progressBar = document.querySelector('.progress-bar');

let progressBarWidth = 0;


checkBoxOne.addEventListener("click", () => {
  if (!checkBoxOneChecked) {
    notLoadedSvg.style.display = "none";
    loadingSvg.style.display = "block";
    loadingSvg.style.animation = "spin 4s linear";
    setTimeout(() => {
      loadingSvg.style.display = "none";
      loadedSvg.style.display = "block";
    }, 400);
    checkBoxOneChecked = true;
    numberOfCheckedBoxes++;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acSmall = document.querySelector('.ac-small');
    acSmall.style.display = 'flex';
    acSmall.style.transition = 'display 1s linear';
    progressBarWidth = progressBarWidth + 20;
    progressBar.style.width = `${progressBarWidth}px`;
  } else {
    console.log("not checked");
    notLoadedSvg.style.display = "block";
    loadedSvg.style.display = "none";
    loadingSvg.style.display = "none";
    checkBoxOneChecked = false;
    numberOfCheckedBoxes--;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    console.log(checkedBoxText);
    const acSmall = document.querySelector('.ac-small');
    acSmall.style.display = 'none';
    acSmall.style.transition = 'display 0.5s linear';
    progressBarWidth = progressBarWidth - 20;
    progressBar.style.width = `${progressBarWidth}px`;
  }
});

checkBoxTwo.addEventListener("click", () => {
  if (!checkBoxTwoChecked) {
    notLoadedSvgTwo.style.display = "none";
    loadingSvgTwo.style.display = "block";
    loadingSvgTwo.style.animation = "spin 4s linear";
    setTimeout(() => {
      loadingSvgTwo.style.display = "none";
      loadedSvgTwo.style.display = "block";
    }, 400);
    checkBoxTwoChecked = true;
    numberOfCheckedBoxes++;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acMedium = document.querySelector('.ac-medium');
    acMedium.style.display = 'flex';
    acMedium.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth + 20;
    progressBar.style.width = `${progressBarWidth}px`;
  } else {
    notLoadedSvgTwo.style.display = "block";
    loadedSvgTwo.style.display = "none";
    loadingSvgTwo.style.display = "none";
    checkBoxTwoChecked = false;
    numberOfCheckedBoxes--;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acMedium = document.querySelector('.ac-medium');
    acMedium.style.display = 'none';
    acMedium.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth - 20;
    progressBar.style.width = `${progressBarWidth}px`;
  }
});

checkBoxThree.addEventListener("click", () => {
  if (!checkBoxThreeChecked) {
    notLoadedSvgThree.style.display = "none";
    loadingSvgThree.style.display = "block";
    loadingSvgThree.style.animation = "spin 4s linear";
    setTimeout(() => {
      loadingSvgThree.style.display = "none";
      loadedSvgThree.style.display = "block";
    }, 400);
    checkBoxThreeChecked = true;
    numberOfCheckedBoxes++;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acLarge = document.querySelector('.ac-large');
    acLarge.style.display = 'flex';
    acLarge.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth + 20;
    progressBar.style.width = `${progressBarWidth}px`;
  } else {
    notLoadedSvgThree.style.display = "block";
    loadedSvgThree.style.display = "none";
    loadingSvgThree.style.display = "none";
    checkBoxThreeChecked = false;
    numberOfCheckedBoxes--;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acLarge = document.querySelector('.ac-large');
    acLarge.style.display = 'none';
    acLarge.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth - 20;
    progressBar.style.width = `${progressBarWidth}px`;
  }
});

checkBoxFour.addEventListener("click", () => {
  if (!checkBoxFourChecked) {
    notLoadedSvgFour.style.display = "none";
    loadingSvgFour.style.display = "block";
    loadingSvgFour.style.animation = "spin 4s linear";
    setTimeout(() => {
      loadingSvgFour.style.display = "none";
      loadedSvgFour.style.display = "block";
    }, 400);
    checkBoxFourChecked = true;
    numberOfCheckedBoxes++;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acLarger = document.querySelector('.ac-larger');
    acLarger.style.display = 'flex';
    acLarger.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth + 20;
    progressBar.style.width = `${progressBarWidth}px`;
  } else {
    notLoadedSvgFour.style.display = "block";
    loadedSvgFour.style.display = "none";
    loadingSvgFour.style.display = "none";
    checkBoxFourChecked = false;
    numberOfCheckedBoxes--;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acLargest = document.querySelector('.ac-larger');
    acLargest.style.display = 'none';
    acLargest.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth - 20;
    progressBar.style.width = `${progressBarWidth}px`;
  }
});

checkBoxFive.addEventListener("click", () => {
  if (!checkBoxFiveChecked) {
    notLoadedSvgFive.style.display = "none";
    loadingSvgFive.style.display = "block";
    loadingSvgFive.style.animation = "spin 4s linear";
    setTimeout(() => {
      loadingSvgFive.style.display = "none";
      loadedSvgFive.style.display = "block";
    }, 400);
    checkBoxFiveChecked = true;
    numberOfCheckedBoxes++;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acLargest = document.querySelector('.ac-largest');
    acLargest.style.display = 'flex';
    acLargest.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth + 20;
    progressBar.style.width = `${progressBarWidth}px`;
  } else {
    notLoadedSvgFive.style.display = "block";
    loadedSvgFive.style.display = "none";
    loadingSvgFive.style.display = "none";
    checkBoxFiveChecked = false;
    numberOfCheckedBoxes--;
    let checkedBoxText = `${numberOfCheckedBoxes}/5 completed`;
    thirdHeaderText.textContent = checkedBoxText;
    const acLargest = document.querySelector('.ac-largest');
    acLargest.style.display = 'none';
    acLargest.style.transition = 'display 1s ease-in-out';
    progressBarWidth = progressBarWidth - 20;
    progressBar.style.width = `${progressBarWidth}px`;
  }
});

const closeSvg = document.querySelector('.desktop-close-svg');
const mobileSvg = document.querySelector('.mobile-close-svg');

closeSvg.addEventListener('click', () => {
  const extendPlans = document.querySelector('.extend_plans');
  extendPlans.style.display = 'none'
})

mobileSvg.addEventListener('click', () => {
  const extendPlans = document.querySelector('.extend_plans');
  extendPlans.style.display = 'none'
})