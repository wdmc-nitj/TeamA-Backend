const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    links: {
        type: Object,
    },
    show:{
        type: Boolean,
        default: true
    },
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
const Model = mongoose.model('Footer', Schema);

//Export----------------------------->
module.exports = Model;

// Proceed in sme maner as footer.