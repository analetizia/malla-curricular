const cursos = {
  curso1: {
    titulo: "Desarrollo Humano",
    descripcion: "Analiza el desarrollo del ser humano en distintas etapas desde una perspectiva emocional, social y cognitiva."
  },
  curso2: {
    titulo: "English I",
    descripcion: "Curso básico de inglés centrado en habilidades comunicativas: comprensión oral, lectura y vocabulario inicial."
  },
  curso3: {
    titulo: "Fundamentos de Matemática",
    descripcion: "Brinda herramientas esenciales para el análisis lógico y cuantitativo en la vida académica y profesional."
  },
  curso4: {
    titulo: "Introducción a las Comunicaciones",
    descripcion: "Explora las bases de la comunicación humana, teorías clave y su aplicación en medios actuales."
  },
  curso5: {
    titulo: "Lenguaje I",
    descripcion: "Desarrolla habilidades de escritura y comprensión lectora con énfasis en textos académicos y literarios."
  }
};

function mostrarDetalle(cursoID) {
  const modal = document.getElementById("detalleCurso");
  const titulo = document.getElementById("tituloCurso");
  const descripcion = document.getElementById("descripcionCurso");
  const boton = document.getElementById(cursoID);

  titulo.textContent = cursos[cursoID].titulo;
  descripcion.textContent = cursos[cursoID].descripcion;
  modal.classList.remove("oculto");

  // Toggle de tachado
  boton.classList.toggle("tachado");
}

function cerrarModal() {
  document.getElementById("detalleCurso").classList.add("oculto");
}
