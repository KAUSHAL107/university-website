// Side nav toggle
const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = () => {
  sideNav.style.right = sideNav.style.right === "-250px" ? "0" : "-250px";
};

// Close side nav on link click (mobile UX)
document.querySelectorAll("#sideNav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    sideNav.style.right = "-250px";
  });
});

// Smooth scroll already integrated with SmoothScroll library

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const password = form.querySelector('input[type="password"]').value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert(`Thanks for signing up, ${name}!`);
  form.reset();
});

// Highlight nav link based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#sideNav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Scroll to top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑ Top";
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 40px;
  right: 30px;
  padding: 10px 14px;
  background: #f67c92;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
