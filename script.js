const cursos = {
  curso1: {
    titulo: "Redacción Académica",
    descripcion: "Aprenderás a redactar textos académicos, argumentativos y coherentes."
  },
  curso2: {
    titulo: "Comunicación Oral",
    descripcion: "Mejorarás tus habilidades para hablar en público y comunicar ideas con claridad."
  }
};

function mostrarDetalle(cursoID) {
  const modal = document.getElementById("detalleCurso");
  const titulo = document.getElementById("tituloCurso");
  const descripcion = document.getElementById("descripcionCurso");

  titulo.textContent = cursos[cursoID].titulo;
  descripcion.textContent = cursos[cursoID].descripcion;

  modal.classList.remove("oculto");
}

function cerrarModal() {
  document.getElementById("detalleCurso").classList.add("oculto");
}
