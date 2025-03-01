document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalAgregarLibro");
    const form = modal.querySelector("form");
    const btnGuardar = modal.querySelector(".btn-primary");
    let libroId = null;

    document.getElementById("libros").addEventListener("click", function (event) {
        if (!event.target.classList.contains("edit-btn")) return;

        libroId = event.target.getAttribute("data-id");
        const libroItem = event.target.closest(".list-group-item");

        document.getElementById("titulo").value = libroItem.querySelector("h5").textContent.trim();
        document.getElementById("autor").value = libroItem.querySelector("p:nth-child(2)").textContent.replace("Autor: ", "").trim();
        document.getElementById("publicado").value = libroItem.querySelector("small").textContent.replace("Publicado: ", "").trim();
        document.getElementById("descripcion").value = libroItem.querySelector(".descripcion").textContent.trim();
        document.getElementById("imagen").value = libroItem.querySelector("img").src;

        btnGuardar.dataset.action = "editar";
        btnGuardar.dataset.id = libroId;
    });

    btnGuardar.addEventListener("click", async function () {
        if (this.dataset.action !== "editar") return;

        const data = {
            titulo: document.getElementById("titulo").value.trim(),
            autor: document.getElementById("autor").value.trim(),
            descripcion: document.getElementById("descripcion").value.trim(),
            imagen: document.getElementById("imagen").value.trim(),
            publicado: document.getElementById("publicado").value.trim()
        };

        if (!data.titulo || !data.autor || !data.publicado) return;

        const response = await fetch(`/api/editar/${this.dataset.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) location.reload();
    });

    modal.addEventListener("hidden.bs.modal", function () {
        form.reset();
        btnGuardar.dataset.action = "";
        libroId = null;
    });
});