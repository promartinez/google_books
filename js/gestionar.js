document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalAgregarLibro");
    const form = modal.querySelector("form");
    const btnGuardar = modal.querySelector(".btn-primary");
    let libroId = null;

    document.getElementById("libros").addEventListener("click", function (event) {
        if (event.target.classList.contains("edit-btn")) {
            libroId = event.target.getAttribute("data-id");

            // Obtener los datos del libro a editar
            const libroItem = event.target.closest(".list-group-item");
            document.getElementById("titulo").value = libroItem.querySelector("h5").textContent.trim();
            document.getElementById("autor").value = libroItem.querySelector("p:nth-child(2)").textContent.replace("Autor: ", "").trim();
            document.getElementById("publicado").value = libroItem.querySelector("small").textContent.replace("Publicado: ", "").trim();
            document.getElementById("descripcion").value = libroItem.querySelector(".descripcion").textContent.trim();
            document.getElementById("imagen").value = libroItem.querySelector("img").src;
        }
    });

    btnGuardar.addEventListener("click", async function () {
        const titulo = document.getElementById("titulo").value.trim();
        const autor = document.getElementById("autor").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const imagen = document.getElementById("imagen").value.trim();
        const publicado = document.getElementById("publicado").value.trim(); // Aquí estaba el error, ahora está bien

        if (!titulo || !autor || !publicado) {
            console.error("Faltan datos obligatorios");
            return;
        }

        const data = { titulo, autor, descripcion, imagen, publicado };

        try {
            let response;
            if (libroId) {
                // Editar libro
                response = await fetch(`/api/editar/${libroId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
            } else {
                // Agregar nuevo libro
                response = await fetch("/api/crear", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
            }

            if (response.ok) {
                const libro = await response.json();
                document.querySelector("#modalAgregarLibro .btn-close").click();
                form.reset();

                if (libroId) {
                    // Actualizar el libro en el DOM
                    const libroItem = document.querySelector(`[data-id="${libroId}"]`).closest(".list-group-item");
                    libroItem.querySelector("h5").textContent = libro.titulo;
                    libroItem.querySelector("p:nth-child(2)").innerHTML = `<strong>Autor:</strong> ${libro.autor}`;
                    libroItem.querySelector("small").textContent = `Publicado: ${libro.publicado}`;
                    libroItem.querySelector(".descripcion").textContent = libro.descripcion;
                    libroItem.querySelector("img").src = libro.imagen || "https://via.placeholder.com/150";
                } else {
                    // Agregar nuevo libro al DOM
                    agregarLibroDOM(libro);
                }

                libroId = null;
            }
        } catch (error) {
            console.error("Error al guardar libro:", error);
        }
    });

    modal.addEventListener("hidden.bs.modal", function () {
        form.reset();
        libroId = null;
    });
});
