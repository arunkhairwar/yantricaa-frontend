document.addEventListener("DOMContentLoaded", async function () {
  const select = document.getElementById("country");

  try {
    const url = "https://restcountries.com/v3.1/all?fields=name";
    const res = await fetch(url);
    const data = await res.json();

    // Sort countries alphabetically
    const countries = data
      .map((country) => country.name.common)
      .sort((a, b) => a.localeCompare(b));

    // Clear default "loading" option
    select.innerHTML = '<option value="">Select Country</option>';

    // Add countries to dropdown
    countries.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      select.appendChild(option);
    });
  } catch (error) {
    select.innerHTML = '<option value="">Failed to load countries</option>';
    console.error("Error loading countries:", error);
  }
});
