const mongoose = require('mongoose');


const notesSchema = new mongoose.Schema(
    {
        "noteTitle": String,
        "noteDescription": String,
        "priority":
            {
                type: String,
                enum: ['HIGH', 'MEDIUM', 'LOW'],
                required: true
            },
        "dateAdded": Date,
        "dateUpdated": Date,
    }
)

module.exports = mongoose.model('Notes', notesSchema);

//      - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated