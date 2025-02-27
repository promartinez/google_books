window.onload = async function() {
    try {
        const response = await fetch('/api/listar'); 
        const libros = await response.json();

        const contenedor = document.getElementById('libros');

        if (libros.length > 0) {
            libros.forEach(libro => {
                const libroCol = document.createElement('div');
                libroCol.classList.add('col');

                libroCol.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${libro.imagen || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${libro.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${libro.titulo}</h5>
                            <p class="card-text"><strong>Autor:</strong> ${libro.autor}</p>
                            <p class="text-muted"><small>Publicado: ${libro.publicado}</small></p>
                            <a href="vermas.html?id=${libro.id}" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                `;

                contenedor.appendChild(libroCol);
            });
        } else {
            contenedor.innerHTML = `<p class="text-center text-muted">No hay libros disponibles</p>`;
        }
    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }
};
