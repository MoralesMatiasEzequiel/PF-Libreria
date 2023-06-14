//importar controllers.

export const deleteProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
    

    } catch (error) {
       return res.status(500).json({ error: error.message, description: `Correctly enter the ID you want to delete` }) //"Introduce correctamente el ID que quieres eliminar".
    }
};