// Show only the selected section and hide others when a navbar link is clicked

document.addEventListener("DOMContentLoaded", function() {
  // List of section IDs to show/hide
  const sectionIds = [
    "about",
    "whyus",
    "services",
    "brands",
    "reviews",
    "contact",
    "testimonials"
  ];

  // Helper to show one section and hide others
  function showSection(id) {
    sectionIds.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        el.style.display = (secId === id) ? "block" : "none";
      }
    });
    // Special: testimonials is inside contact, so show/hide accordingly
    if (id === "contact") {
      const testimonials = document.getElementById("testimonials");
      if (testimonials) testimonials.style.display = "block";
    }
  }

  // Attach click listeners to navbar links
  document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href").replace("#", "");
      if (sectionIds.includes(targetId)) {
        e.preventDefault();
        showSection(targetId);
        // Optionally scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // By default, show all sections (or just the first)
  // Uncomment below to show only the first section on load:
  // showSection(sectionIds[0]);
});
