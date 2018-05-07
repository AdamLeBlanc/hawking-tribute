document
  .querySelector(".hero > .hero-text > .page-down")
  .addEventListener("click", () => {
    location.hash = "";
    location.hash = `#timeline`;
  });
