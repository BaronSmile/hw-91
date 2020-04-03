const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isSystem: {
        type: Boolean,
        default: false
    },
    datetime: {
        type: String,
        default: new Date().toLocaleString('ru-Ru')
    } 
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;