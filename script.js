const imagenes = [
    { id: 1, src: "assets/d1.png", titulo: "Asesoría Legal", autor: "Alejandra", categoria: "legal", descripcion: "Asistencia legal para emprendedores." },
    { id: 2, src: "assets/d2.png", titulo: "Contabilidad", autor: "Carlos", categoria: "finanzas", descripcion: "Gestión contable para tu negocio." },
    { id: 3, src: "assets/manos-sosteniendo-el-concepto-de-redes-sociales-de-telefonos-inteligentes.jpg", titulo: "Marketing Digital", autor: "Juan", categoria: "marketing", descripcion: "Estrategias de redes sociales." },
    { id: 4, src: "assets/gente-de-negocios-dandose-la-mano.png", titulo: "Consultoría Empresarial", autor: "Laura", categoria: "legal", descripcion: "Soporte en procesos legales y alianzas." },
    { id: 5, src: "assets/primer-plano-de-mujer-de-negocios-ocupada.jpg", titulo: "Optimización de Recursos", autor: "Camila", categoria: "finanzas", descripcion: "Mejora en la gestión del tiempo y recursos." }
];

function mostrarGaleria() {
    const contenedor = document.getElementById("contenedor-galeria");
    const destacados = document.getElementById("destacados");

    if (contenedor) {
    contenedor.innerHTML = "";
    imagenes.forEach(img => {
        contenedor.innerHTML += `
            <div class="col-md-4 mb-4" data-categoria="${img.categoria}">
            <div class="card h-100">
            <img src="${img.src}" class="card-img-top" alt="${img.titulo}">
            <div class="card-body">
                <h5 class="card-title">${img.titulo}</h5>
                <a href="detalle.html?id=${img.id}" class="btn btn-primary">Ver más</a>
            </div>
            </div>
        </div>`;
    });
    }

    if (destacados) {
    destacados.innerHTML = "";
    imagenes.slice(0, 3).forEach(img => {
        destacados.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
            <img src="${img.src}" class="card-img-top" alt="${img.titulo}">
            <div class="card-body">
                <h5 class="card-title">${img.titulo}</h5>
                <a href="detalle.html?id=${img.id}" class="btn btn-outline-primary">Ver más</a>
            </div>
            </div>
        </div>`;
    });
    }
}

function filtrar(categoria) {
    const cards = document.querySelectorAll("[data-categoria]");
    cards.forEach(card => {
    card.style.display = (categoria === "todos" || card.dataset.categoria === categoria) ? "block" : "none";
    });
}

function mostrarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const img = imagenes.find(i => i.id === id);
    const container = document.getElementById("detalle-container");

    if (container && img) {
    container.innerHTML = `
        <h2>${img.titulo}</h2>
        <img src="${img.src}" class="img-fluid mb-3" alt="${img.titulo}">
        <p><strong>Autor:</strong> ${img.autor}</p>
        <p>${img.descripcion}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarGaleria();
    mostrarDetalle();

    const form = document.getElementById("form-contacto");
    if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Formulario enviado correctamente.");
        form.reset();
    });
    }
});
