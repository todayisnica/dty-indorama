// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// FAQ toggle functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.closest(".faq-item");
    const isActive = faqItem.classList.contains("active");

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, observerOptions);

// Simplified function to add animation classes
function setupAnimations() {
  const elementsToAnimate = [
    { selector: ".section-title", animation: "fade-in" },
    { selector: ".product-card", animation: "slide-in-left", stagger: true },
    { selector: ".feature-card", animation: "scale-in", stagger: true },
    { selector: ".process-step", animation: "fade-in", stagger: true },
    { selector: ".advantage-card", animation: "scale-in", stagger: true },
    { selector: ".client-logo", animation: "fade-in", stagger: true },
    { selector: ".variant-item", animation: "scale-in", stagger: true },
    { selector: ".faq-item", animation: "fade-in", stagger: true },
    { selector: ".contact-item", animation: "slide-in-left", stagger: true },
    { selector: ".packaging-item", animation: "fade-in", stagger: true },
    { selector: ".testimonial-card", animation: "scale-in", stagger: true },
    { selector: ".product-detail", animation: "fade-in" },
    { selector: ".packaging-content", animation: "fade-in" },
    { selector: ".features-intro", animation: "fade-in" },
    { selector: ".process-intro", animation: "fade-in" },
    { selector: ".process-gallery img", animation: "scale-in", stagger: true },
    { selector: ".contact-form", animation: "slide-in-right" },
  ];

  elementsToAnimate.forEach(({ selector, animation, stagger }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add(animation);
      if (stagger) {
        element.style.animationDelay = `${index * 0.1}s`;
      }
      observer.observe(element);
    });
  });
}

document.addEventListener("DOMContentLoaded", setupAnimations);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
  }
});

// Form submission handling
document.querySelector(".contact-form form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(e.target);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  // Simulate form submission
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Mengirim...";
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = "Pesan Terkirim!";
    submitBtn.style.background = "#27ae60";

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = "#3498db";
      submitBtn.disabled = false;
      e.target.reset();
    }, 3000);
  }, 2000);
});

// Add pulse animation to CTA buttons
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("btn-pulse");
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("btn-pulse");
  });
});

// Lazy loading images with Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const image = container.querySelector("img");
          const placeholder = container.querySelector(".image-placeholder");
          const errorDiv = container.querySelector(".image-error");

          image.onload = () => {
            image.classList.add("loaded");
            if (placeholder) placeholder.classList.add("hidden");
          };

          image.onerror = () => {
            if (placeholder) placeholder.classList.add("hidden");
            if (errorDiv) errorDiv.classList.add("show");
          };

          // Start loading the image
          if (image.dataset.src) {
            image.src = image.dataset.src;
          } else if (image.src) {
            // If src is already there, just trigger load logic
            image.dispatchEvent(new Event("load"));
          }

          observer.unobserve(container);
        }
      });
    },
    { threshold: 0.1 }
  );

  imageContainers.forEach((container) => {
    imageObserver.observe(container);
  });
});
