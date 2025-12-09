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
