window.onload = async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const libroId = urlParams.get('id');

    if (!libroId) {
        document.getElementById('detalleLibro').innerHTML = '<p class="text-danger">Libro no encontrado</p>';
        return;
    }

    try {
        const response = await fetch(`/api/listar`); // Obtiene todos los libros
        const libros = await response.json();
        const libro = libros.find(l => l.id == libroId);

        if (!libro) {
            document.getElementById('detalleLibro').innerHTML = '<p class="text-danger">Libro no encontrado</p>';
            return;
        }

        document.getElementById('detalleLibro').innerHTML = `
            <div class="row">
                <div class="col-md-4 imagen-detalle">
                    <img src="${libro.imagen || 'https://via.placeholder.com/150'}" class="img-fluid rounded" alt="${libro.titulo}">
                </div>
                <div class="col-md-8">
                    <h2>${libro.titulo}</h2>
                    <p><strong>Autor:</strong> ${libro.autor}</p>
                    <p><strong>Publicado:</strong> ${libro.publicado}</p>
                    <p>${libro.descripcion}</p>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error al cargar el libro:', error);
    }
};
