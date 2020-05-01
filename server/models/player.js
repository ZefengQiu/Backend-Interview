//this project do not have db, but if there is one, use Mongo db as an example

import mongoose, { Schema } from 'mongoose';

const THSchema = new Schema({
    name:{
        type: String,
        required: ""
    },
    team: {
        type: String,
        required: ""
    },
    age: {
        type: String,
        required: ""
    },

});

export default mongoose.model('th', THSchema);