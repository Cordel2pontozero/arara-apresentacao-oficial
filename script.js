document.getElementById("year").textContent = String(new Date().getFullYear());

const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href");
    const target = id && id.length > 1 ? document.querySelector(id) : null;
    if (target) target.setAttribute("tabindex", "-1");
  });
}
