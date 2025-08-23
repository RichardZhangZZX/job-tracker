import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    role:{
        type: String
    },
    date_posted:{
        type: String
    },
    date_applied:{
        type: String
    },
    status:{
        type: String
    },
    link:{
        type: String
    },
    notes:{
        type: String
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Job = mongoose.model('Job', jobSchema);
// Jobs

export default Job;   



