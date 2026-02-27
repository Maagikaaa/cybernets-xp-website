/* WAIT UNTIL PAGE LOADS----------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {

  /* BOOT SCREEN ---------------------------------------------*/

  const boot = document.getElementById("bootScreen");

  if (boot) {
    setTimeout(function () {
      boot.style.opacity = "0";

      setTimeout(function () {
        boot.style.display = "none";
      }, 1000);
    }, 3000);
  }

  /* START MENU TOGGLE --------------------------------------------------*/

  const startBtn = document.getElementById("startBtn");
  const startMenu = document.getElementById("startMenu");

  if (startBtn && startMenu) {
    startBtn.addEventListener("click", function (e) {
      e.stopPropagation();

      if (startMenu.style.display === "flex") {
        startMenu.style.display = "none";
      } else {
        startMenu.style.display = "flex";
      }
    });

    document.addEventListener("click", function () {
      startMenu.style.display = "none";
    });
  }

  /* DRAGGABLE XP POPUP-------------------------------------------------------------- */

  const popup = document.querySelector(".xp-popup");
  const titleBar = document.querySelector(".xp-popup-titlebar");

  if (popup && titleBar) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titleBar.addEventListener("mousedown", function (e) {
      isDragging = true;
      offsetX = e.clientX - popup.offsetLeft;
      offsetY = e.clientY - popup.offsetTop;
      popup.style.transform = "none";
    });

    document.addEventListener("mousemove", function (e) {
      if (isDragging) {
        popup.style.left = e.clientX - offsetX + "px";
        popup.style.top = e.clientY - offsetY + "px";
      }
    });

    document.addEventListener("mouseup", function () {
      isDragging = false;
    });
  }

  /* CLOSE POPUP---------------------------------------------------------- */

  const closeBtn = document.querySelector(".xp-close-btn");

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // prevent conflicts with dragging
      popup.style.display = "none";
    });
  }
  /* X BUTTON FOR NON POP UP PGS-----*/
  
const closeBtn2 = document.querySelector(".close-btn");

if (closeBtn2) {
  closeBtn2.addEventListener("click", function () {
    window.location.href = "home.html";
  });
}

  /* REAL TIME CLOCK (ET) -------------------------------------------------- */

  function updateClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;

    const options = {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };

    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", options);

    clock.textContent = timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);

});

/* RESTART SYSTEM -----------------------------------------------------*/

function rebootSystem() {
  const boot = document.getElementById("bootScreen");

  if (boot) {
    boot.style.display = "flex";
    boot.style.opacity = "1";
  }

  setTimeout(function () {
    location.reload();
  }, 3000);
}
