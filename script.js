// Animação do título digitando
const title = document.querySelector("h1");
const text = "Olá, eu sou o Rodrigo :)";
let index = 0;

function type() {
  title.textContent = text.slice(0, index++);
  if (index <= text.length) setTimeout(type, 100);
}
type();

// ===== Scroll animation para skills e contato =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".skills, .contact").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

// 🔽 Defina sua data de nascimento (FORMATO: "AAAA-MM-DD")
const minhaIdade = calcularIdade("1999-06-29"); 

// Coloca no HTML automaticamente
document.getElementById("idade").textContent = minhaIdade;
