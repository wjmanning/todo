var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', { //was 'Todo'
    text: {
        type: String,
        default: ''
    }
});
