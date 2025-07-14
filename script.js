const cursos = {
  curso1: {
    titulo: "Desarrollo Humano",
    descripcion: "Curso orientado al crecimiento personal, social y profesional."
  },
  curso2: {
    titulo: "English I",
    descripcion: "Fundamentos de inglés para la comunicación básica."
  },
  curso3: {
    titulo: "Fundamentos de Matemática",
    descripcion: "Conceptos esenciales de matemática para ciencias sociales."
  },
  curso4: {
    titulo: "Introducción a las Comunicaciones",
    descripcion: "Panorama general sobre las teorías y prácticas comunicativas."
  },
  curso5: {
    titulo: "Lenguaje I",
    descripcion: "Estudio del lenguaje y su importancia en la comunicación."
  }
};

function mostrarDetalle(cursoId) {
  document.getElementById('tituloCurso').textContent = cursos[cursoId].titulo;
  document.getElementById('descripcionCurso').textContent = cursos[cursoId].descripcion;
  document.getElementById('detalleCurso').classList.remove('oculto');
}

function cerrarModal() {
  document.getElementById('detalleCurso').classList.add('oculto');
}
