const Mongoose = require('mongoose')
const candidateSchema = new Mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    party:{
        type: String,
        required: True
    },
    votes:[{
        user:{
            type: Mongoose.Schema.Types.Object,
            required: true
        },
        voted_at:{
            type: Date,
            default: Date.now()
        }
    }
    ],
   vote_count:{
    type:Number,
    default:0
   }
})
