// ==========================================================================
// 1. Cozy Brand Typing Taglines
// ==========================================================================
const words = [
  "small businesses ☕",
  "cozy cafes 🥐",
  "local bookstores 📚",
  "pottery studios 🏺",
  "creative freelancers 🎨"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterText = document.getElementById("typewriterText");

function typeEffect() {
  if (!typewriterText) return;
  
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typewriterText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typingSpeed = 120;
  if (isDeleting) {
    typingSpeed = 50;
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// ==========================================================================
// 2. Light & Dark Mode Toggle (with Sleepy Mascot state)
// ==========================================================================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const catEyesOpen = document.querySelector(".cat-eyes");
const catEyesClosed = document.querySelector(".cat-eyes-closed");

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  setMascotSleeping(true);
} else {
  body.classList.add("light-theme");
  body.classList.remove("dark-theme");
  setMascotSleeping(false);
}

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
    setMascotSleeping(false);
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    setMascotSleeping(true);
  }
});

function setMascotSleeping(isSleeping) {
  if (!catEyesOpen || !catEyesClosed) return;
  if (isSleeping) {
    catEyesOpen.style.display = "none";
    catEyesClosed.style.display = "block";
  } else {
    catEyesOpen.style.display = "block";
    catEyesClosed.style.display = "none";
  }
}

// ==========================================================================
// 3. Scroll Reveal Animations & Dynamic Paw Trail
// ==========================================================================
const scrollElements = document.querySelectorAll(".scroll-anim");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add("visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
  triggerPawPrintOnScroll();
});

// Dynamic Paw Trail
const pawTrailContainer = document.getElementById("pawTrail");
let lastPawY = 0;
let pawSide = true;

function triggerPawPrintOnScroll() {
  if (!pawTrailContainer) return;
  
  const currentScrollY = window.scrollY;
  const scrollDistance = Math.abs(currentScrollY - lastPawY);
  
  if (scrollDistance > 180) {
    createPawPrint(window.innerWidth / 2 + (pawSide ? 140 : -140), currentScrollY + 200);
    lastPawY = currentScrollY;
    pawSide = !pawSide;
  }
}

function createPawPrint(x, y) {
  const paw = document.createElement("div");
  paw.className = "paw-print";
  paw.style.left = `${x}px`;
  paw.style.top = `${y}px`;
  
  const rot = pawSide ? 25 : -25;
  paw.style.transform = `scale(0.8) rotate(${rot}deg)`;
  
  paw.innerHTML = `
    <svg viewBox="0 0 30 30" width="100%" height="100%" fill="currentColor">
      <path d="M15,14 C11,14 8,16 8,19 C8,22 11,24 15,24 C19,24 22,22 22,19 C22,16 19,14 15,14 Z" />
      <ellipse cx="6" cy="11" rx="3.5" ry="5.5" transform="rotate(-15 6 11)" />
      <ellipse cx="11.5" cy="7" rx="3.5" ry="6" />
      <ellipse cx="18.5" cy="7" rx="3.5" ry="6" />
      <ellipse cx="24" cy="11" rx="3.5" ry="5.5" transform="rotate(15 24 11)" />
    </svg>
  `;
  
  pawTrailContainer.appendChild(paw);
  
  setTimeout(() => {
    paw.classList.add("visible");
  }, 50);
  
  setTimeout(() => {
    paw.style.opacity = "0";
    setTimeout(() => {
      paw.remove();
    }, 1200);
  }, 3500);
}

// ==========================================================================
// 4. PORTFOLIO WEBSITES CONFIGURATION & SEAMLESS AUTO-SCROLL LOOP
// ==========================================================================
// ⚙️ HOW TO ADD YOUR WEBSITES:
// 1. Add your website configuration objects inside the "builtSites" array below.
// 2. To start fresh and empty, simply empty the array: const builtSites = [];
// 
// Every website object requires:
// - name: Friendly business name (e.g. "The Flour Shop Cafe")
// - type: Business category tag (e.g. "Cafe", "Boutique", "Artisan")
// - url: Full URL address of the live page (e.g. "https://example.com")
// - desc: Short description of the custom build.
// 
// Live homepage screenshots are automatically retrieved via thum.io screenshot CDN!
// Clicking on a portfolio card redirects visitors to the URL in a new tab.
// ==========================================================================

const builtSites = [
  {
    name: "The Flour Shop Cafe 🥖",
    type: "Cafe",
    url: "https://theflourshop.net",
    desc: "A rustic artisanal bakery site featuring custom interactive menu grids, social reservation hooks, and dynamic maps."
  },
  {
    name: "Whisker & Wild Florist 🌸",
    type: "Boutique",
    url: "https://whiskerandwild.com",
    desc: "Stunning portfolio showcase website for custom floral designers, complete with direct-to-WhatsApp order triggers."
  },
  {
    name: "Boundless Books & Cats 📚",
    type: "Bookstore",
    url: "https://boundlessbooks.com",
    desc: "Cozy independent bookstore site featuring cursive headings, search bars, and bookstore assistant recommendations."
  }
];

const portfolioSlider = document.getElementById("portfolioSlider");
const emptyStateCard = document.getElementById("emptyStateCard");

let autoScrollFrame;
let isHovering = false;
let scrollPosition = 0;

function startAutoScroll() {
  if (builtSites.length === 0 || !portfolioSlider) return;
  
  // Pause any existing loop frames
  stopAutoScroll();
  
  const scrollSpeed = 0.5; // Pixels per frame (lower is slower/smoother)
  
  function scrollStep() {
    if (!isHovering) {
      scrollPosition += scrollSpeed;
      portfolioSlider.scrollLeft = scrollPosition;
      
      // When we've scrolled past the first set of original elements (half of scrollWidth),
      // instantly reset to 0 to make the looping feel continuous and infinite.
      const halfWidth = portfolioSlider.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
        portfolioSlider.scrollLeft = 0;
      }
    } else {
      // Keep scrollPosition synchronized with manual shifts if any
      scrollPosition = portfolioSlider.scrollLeft;
    }
    autoScrollFrame = requestAnimationFrame(scrollStep);
  }
  
  autoScrollFrame = requestAnimationFrame(scrollStep);
}

function stopAutoScroll() {
  if (autoScrollFrame) {
    cancelAnimationFrame(autoScrollFrame);
  }
}

// Pause scrolling on mouse hover, resume on mouse leave
if (portfolioSlider) {
  portfolioSlider.addEventListener("mouseenter", () => {
    isHovering = true;
  });
  portfolioSlider.addEventListener("mouseleave", () => {
    isHovering = false;
  });
}

function renderPortfolio() {
  if (!portfolioSlider) return;
  
  // Clear slider content
  portfolioSlider.innerHTML = "";
  
  if (builtSites.length === 0) {
    portfolioSlider.classList.add("empty");
    if (emptyStateCard) {
      portfolioSlider.appendChild(emptyStateCard);
      emptyStateCard.style.display = "flex";
    }
    stopAutoScroll();
    return;
  }
  
  portfolioSlider.classList.remove("empty");
  
  // To enable seamless infinite scroll, we clone cards.
  // We want to make sure there are enough cards to exceed the container width.
  // We clone the array elements to have a solid list, then double it for the marquee loop.
  const minimumCardsCount = 8;
  const repeatFactor = Math.ceil(minimumCardsCount / builtSites.length);
  const itemsToRender = [];
  
  // Generate first half (original elements duplicated to fill container)
  for (let r = 0; r < repeatFactor; r++) {
    builtSites.forEach(site => itemsToRender.push({ ...site }));
  }
  
  // Duplicate the entire set to form the second half of the loop
  const totalItems = [...itemsToRender, ...itemsToRender];
  
  totalItems.forEach((site) => {
    const card = document.createElement("a");
    card.className = "portfolio-card";
    card.href = site.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    
    // Live preview thumbnail generated client-side via Microlink Screenshot API
    const previewUrl = `https://api.microlink.io?url=${encodeURIComponent(site.url)}&screenshot=true&embed=screenshot.url`;
    
    card.innerHTML = `
      <div class="card-browser-frame">
        <div class="card-titlebar">
          <div class="card-dots">
            <span class="dot-r"></span>
            <span class="dot-y"></span>
            <span class="dot-g"></span>
          </div>
          <div class="card-url">${site.url.replace(/^https?:\/\/(www\.)?/, "")}</div>
        </div>
        <div class="card-viewport">
          <img src="${previewUrl}" alt="${site.name} Preview" class="portfolio-preview-img" loading="lazy" />
        </div>
      </div>
      <div class="card-details">
        <span class="card-type-tag">${site.type}</span>
        <h3>${site.name}</h3>
        <p class="card-description">${site.desc}</p>
      </div>
    `;
    
    portfolioSlider.appendChild(card);
  });
  
  // Begin auto-scroll loop
  setTimeout(startAutoScroll, 100);
}

// ==========================================================================
// 5. Cozy Contact Form Actions & Success Screen
// ==========================================================================
const contactForm = document.getElementById("contactForm");
const formSubmitBtn = document.getElementById("formSubmitBtn");
const formLoader = document.getElementById("formLoader");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach(i => i.disabled = true);
    
    if (formLoader) formLoader.style.display = "inline-flex";
    if (formSubmitBtn) {
      formSubmitBtn.disabled = true;
      formSubmitBtn.querySelector(".btn-text").textContent = "Sending vision...";
    }
    
    const nameVal = document.getElementById("clientName").value;
    const businessVal = document.getElementById("businessType").value;
    const emailVal = document.getElementById("clientEmail").value;
    const visionVal = document.getElementById("projectVision").value;
    
    // AJAX submit to FormSubmit endpoint (sends email to target address)
    fetch("https://formsubmit.co/ajax/kittenandkeystroke@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: nameVal,
        Business: businessVal,
        Email: emailVal,
        Vision: visionVal
      })
    })
    .then(() => {
      // Transition to success message
      contactForm.style.opacity = "0";
      setTimeout(() => {
        contactForm.style.display = "none";
        if (successMessage) {
          successMessage.style.display = "block";
        }
      }, 300);
    })
    .catch((error) => {
      console.error("Submission error:", error);
      // Fail-soft: transition anyway to keep UX friendly
      contactForm.style.opacity = "0";
      setTimeout(() => {
        contactForm.style.display = "none";
        if (successMessage) {
          successMessage.style.display = "block";
        }
      }, 300);
    });
  });
}

// "Send Another Message" reset button handler
const resetFormBtn = document.getElementById("resetFormBtn");
if (resetFormBtn && contactForm && successMessage) {
  resetFormBtn.addEventListener("click", () => {
    // Reset form inputs
    contactForm.reset();
    
    // Re-enable fields
    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach(i => i.disabled = false);
    
    // Restore submit button state
    if (formSubmitBtn) {
      formSubmitBtn.disabled = false;
      formSubmitBtn.querySelector(".btn-text").textContent = "Send Message 🐾";
    }
    if (formLoader) formLoader.style.display = "none";
    
    // Transition form views back
    successMessage.style.display = "none";
    contactForm.style.display = "flex";
    setTimeout(() => {
      contactForm.style.opacity = "1";
    }, 50);
  });
}

// ==========================================================================
// Initialize Page
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Start tagline typing
  typeEffect();
  
  // Render portfolio
  renderPortfolio();
  
  // Set up initial scroll reveals
  handleScrollAnimation();
});
