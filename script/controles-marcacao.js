const checkbox = document.querySelector("#visibilidade-das-marcacoes");

function getElements() {
  const x = document.querySelector("#x-da-marcacao");
  const y = document.querySelector("#y-da-marcacao");
  const width = document.querySelector("#largura-da-marcacao");
  const height = document.querySelector("#altura-da-marcacao");
  const title = document.querySelector("#titulo-da-marcacao");
  const content = document.querySelector("#conteudo-da-marcacao");
  const color = document.querySelector("#cor-da-marcacao");
  const [retangular, oval] = document.querySelectorAll(
    'input[name="formato-da-marcacao"]'
  );

  return {
    x,
    y,
    width,
    height,
    title,
    content,
    color,
    retangular,
    oval,
  };
}

const {
  x,
  y,
  width,
  height,
  title,
  content,
  color,
  retangular,
  oval,
} = getElements();

function updateInputs(marcacao) {
  height.value = parseInt(marcacao.style.height, 10);
  title.value = marcacao.getAttribute("data-titulo");
  x.value = parseInt(marcacao.style.left, 10);
  content.value = marcacao.getAttribute("data-conteudo");
  oval.checked = marcacao.classList.contains("formato-oval");
  color.value = marcacao.getAttribute("data-cor");
  retangular.checked = !marcacao.classList.contains("formato-oval");
  y.value = parseInt(marcacao.style.top, 10);
  width.value = parseInt(marcacao.style.width, 10);
}

function selectMarks(event) {
  let currentMark = event.currentTarget;

  marks.forEach((mark) => mark.classList.remove("selecionada"));

  currentMark.classList.add("selecionada");
  updateInputs(currentMark);
}

function addMarksClickListeners() {
  marks.forEach((mark) => mark.addEventListener("click", selectMarks));
}

function addChangeListener(event) {
    const currentMark = document.querySelector(".marcacao.selecionada");
    const value = event.target.value;
    
    if (event.target === checkbox) {
      for (mark of marks) {
        mark.style.display = checkbox.checked ? "none" : "";
      }
    }

    if (event.target === x) currentMark.style.left = `${value}px`;
    if (event.target === y) currentMark.style.top = `${value}px`;
    if (event.target === width)
      currentMark.style.width = `${value}px`;
    if (event.target === height)
      currentMark.style.height = `${value}px`;
    if (event.target === title)
      currentMark.setAttribute("data-titulo", value);
    if (event.target === content)
      currentMark.setAttribute("data-conteudo", value);
    if (event.target === color)
      currentMark.setAttribute("data-cor", value);
    if (event.target === retangular && retangular.checked)
      currentMark.classList.remove("formato-oval");
    if (event.target === oval && oval.checked)
      currentMark.classList.add("formato-oval");
}

document.addEventListener("change", addChangeListener);
addMarksClickListeners();
updateInputs(document.querySelector(".marcacao.selecionada"));
