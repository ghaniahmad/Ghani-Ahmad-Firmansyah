// Interaksi utama untuk portfolio Ghani Ahmad Firmansyah
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const helloButton = document.querySelector("#helloButton");
const toast = document.querySelector("#toast");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

// Menampilkan notifikasi singkat di layar.
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// Menu navigasi untuk perangkat mobile.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
    menuToggle.textContent = "☰";
  });
});

// Tombol sapaan: fitur interaktif JavaScript.
helloButton.addEventListener("click", () => {
  showToast("Halo! Makasih sudah mampir ke portfolio Ghani 👋");
});

// Filter kategori proyek.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectCards.forEach((card) => {
      const shouldShow = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !shouldShow;
    });
  });
});

// Form ini memvalidasi input di browser, tidak mengirim data ke server.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#contactName").value.trim();
  const email = document.querySelector("#contactEmail").value.trim();
  const message = document.querySelector("#contactMessage").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = "Isi nama, email, dan pesan terlebih dahulu.";
    formMessage.style.color = "#ffb4c9";
    return;
  }
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Format email belum valid. Coba periksa lagi.";
    formMessage.style.color = "#ffb4c9";
    return;
  }
  formMessage.textContent = `Terima kasih, ${name}! Validasi berhasil (demo).`;
  formMessage.style.color = "#c7f67e";
  contactForm.reset();
});

// Tahun footer otomatis mengikuti tahun perangkat.
document.querySelector("#currentYear").textContent = new Date().getFullYear();
