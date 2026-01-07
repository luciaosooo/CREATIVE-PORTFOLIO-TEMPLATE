/**
 * ─────────────────────────────────────────────
 *  Main JavaScript
 * ─────────────────────────────────────────────
 *  Parallax effect and smooth navigation
 */

// Parallax effect for hero image
const parallaxImage = document.querySelector(".parallax-image");
const imageFrame = document.querySelector(".hero-image-frame");

if (parallaxImage && imageFrame) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const frameRect = imageFrame.getBoundingClientRect();
    const frameTop = frameRect.top + scrolled;
    const frameHeight = frameRect.height;

    // Only apply parallax when the image is in view
    if (scrolled < frameTop + frameHeight) {
      // Calculate parallax offset (moves down as you scroll)
      const offset = scrolled * 0.3;

      // Calculate scale (grows slightly as you scroll)
      const scale = 1 + scrolled * 0.0002;

      parallaxImage.style.transform = `translateY(${offset}px) scale(${scale})`;
    }
  });
}

// Smooth scroll for navigation
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
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      // Optional: unobserve after reveal for one-time animation
      // observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);

// Observe all elements with data-reveal attribute
document.querySelectorAll("[data-reveal]").forEach((el) => {
  observer.observe(el);
});

// ════════════════════════════════════════════
// 2. PROJECT FILTER SYSTEM
// ════════════════════════════════════════════

// Enhanced filter system with keyboard support
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

// Filter function
const filterProjects = (category) => {
  projectCards.forEach((card, index) => {
    const cardCategory = card.getAttribute("data-category");

    card.classList.remove("show");
    card.classList.add("hidden");

    if (category === "all" || cardCategory === category) {
      setTimeout(() => {
        card.classList.remove("hidden");
        card.classList.add("show");
      }, index * 50);
    }
  });
};

// Click handler
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filterValue = button.getAttribute("data-filter");
    filterProjects(filterValue);
  });

  // Keyboard handler (Enter, Space)
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      button.click();
    }
  });
});

// Initialize on load
window.addEventListener("DOMContentLoaded", () => {
  filterProjects("all");
  // Set first button as active
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add("active");
    filterButtons[0].setAttribute("aria-pressed", "true");
  }
});

// Tab navigation for filter buttons
filterButtons.forEach((button, index) => {
  button.addEventListener("keydown", (e) => {
    let nextButton = null;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextButton = filterButtons[index + 1] || filterButtons[0];
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextButton =
        filterButtons[index - 1] || filterButtons[filterButtons.length - 1];
    }

    if (nextButton) {
      nextButton.focus();
      nextButton.click();
    }
  });
});

// ════════════════════════════════════════════
// 3. SMOOTH SCROLL (Already in your code)
// ════════════════════════════════════════════

// This is already in your main.js, keeping for reference
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

// ════════════════════════════════════════════
// 4. ENHANCED PARALLAX (Optional enhancement)
// ════════════════════════════════════════════

// Your existing parallax code works great!
// This is just an alternative if you want to add parallax to project images

const addProjectParallax = () => {
  const projectImages = document.querySelectorAll(".project-image img");

  window.addEventListener("scroll", () => {
    projectImages.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        const scrolled = window.pageYOffset;
        const imgTop = rect.top + scrolled;
        const offset = (scrolled - imgTop) * 0.1; // Subtle parallax
        img.style.transform = `translateY(${offset}px)`;
      }
    });
  });
};

// Uncomment to enable project image parallax
// addProjectParallax();

// ════════════════════════════════════════════
// 5. PERFORMANCE: Debounce scroll events
// ════════════════════════════════════════════

function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
