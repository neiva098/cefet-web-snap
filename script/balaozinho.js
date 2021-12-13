function getMarks() {
    return document.querySelectorAll(".marcacao");
  }
  
  function getBalaozinho() {
    return document.querySelector("#balaozinho");
  }
  
  const balaozinho = getBalaozinho();
  const marks = getMarks();
  
  function updateBalaozinhoAttr(ev, attributes) {
    balaozinho.innerHTML = `<h2>${attributes.titulo}</h2><p>${attributes.conteudo}</p>`;
    balaozinho.style.background = attributes.cor;
    balaozinho.style.top = `${ev.pageY}px`;
    balaozinho.style.left = `${ev.pageX}px`;
  }
  
  function getMarkAttributes(marcacao) {
    return {
      titulo: marcacao.getAttribute("data-titulo"),
      conteudo: marcacao.getAttribute("data-conteudo"),
      cor: marcacao.getAttribute("data-cor"),
    };
  }
  
  function mouseOverMarcacao(event) {
    const mark = event.currentTarget;
  
    const attibutes = getMarkAttributes(mark);
  
    return updateBalaozinhoAttr(event, attibutes);
  }
  
  function mouseOutMark(ev) {
    balaozinho.innerHTML = "";
  }
  
  function mouseMoveMarks(event) {
    balaozinho.style.top = `${event.pageY}px`;
    balaozinho.style.left = `${event.pageX}px`;
  }
  
  function addListeners() {
    marks.forEach((mark) => {
      mark.addEventListener("mouseover", mouseOverMarcacao);
      mark.addEventListener("mouseout", mouseOutMark);
      mark.addEventListener("mousemove", mouseMoveMarks);
    });
  }
  
  addListeners();
  