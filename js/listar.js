document.addEventListener("DOMContentLoaded", async function () {
    const contenedor = document.getElementById("libros");

    async function cargarLibros() {
        try {
            const response = await fetch("/api/listar");
            const libros = await response.json();
            contenedor.innerHTML = ""; // Limpiar antes de agregar nuevos

            if (libros.length > 0) {
                libros.forEach(libro => agregarLibroDOM(libro));
            } else {
                contenedor.innerHTML = `<p class="text-center text-muted">No hay libros disponibles</p>`;
            }
        } catch (error) {
            console.error("Error al cargar los libros:", error);
        }
    }

    window.agregarLibroDOM = function (libro) {
        const libroItem = document.createElement("div");
        libroItem.classList.add("list-group-item", "d-flex", "align-items-start", "gap-3", "p-3");

        libroItem.innerHTML = `
            <img src="${libro.imagen || 'https://via.placeholder.com/150'}" class="book-img">
            <div class="flex-grow-1">
                <h5 class="mb-1">${libro.titulo}</h5>
                <p class="text-muted mb-1"><strong>Autor:</strong> ${libro.autor}</p>
                <p class="text-muted"><small>Publicado: ${libro.publicado}</small></p>
                <p class="descripcion">${libro.descripcion}</p>

                <div class="d-flex gap-2 mt-2">
                    <button class="btn btn-success toggle-btn">Ver más</button>
                    <button class="btn btn-warning edit-btn" data-id="${libro.id}" data-bs-toggle="modal" data-bs-target="#modalAgregarLibro">Editar</button>
                    <button class="btn btn-danger delete-btn" data-id="${libro.id}">Eliminar</button>
                </div>
            </div>
        `;

        // Botón "Ver más / Ver menos"
        const botonToggle = libroItem.querySelector(".toggle-btn");
        const descripcion = libroItem.querySelector(".descripcion");
        descripcion.style.maxHeight = "60px";
        descripcion.style.overflow = "hidden";

        botonToggle.addEventListener("click", () => {
            if (descripcion.style.maxHeight === "60px") {
                descripcion.style.maxHeight = "none";
                botonToggle.textContent = "Ver menos";
            } else {
                descripcion.style.maxHeight = "60px";
                botonToggle.textContent = "Ver más";
            }
        });

        contenedor.appendChild(libroItem);
    };

    await cargarLibros();
});
