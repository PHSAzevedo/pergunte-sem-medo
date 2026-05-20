// Edite aqui: checkout, preço, garantia e textos comerciais principais.
const checkoutUrl = "https://pay.hotmart.com/Y105909205F?checkoutMode=10";
const offerPrice = "R$ 37,00";
const guaranteeText =
  "Acesse o material, leia as primeiras partes e veja se ele é útil para sua realidade. Se perceber que não faz sentido para você, basta solicitar o reembolso dentro do prazo de garantia.";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-checkout-link]").forEach((link) => {
    link.setAttribute("href", checkoutUrl);
    link.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-price]").forEach((node) => {
    node.textContent = offerPrice;
  });

  document.querySelectorAll("[data-guarantee-text]").forEach((node) => {
    node.textContent = guaranteeText;
  });

  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(year);
  });

  const stickyCta = document.querySelector(".sticky-cta");
  const hero = document.querySelector(".hero");

  if (stickyCta && hero && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        stickyCta.classList.toggle("is-visible", !entry.isIntersecting);
      },
      { threshold: 0.08 },
    );

    observer.observe(hero);
  }
});
