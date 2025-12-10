document.addEventListener("DOMContentLoaded", function () {
  //   const countris = document.getElementById("countris");
  //   const enterprise = document.getElementById("enterprise");
  //   const partners = document.getElementById("partners");
  //   const users = document.getElementById("users");

  function animateCounterWithJS(elementId, startNumber, endNumber, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;

      let t = Math.min(elapsed / duration, 1);
      t = t * t * (3 - 2 * t); // smooth easing

      const currentValue = Math.floor(
        startNumber + (endNumber - startNumber) * t
      );

      element.textContent = currentValue;

      if (t < 1) requestAnimationFrame(updateCounter);
    }

    requestAnimationFrame(updateCounter);
  }

  window.onload = async () => {
    animateCounterWithJS("enterprise", 0, 3, 5000);
    animateCounterWithJS("partners", 0, 16, 5000);
    animateCounterWithJS("countris", 0, 6, 5000);
    animateCounterWithJS("users", 2800, 2900, 5000);
  };
});
