//this project do not have db, but if there is one, use Mongo db as an example

import mongoose, { Schema } from 'mongoose';

const PlayerSchema = new Schema({
    name:{
        type: String,
        required: ""
    },
    team: {
        type: String,
        required: ""
    },
    pos: {
        type: String,
        required: ""
    },

    // ... etc players attribute

});

export default mongoose.model('Player', PlayerSchema);