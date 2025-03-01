<<<<<<< HEAD
btnGuardar.addEventListener("click", async function () {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const imagen = document.getElementById("imagen").value.trim();
    const publicado = document.getElementById("publicado").value.trim();

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

            if (libroId) {
                // 🔹 Si es una edición, actualizar en el DOM
                const libroItem = document.querySelector(`[data-id="${libroId}"]`).closest(".list-group-item");

                if (libroItem) {
                    libroItem.querySelector("h5").textContent = libro.titulo;
                    libroItem.querySelector("p:nth-child(2)").innerHTML = `<strong>Autor:</strong> ${libro.autor}`;
                    libroItem.querySelector("small").textContent = `Publicado: ${libro.publicado}`;
                    libroItem.querySelector(".descripcion").textContent = libro.descripcion;
                    libroItem.querySelector("img").src = libro.imagen || "https://via.placeholder.com/150";
                }
            } else {
                // 🔹 Si es un nuevo libro, agregarlo a la lista
                const librosContainer = document.getElementById("libros");
                const nuevoLibro = document.createElement("div");
                nuevoLibro.classList.add("list-group-item");
                nuevoLibro.setAttribute("data-id", libro.id);
                nuevoLibro.innerHTML = `
                    <h5>${libro.titulo}</h5>
                    <p><strong>Autor:</strong> ${libro.autor}</p>
                    <p class="descripcion">${libro.descripcion}</p>
                    <small>Publicado: ${libro.publicado}</small>
                    <img src="${libro.imagen || "https://via.placeholder.com/150"}" alt="${libro.titulo}" class="img-thumbnail">
                    <button class="btn btn-warning edit-btn" data-id="${libro.id}" data-bs-toggle="modal" data-bs-target="#modalAgregarLibro">Editar</button>
                `;
                librosContainer.appendChild(nuevoLibro);
            }

            // Cerrar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById("modalAgregarLibro"));
            modal.hide();
        }

    } catch (error) {
        console.error("Error al guardar libro:", error);
    }
});
=======
btnGuardar.addEventListener("click", async function () {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const imagen = document.getElementById("imagen").value.trim();
    const publicado = document.getElementById("publicado").value.trim();

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

            if (libroId) {
                // 🔹 Si es una edición, actualizar en el DOM
                const libroItem = document.querySelector(`[data-id="${libroId}"]`).closest(".list-group-item");

                if (libroItem) {
                    libroItem.querySelector("h5").textContent = libro.titulo;
                    libroItem.querySelector("p:nth-child(2)").innerHTML = `<strong>Autor:</strong> ${libro.autor}`;
                    libroItem.querySelector("small").textContent = `Publicado: ${libro.publicado}`;
                    libroItem.querySelector(".descripcion").textContent = libro.descripcion;
                    libroItem.querySelector("img").src = libro.imagen || "https://via.placeholder.com/150";
                }
            } else {
                // 🔹 Si es un nuevo libro, agregarlo a la lista
                const librosContainer = document.getElementById("libros");
                const nuevoLibro = document.createElement("div");
                nuevoLibro.classList.add("list-group-item");
                nuevoLibro.setAttribute("data-id", libro.id);
                nuevoLibro.innerHTML = `
                    <h5>${libro.titulo}</h5>
                    <p><strong>Autor:</strong> ${libro.autor}</p>
                    <p class="descripcion">${libro.descripcion}</p>
                    <small>Publicado: ${libro.publicado}</small>
                    <img src="${libro.imagen || "https://via.placeholder.com/150"}" alt="${libro.titulo}" class="img-thumbnail">
                    <button class="btn btn-warning edit-btn" data-id="${libro.id}" data-bs-toggle="modal" data-bs-target="#modalAgregarLibro">Editar</button>
                `;
                librosContainer.appendChild(nuevoLibro);
            }

            // Cerrar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById("modalAgregarLibro"));
            modal.hide();
        }

    } catch (error) {
        console.error("Error al guardar libro:", error);
    }
});
>>>>>>> a56411cd632cb3f91ae0129455d4cd5bf77acfcc
