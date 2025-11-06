  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // safety: if any required element is missing, exit and log helpful message
    if (!menuToggle) {
      console.warn("menuToggle element (#menu-toggle) not found.");
      return;
    }
    if (!sidebar) {
      console.warn("sidebar element (#sidebar) not found.");
      return;
    }
    if (!overlay) {
      console.warn("overlay element (#overlay) not found.");
      return;
    }

    // toggle open/close
    function openMenu() {
      sidebar.classList.add("open");
      overlay.classList.add("show");
      menuToggle.classList.add("active");
      // change icon to close (FontAwesome 'xmark' - replace if your FA version differs)
      menuToggle.innerHTML = '<i class="fas fa-xmark"></i>';
      // optional: prevent body scroll when open
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
      menuToggle.classList.remove("active");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = "";
    }

    menuToggle.addEventListener("click", () => {
      if (sidebar.classList.contains("open")) closeMenu();
      else openMenu();
    });

    overlay.addEventListener("click", closeMenu);

    // optional: close with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("open")) {
        closeMenu();
      }
    });
  });
