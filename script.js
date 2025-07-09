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
    }
  });
}, observerOptions);

// Add animation classes to elements
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to section titles
  document.querySelectorAll(".section-title").forEach((title) => {
    title.classList.add("fade-in");
    observer.observe(title);
  });

  // Add slide-in animations to cards
  document.querySelectorAll(".product-card").forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
    observer.observe(card);
  });

  document.querySelectorAll(".feature-card").forEach((card, index) => {
    card.classList.add("scale-in");
    card.style.animationDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  document.querySelectorAll(".process-step").forEach((step, index) => {
    step.classList.add("fade-in");
    step.style.animationDelay = `${index * 0.1}s`;
    observer.observe(step);
  });

  document.querySelectorAll(".advantage-card").forEach((card, index) => {
    card.classList.add("scale-in");
    card.style.animationDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  document.querySelectorAll(".client-logo").forEach((logo, index) => {
    logo.classList.add("fade-in");
    logo.style.animationDelay = `${index * 0.1}s`;
    observer.observe(logo);
  });

  document.querySelectorAll(".variant-item").forEach((item, index) => {
    item.classList.add("scale-in");
    item.style.animationDelay = `${index * 0.05}s`;
    observer.observe(item);
  });

  document.querySelectorAll(".faq-item").forEach((item, index) => {
    item.classList.add("fade-in");
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  document.querySelectorAll(".contact-item").forEach((item, index) => {
    item.classList.add("slide-in-left");
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
  });

  document.querySelector(".contact-form").classList.add("slide-in-right");
  observer.observe(document.querySelector(".contact-form"));

  // Add animations for new sections
  document.querySelectorAll(".packaging-item").forEach((item, index) => {
    item.classList.add("fade-in");
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
  });

  document.querySelectorAll(".testimonial-card").forEach((card, index) => {
    card.classList.add("scale-in");
    card.style.animationDelay = `${index * 0.3}s`;
    observer.observe(card);
  });

  document.querySelector(".product-detail").classList.add("fade-in");
  observer.observe(document.querySelector(".product-detail"));

  document.querySelector(".packaging-content").classList.add("fade-in");
  observer.observe(document.querySelector(".packaging-content"));

  // Add animations for new image sections
  document.querySelector(".features-intro").classList.add("fade-in");
  observer.observe(document.querySelector(".features-intro"));

  document.querySelector(".process-intro").classList.add("fade-in");
  observer.observe(document.querySelector(".process-intro"));

  document.querySelectorAll(".process-gallery img").forEach((img, index) => {
    img.classList.add("scale-in");
    img.style.animationDelay = `${index * 0.3}s`;
    observer.observe(img);
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  if (hero && heroContent && heroImage) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

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

// Hero image animation enhancement
function enhanceHeroImage() {
  const heroImg = document.querySelector(".hero-img");
  if (heroImg) {
    let mouseX = 0;
    let mouseY = 0;
    let imgX = 0;
    let imgY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    });

    function animateImage() {
      imgX += (mouseX * 20 - imgX) * 0.05;
      imgY += (mouseY * 20 - imgY) * 0.05;

      heroImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
      requestAnimationFrame(animateImage);
    }

    animateImage();
  }
}

// Initialize hero image enhancement
enhanceHeroImage();

// Add pulse animation to CTA buttons
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("btn-pulse");
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("btn-pulse");
  });
});

// Counter animation for statistics (if needed)
function animateCounter(element, start, end, duration) {
  let startTime = null;

  function animate(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Smooth reveal animation for sections
function revealSection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}

const revealObserver = new IntersectionObserver(revealSection, {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("section-hidden");
  revealObserver.observe(section);
});

// Add CSS class for section reveal
const style = document.createElement("style");
style.textContent = `
    .section-hidden {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    .section-hidden.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Particle effect for hero section
function createParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const particlesContainer = document.createElement("div");
  particlesContainer.style.position = "absolute";
  particlesContainer.style.top = "0";
  particlesContainer.style.left = "0";
  particlesContainer.style.width = "100%";
  particlesContainer.style.height = "100%";
  particlesContainer.style.pointerEvents = "none";
  particlesContainer.style.zIndex = "1";

  hero.appendChild(particlesContainer);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.background = "rgba(255, 255, 255, 0.3)";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      3 + Math.random() * 4
    }s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// Smooth scrolling with offset for fixed navbar
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const sectionTop = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}

// Update navigation links to use custom scroll function
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection(this.getAttribute("href"));
  });
});

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Add active class styles
const activeStyle = document.createElement("style");
activeStyle.textContent = `
    .nav-link.active {
        color: #3498db !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(activeStyle);

// Lightbox functionality for images
function createLightbox() {
  // Create lightbox HTML
  const lightboxHTML = `
        <div id="lightbox" class="lightbox">
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img id="lightbox-img" src="" alt="">
                <div class="lightbox-caption"></div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", lightboxHTML);

  // Add lightbox CSS
  const lightboxCSS = `
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lightbox.active {
            display: flex;
            opacity: 1;
            justify-content: center;
            align-items: center;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .lightbox-close {
            position: absolute;
            top: -50px;
            right: 0;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            z-index: 2001;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .lightbox-close:hover {
            background: rgba(0, 0, 0, 0.8);
        }
        
        #lightbox-img {
            max-width: 100%;
            max-height: 100%;
            border-radius: 10px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }
        
        .lightbox-caption {
            color: white;
            margin-top: 1rem;
            text-align: center;
            font-size: 1.1rem;
        }
    `;

  const style = document.createElement("style");
  style.textContent = lightboxCSS;
  document.head.appendChild(style);

  // Add click handlers to images
  const clickableImages = document.querySelectorAll(
    ".hero-img, .product-image img, .features-image img, .process-main-img, .process-gallery img, .packaging-image img"
  );

  clickableImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  // Lightbox controls
  const lightbox = document.getElementById("lightbox");
  const lightboxClose = document.querySelector(".lightbox-close");

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");

  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxCaption.textContent = alt;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Initialize lightbox when page loads
document.addEventListener("DOMContentLoaded", () => {
  createLightbox();
});

// Image lazy loading
function initLazyLoading() {
  const images = document.querySelectorAll("img[src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = "0";
        img.style.transition = "opacity 0.5s ease";

        img.onload = () => {
          img.style.opacity = "1";
        };

        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });
}

// Image loading enhancement with retry mechanism
function initImageLoading() {
  const images = document.querySelectorAll("img[src]");

  images.forEach((img) => {
    // Add loading attribute for modern browsers
    img.setAttribute("loading", "lazy");

    // Track retry attempts
    let retryCount = 0;
    const maxRetries = 3;

    // Function to handle image loading
    function loadImage() {
      const imageContainer = img.closest(".image-container");
      const placeholder = imageContainer?.querySelector(".image-placeholder");
      const errorDiv = imageContainer?.querySelector(".image-error");

      img.onload = function () {
        // Hide placeholder when image loads
        if (placeholder) {
          placeholder.style.display = "none";
        }
        if (errorDiv) {
          errorDiv.style.display = "none";
        }
        img.style.display = "block";

        // Add loaded class for animations
        img.classList.add("loaded");
      };

      img.onerror = function () {
        retryCount++;

        if (retryCount < maxRetries) {
          // Retry loading after a delay
          setTimeout(() => {
            img.src = img.src + "?retry=" + retryCount;
          }, 1000 * retryCount);
        } else {
          // Max retries reached, show error
          if (placeholder) {
            placeholder.style.display = "none";
          }
          if (errorDiv) {
            errorDiv.style.display = "flex";
            // Add retry button to error message
            if (!errorDiv.querySelector(".retry-btn")) {
              const retryBtn = document.createElement("button");
              retryBtn.className = "retry-btn";
              retryBtn.innerHTML = '<i class="fas fa-redo"></i> Coba Lagi';
              retryBtn.style.cssText = `
                margin-top: 10px;
                padding: 8px 16px;
                background: #007bff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.8rem;
                transition: background 0.3s ease;
              `;
              retryBtn.onmouseover = () =>
                (retryBtn.style.background = "#0056b3");
              retryBtn.onmouseout = () =>
                (retryBtn.style.background = "#007bff");
              retryBtn.onclick = () => {
                retryCount = 0;
                errorDiv.style.display = "none";
                if (placeholder) {
                  placeholder.style.display = "block";
                }
                loadImage();
              };
              errorDiv.appendChild(retryBtn);
            }
          }
          img.style.display = "none";
        }
      };
    }

    // Start loading process
    loadImage();
  });
}

// Preload critical images
function preloadCriticalImages() {
  const criticalImages = [
    "images/image.png",
    "images/image2.jpg",
    "images/image4.jpg",
  ];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize image loading on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  preloadCriticalImages();
  initImageLoading();
});

// Initialize lazy loading
initLazyLoading();

// Add network status monitoring
window.addEventListener("online", function () {
  console.log("Network connection restored");
  // Retry loading failed images
  const errorImages = document.querySelectorAll('.image-error[style*="flex"]');
  errorImages.forEach((errorDiv) => {
    const retryBtn = errorDiv.querySelector(".retry-btn");
    if (retryBtn) {
      retryBtn.click();
    }
  });
});

window.addEventListener("offline", function () {
  console.log("Network connection lost");
});
