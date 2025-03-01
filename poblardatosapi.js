<<<<<<< HEAD
const axios = require('axios');
const Book = require('./bookmodelo');

const API_KEY = 'AIzaSyCv-DXVdfeYnzQr2Na4U6pGMDHxSzajZAM';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// 🔍 Obtener libros y guardarlos en MySQL
const poblarLibros = async () => {
    try {
        // Consulta general sin palabra clave (q=) y limitando a 40 resultados
        const { data } = await axios.get(`${BASE_URL}?q=book&key=${API_KEY}&maxResults=40`);

        if (!data.items) return console.log(' No se encontraron libros');

        const libros = data.items.map(item => ({
            titulo: item.volumeInfo.title,
            autor: item.volumeInfo.authors?.join(', ') || 'Desconocido',
            descripcion: item.volumeInfo.description || 'Sin descripción',
            imagen: item.volumeInfo.imageLinks?.thumbnail || '',
            publicado: item.volumeInfo.publishedDate || 'Desconocido'
        }));

        await Book.bulkCreate(libros, { ignoreDuplicates: true });
        console.log('Libros guardados en MySQL');
    } catch (error) {
        console.error('Error al poblar libros:', error);
    }
};

poblarLibros();
=======
const axios = require('axios');
const Book = require('./bookmodelo');

const API_KEY = 'AIzaSyCv-DXVdfeYnzQr2Na4U6pGMDHxSzajZAM';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// 🔍 Obtener libros y guardarlos en MySQL
const poblarLibros = async () => {
    try {
        // Consulta general sin palabra clave (q=) y limitando a 40 resultados
        const { data } = await axios.get(`${BASE_URL}?q=book&key=${API_KEY}&maxResults=40`);

        if (!data.items) return console.log(' No se encontraron libros');

        const libros = data.items.map(item => ({
            titulo: item.volumeInfo.title,
            autor: item.volumeInfo.authors?.join(', ') || 'Desconocido',
            descripcion: item.volumeInfo.description || 'Sin descripción',
            imagen: item.volumeInfo.imageLinks?.thumbnail || '',
            publicado: item.volumeInfo.publishedDate || 'Desconocido'
        }));

        await Book.bulkCreate(libros, { ignoreDuplicates: true });
        console.log('Libros guardados en MySQL');
    } catch (error) {
        console.error('Error al poblar libros:', error);
    }
};

poblarLibros();
>>>>>>> a56411cd632cb3f91ae0129455d4cd5bf77acfcc
