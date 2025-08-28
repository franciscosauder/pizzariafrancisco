const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => t.classList.toggle("active", idx === i));
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

const form = document.getElementById("orderForm");

form.addEventListener("submit", function(e) {
  const nome = form.nome.value.trim();
  const telefone = form.telefone.value.trim();
  const endereco = form.endereco.value.trim();
  const sabor = form.sabor.value;
  const pagamento = form.querySelector("input[name='pagamento']:checked");
  const telRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

  if (!nome || !telefone || !endereco || !sabor || !pagamento) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }
  if (!nameRegex.test(nome)) {
    e.preventDefault();
    alert("Digite um nome válido (sem números ou caracteres especiais)");
    return;
  }
  if (!telRegex.test(telefone)) {
    e.preventDefault();
    alert("Digite um telefone válido no formato (xx) xxxxx-xxxx");
    return;
  }
  if (endereco.length < 5) {
    e.preventDefault();
    alert("Digite um endereço válido");
    return;
  }
});
