const docEl = document.documentElement;
const body = document.body;
const loader = document.querySelector(".loader");
const yearEl = document.getElementById("year");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const themeToggle = document.querySelector(".theme-toggle");
const scrollProgress = document.querySelector(".scroll-progress");
const backToTop = document.querySelector(".back-to-top");
const cursor = document.querySelector(".custom-cursor");

const setTheme = (theme) => {
  docEl.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const initTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
    return;
  }
  setTheme("dark");
};

const initLoader = () => {
  window.addEventListener("load", () => {
    body.classList.add("is-loaded");
    if (loader) {
      loader.classList.add("hidden");
      setTimeout(() => loader.remove(), 600);
    }
  });

  window.addEventListener("beforeunload", () => {
    body.classList.remove("is-loaded");
  });
};

const initNavigation = () => {
  if (!navToggle || !navMenu) return;
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
};

const initRotatingText = () => {
  const element = document.querySelector(".rotating-text");
  if (!element) return;
  const items = JSON.parse(element.getAttribute("data-rotate") || "[]");
  if (!items.length) return;
  let index = 0;
  setInterval(() => {
    index = (index + 1) % items.length;
    element.classList.add("fade");
    setTimeout(() => {
      element.textContent = items[index];
      element.classList.remove("fade");
    }, 250);
  }, 2200);
};

const initTyping = () => {
  const element = document.querySelector(".typing");
  if (!element) return;
  const text = element.getAttribute("data-typing") || "";
  let index = 0;
  const tick = () => {
    element.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      setTimeout(tick, 45);
    }
  };
  tick();
};

const initScrollProgress = () => {
  if (!scrollProgress) return;
  const update = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    }
  };
  update();
  window.addEventListener("scroll", update);
};

const initBackToTop = () => {
  if (!backToTop) return;
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const initReveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  reveals.forEach((el) => observer.observe(el));
};

const initSkillBars = () => {
  const bars = document.querySelectorAll(".bar");
  if (!bars.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute("data-level") || "0";
          const fill = entry.target.querySelector("span");
          if (fill) {
            fill.style.width = `${level}%`;
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  bars.forEach((bar) => observer.observe(bar));
};

const animateCounter = (element) => {
  const target = Number(element.getAttribute("data-count")) || 0;
  let start = 0;
  const duration = 1200;
  const startTime = performance.now();

  const step = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const value = Math.floor(start + (target - start) * progress);
    element.textContent = value.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const initCounters = () => {
  const counters = document.querySelectorAll(".count");
  if (!counters.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  counters.forEach((counter) => observer.observe(counter));
};

const initCursor = () => {
  if (!cursor) return;
  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
};

const initThemeToggle = () => {
  if (!themeToggle) return;
  themeToggle.addEventListener("click", () => {
    const current = docEl.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });
};

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

initTheme();
initLoader();
initNavigation();
initRotatingText();
initTyping();
initScrollProgress();
initBackToTop();
initReveal();
initSkillBars();
initCounters();
initCursor();
initThemeToggle();
