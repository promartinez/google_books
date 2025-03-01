document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalAgregarLibro");
    const form = modal.querySelector("form");
    const btnGuardar = modal.querySelector(".btn-primary");

    btnGuardar.addEventListener("click", async function () {
        if (this.dataset.action === "editar") return;

        const data = {
            titulo: document.getElementById("titulo").value.trim(),
            autor: document.getElementById("autor").value.trim(),
            descripcion: document.getElementById("descripcion").value.trim(),
            imagen: document.getElementById("imagen").value.trim(),
            publicado: document.getElementById("publicado").value.trim()
        };

        if (!data.titulo || !data.autor || !data.publicado) return;

        const response = await fetch("/api/crear", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) location.reload();
    });

    modal.addEventListener("hidden.bs.modal", function () {
        form.reset();
        btnGuardar.dataset.action = "";
    });
});