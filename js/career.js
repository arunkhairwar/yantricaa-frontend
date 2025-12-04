document.addEventListener("DOMContentLoaded", () => {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const careerSection = document.querySelector(".career-section");
  const applySection = document.querySelector(".career-apply-section");

  // Hide form section initially
  applySection.style.display = "none";

  applyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".career-card");

      const title = btn.dataset.title;
      const experience = btn.dataset.experience;
      const skills = btn.dataset.skills;
      const location = btn.dataset.location;

      const descriptionList = card.querySelectorAll("ul li");
      const descriptionItems = [...descriptionList]
        .map((li) => `<li>${li.innerText}</li>`)
        .join("");

      // Fill Apply Section Values
      applySection.querySelector(
        ".job-title h2"
      ).innerHTML = `${title} at Dealintra <span>↗</span>`;

      applySection.querySelector(".job-tags").innerHTML = `
        <span>Experience: ${experience}</span>
        <span>Location: ${location}</span>
        <span>Joining: Immediate</span>
      `;

      applySection.querySelector(".job-description").innerHTML = `
        <p><strong>Key Skills:</strong> ${skills}</p>
        <p><strong>Description:</strong></p>
        <ul>${descriptionItems}</ul>
      `;

      // Show Form Section and Hide Cards
    //   careerSection.style.display = "none";
      applySection.style.display = "block";

      // Scroll to form smoothly
      applySection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
