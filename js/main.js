"use-strict";

/* ******************************************** */
/* Displaying mouse coordinates */
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

    const target = document.createElement("span");
    target.className = "target";

    const randomTargetZone = Math.floor(Math.random() * 16);
    targetsZone[randomTargetZone].append(target);

    const totalTargets = document.querySelector(".total-targets");
    totalTargets.textContent = +totalTargets.textContent + 1;

    setTimeout(() => target.remove(), 3000);
  }
}

/* ******************************************** */
/* Removing an element on mouse click */
/* ******************************************** */
{
  function removeElemByClick(event) {
    let target = event.target;

    if (target.classList.contains("target")) {
      target.remove();
      counter();
    }
  }

  const enemyField = document.querySelector(".enemy-field");
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
    if (timer) return;

    timer = setInterval(() => createRandomTarget(), 3000);

    const userScore = document.querySelector(".score");
    userScore.textContent = 0;

    const totalTargets = document.querySelector(".total-targets");
    totalTargets.textContent = 0;
  }

  function stop() {
    clearInterval(timer);
    timer = null;

    if (document.querySelector(".target")) {
      document.querySelector(".target").remove();
    }
  }
}
