const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
   image:{type:Object,required:true},
   sourceOfInfo: {
    type: Object,
    default: {
      name: null,
      email: null,
      designation: null,
      department: null,
    }
  },
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('PhotoGallery', Schema);


//Export----------------------------->
module.exports = Model;