const { Router } = require('express');
const { categoryEnum } = require('../collections/SubCategory');

const { getSubcategoryHandler, postSubcategoryHandler, putSubcategoryHandler } = require('../handlers/subcategoryHandlers/indexHandlers');

const subcategoryRouter = Router();

subcategoryRouter.get('/', getSubcategoryHandler);

subcategoryRouter.post('/', postSubcategoryHandler);

subcategoryRouter.put('/', putSubcategoryHandler);


//esta ruta sirve para traerse las categorías hacia Nav2

//POR EJEMPLO:

// axios.get('https://example-backend.com/subcategory/categoryEnum')
//   .then(response => {
//     const categoryEnum = response.data;
//     console.log(categoryEnum); // Imprime ['Artística', 'Oficina', 'Escolar', 'Papelería']
//     // Usa el array categoryEnum en tu frontend según tus necesidades
//   })
//   .catch(error => {
//     console.error('Error al obtener categoryEnum:', error);
//   });

subcategoryRouter.get('/categoryEnum', (req, res) => {res.json(categoryEnum);});

module.exports = subcategoryRouter;