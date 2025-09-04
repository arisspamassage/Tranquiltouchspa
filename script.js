// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== Mobile Menu Toggle =====
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar").querySelector("ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // ===== Hero Section Animation =====
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroContent.style.transition = "all 1s ease";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 200);
  }
});


  // Appointment form validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const date = document.getElementById("date")?.value;
      const time = document.getElementById("time")?.value;
      const service = document.getElementById("service")?.value;

      if (!name || !email || !phone || !date || !time || !service) {
        alert("Please fill out all required fields before booking.");
        return;
      }

      alert(
        `✅ Appointment booked!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nService: ${service}`
      );

      form.reset();
    });
  }

// script.js

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar").querySelector("ul");

  // Toggle navigation when clicking hamburger
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ====== Mobile Menu Toggle ======
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar").querySelector("ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // ====== Contact Form Handling ======
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page refresh

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
      }

      // Simple validation for email format
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      // Show success message
      alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);

      // Reset form fields
      contactForm.reset();
    });
  }
});
