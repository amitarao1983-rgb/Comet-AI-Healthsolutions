document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const yearEl = document.getElementById("year");
  const orgInput = document.getElementById("orgName");
  const applyOrgBtn = document.getElementById("applyOrgName");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  const updateOrgName = () => {
    const name = (orgInput?.value || "").trim();
    const safeName = name || "Comet-AI Health Solutions LLP";

    document.querySelectorAll(".footer-org-name").forEach((el) => {
      el.textContent = safeName;
    });

    const subtitle = document.querySelector(".logo-subtitle");
    if (subtitle) {
      subtitle.textContent = safeName;
    }

    document.querySelectorAll(".org-dynamic").forEach((el) => {
      el.textContent = safeName || "your organization";
    });
  };

  if (applyOrgBtn) {
    applyOrgBtn.addEventListener("click", updateOrgName);
  }

  if (orgInput) {
    orgInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        updateOrgName();
      }
    });
  }

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("reveal-visible"));
  }
});

