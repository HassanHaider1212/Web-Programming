var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const leaderBoardSchema = new Schema({
    teamName:{
        type: String,
        required: true
    },
    totalGamesPlayed:{
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                return typeof value === 'number' && value >= 0;
            },
            message: props => `${props.value} is not a valid score. Score must be a number greater than or equal to 0.`
        }
    }
})

module.exports = mongoose.model("Leaderboard", leaderBoardSchema)