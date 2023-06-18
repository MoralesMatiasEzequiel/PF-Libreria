require('../../db');
const SubCategory = require('../../collections/SubCategory');
const mongoose = require('mongoose');

const deleteSubcategoryCtrl = async (_id) => {
  let id;
  
  try {
    id = mongoose.Types.ObjectId(_id);
  } catch (error) {
    throw new Error(`Invalid _id: ${_id}`);
  }

  const deleted = await SubCategory.deleteOne({ _id: id });

  return deleted;
};

module.exports = deleteSubcategoryCtrl;