# PF-Libreria-BACK

--- MODELOS REALIZADOS (hasta ahora)

Product:

- name: STRING, ÚNICO Y OBLIGATORIO
- brand: STRING, OBLIGATORIO
- stock: NUMBER, OBLIGATORIO
- price: NUMBER, OBLIGATORIO
- salePrice: NUMBER
- description: STRING
- image: STRING, OBLIGATORIO
- rating: NUMBER
- active: BOOLEAN, default TRUE
- subcategories: ARRAY de IDs de SUBCATEGORIES

SubCategory:

- name: STRING, ÚNICO Y OBLIGATORIO
- categories: ARRAY de ENUM entre los siguientes 4 STRINGS: 'Artística', 'Oficina', 'Escolar' y 'Papelería', es decir, una subcategoría puede pertenecer a varias categorías, OBLIGATORIO

User:

- username: STRING, ÚNICO Y OBLIGATORIO
- email: STRING, ÚNICO Y OBLIGATORIO
- password: STRING, OBLIGATORIO
- date: DATE, por default
- active: BOOLEAN, default TRUE

Admin: 

- username: STRING, ÚNICO Y OBLIGATORIO
- email: STRING, ÚNICO Y OBLIGATORIO

--- RUTAS REALIZADAS (hasta ahora)

/product:

- get: trae todos los productos

- get?name=name: trae todos los que coincidan con el nombre enviado por query

- get/:id: trae un producto por id

- post: nuevo producto

- put: editar producto. El array de subcategories se va a pisar entero, es decir que si el producto ya está inscripto en una subcategoría, para poder mantenerla al agregar una nueva hay que volver a mandarla.

- delete: eliminar por id. No disponible para el admin, este solo podrá cambiar el estado del atributo active a FALSE para no ver más el producto.

/subcategory:

- get: trae todas las subcategorías

- get/categoryEnum: trae todas las categorías preseteadas para poder usar en el Nav2 (devuelve un ARRAY de STRINGS)

ejemplo:

axios.get('https://example-backend.com/subcategory/categoryEnum')
  .then(response => {
    const categoryEnum = response.data;
    console.log(categoryEnum); // Imprime ['Artística', 'Oficina', 'Escolar', 'Papelería']
  })
  .catch(error => {
    console.error('Error al obtener categoryEnum:', error);
  });

- post: nueva subcategoría

- put: editar subcategoría. El array de categories se va a pisar entero, es decir que si la subcategoría ya está inscripta en una categoría, para poder mantenerla al agregar una nueva hay que volver a mandarla.

- delete: eliminar por id. No disponible para el admin, este solo podrá cambiar el estado del atributo active a FALSE para no ver más la subcategoría.

/user:

- get: trae todos los usuarios.

- post: nuevo usuario.

- put: editar usuario.

- delete: eliminar por id. No disponible para el admin, este solo podrá cambiar el estado del atributo active a FALSE para no ver más el usuario.