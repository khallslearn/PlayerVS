const mongoose = require('mongoose');
const nbaSchema = new mongoose.Schema({
player_name: {
    type: String,
    required: true
},
/*team_abbreviation: {
    type: String,
    required: true
},*/
pts: {
    type: Number,
    required: true
},
/*reb: {
    type: Number,
    required: true
},
ast: {
    type: Number,
    required: true
}*/
})
module.exports = mongoose.model('nbaTask',nbaSchema,'Stats');