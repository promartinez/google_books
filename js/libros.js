document.addEventListener("DOMContentLoaded", async function () {
    const contenedor = document.getElementById("libros");

    // Función para cargar libros
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

    // Función para agregar libro al DOM
    function agregarLibroDOM(libro) {
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
                    <button class="btn btn-warning edit-btn">Editar</button>
                    <button class="btn btn-danger delete-btn">Eliminar</button>
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

        // Botón "Eliminar"
        const botonEliminar = libroItem.querySelector(".delete-btn");
        botonEliminar.addEventListener("click", async () => {
            try {
                const response = await fetch(`/api/borrar/${libro.id}`, { method: "DELETE" });
                if (response.ok) libroItem.remove();
            } catch (error) {
                console.error("Error al eliminar:", error);
            }
        });

        contenedor.appendChild(libroItem);
    }

    // Cargar libros al iniciar
    await cargarLibros();

    // Agregar nuevo libro
    document.querySelector(".btn-primary").addEventListener("click", async function () {
        const titulo = document.getElementById("titulo").value.trim();
        const autor = document.getElementById("autor").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const imagen = document.getElementById("imagen").value.trim();
        const publicado = document.getElementById("publicado").value.trim();

        if (!titulo) return;

        try {
            const response = await fetch("/api/crear", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ titulo, autor, descripcion, imagen, publicado }),
            });

            if (response.ok) {
                const nuevoLibro = await response.json();
                agregarLibroDOM(nuevoLibro);
                document.querySelector("#modalAgregarLibro .btn-close").click(); // Cerrar modal
                document.querySelector("form").reset(); // Limpiar formulario
            }
        } catch (error) {
            console.error("Error al agregar libro:", error);
        }
    });
});
