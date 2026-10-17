(() => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const year = document.getElementById("year");
  const cvButton = document.getElementById("cvButton");
  const cvNote = document.getElementById("cvNote");

  year.textContent = new Date().getFullYear();

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // The CV PDF is included at this path. Keep the link enabled and let the browser download it.
  if (cvButton && cvNote) {
    cvButton.href = new URL("./assets/Ei-Thuzar-Nwe-CV.pdf", document.baseURI).href;
    cvButton.setAttribute("download", "Ei-Thuzar-Nwe-CV.pdf");
    cvNote.textContent = "Download my CV as a PDF.";
  }

  // Repository URLs are centralized here. Replace null values with real repository URLs.
  const projectRepositories = {
    smartStreetlight: null,
    smartAssistantBot: null,
    dataAnalysis: null,
    machineLearning: null
  };

  const repoLinks = document.querySelectorAll(".placeholder-link");
  const repoKeys = ["smartStreetlight", "smartAssistantBot", "dataAnalysis", "machineLearning"];
  repoLinks.forEach((link, index) => {
    const url = projectRepositories[repoKeys[index]];
    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "View repository ↗";
      link.removeAttribute("data-placeholder");
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      });
    }
  });
})();