<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("libros").addEventListener("click", async function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const libroId = event.target.getAttribute("data-id");
            try {
                const response = await fetch(`/api/borrar/${libroId}`, { method: "DELETE" });
                if (response.ok) {
                    event.target.closest(".list-group-item").remove();
                }
            } catch (error) {
                console.error("Error al eliminar:", error);
            }
        }
    });
});
=======
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("libros").addEventListener("click", async function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const libroId = event.target.getAttribute("data-id");
            try {
                const response = await fetch(`/api/borrar/${libroId}`, { method: "DELETE" });
                if (response.ok) {
                    event.target.closest(".list-group-item").remove();
                }
            } catch (error) {
                console.error("Error al eliminar:", error);
            }
        }
    });
});
>>>>>>> a56411cd632cb3f91ae0129455d4cd5bf77acfcc
