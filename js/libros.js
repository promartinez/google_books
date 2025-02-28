window.onload = async function() {
    try {
        const response = await fetch('/api/listar'); 
        const libros = await response.json();

        const contenedor = document.getElementById('libros');

        if (libros.length > 0) {
            libros.forEach(libro => {
                const libroItem = document.createElement('div');
                libroItem.classList.add('list-group-item', 'd-flex', 'align-items-start', 'gap-3', 'p-3');

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
            

                // Agregar evento para "Ver más / Ver menos"
                const boton = libroItem.querySelector('.toggle-btn');
                const descripcion = libroItem.querySelector('.descripcion');
                descripcion.style.maxHeight = '60px'; // Limita la altura por defecto
                descripcion.style.overflow = 'hidden';

                boton.addEventListener('click', () => {
                    if (descripcion.style.maxHeight === '60px') {
                        descripcion.style.maxHeight = 'none';
                        boton.textContent = 'Ver menos';
                    } else {
                        descripcion.style.maxHeight = '60px';
                        boton.textContent = 'Ver más';
                    }
                });

                contenedor.appendChild(libroItem);
            });
        } else {
            contenedor.innerHTML = `<p class="text-center text-muted">No hay libros disponibles</p>`;
        }
    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }


    
};
