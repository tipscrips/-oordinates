"use-strict";

/* ******************************************** */
/* Отображение координатов мыши */
/* ******************************************** */
{
  const xCoord = document.querySelector("#x-coord");
  const yCoord = document.querySelector("#y-coord");

  document.addEventListener("mousemove", function (event) {
    let mousX = event.clientX;
    let mousY = event.clientY;

    xCoord.innerHTML = mousX;
    yCoord.innerHTML = mousY;
  });
}

/* ******************************************** */
/* Random generation of target */
/* ******************************************** */

{
  function createRandomTarget() {
    const targetsZone = document.querySelectorAll(".target-zone");

    console.log("1");
    const target = document.createElement("span");
    target.className = "target";

    const randomTargetZone = Math.floor(Math.random() * 16);
    targetsZone[randomTargetZone].append(target);

    setTimeout(() => target.remove(), 3000);
  }
}

/* ******************************************** */
/* Removing an element on mouse click */
/* ******************************************** */
{
  function removeElemByClick(event) {
    console.log("Кликнули на элемент!");
    let target = document.elementFromPoint(event.clientX, event.clientY);

    if (target.classList.contains("target")) {
      target.remove();
      counter();
    }
  }

  let enemyField = document.querySelector(".enemy-field");
  enemyField.addEventListener("click", removeElemByClick);

  /* ******************************************** */
  /* Score */
  /* ******************************************** */

  function counter() {
    const userScore = document.querySelector(".score");
    userScore.textContent = +userScore.textContent + 1;
  }
}

/* ******************************************** */
/* Start/stop the game */
/* ******************************************** */

{
  let timer;

  function start() {
    timer = setInterval(() => createRandomTarget(), 3000);

    const userScore = document.querySelector(".score");
    userScore.textContent = 0;
  }

  function stop() {
    clearInterval(timer);
    document.querySelector(".target").remove();
  }
}
