const Workout = require('../models/workout')

const mongoose = require('mongoose')

// get all workouts

const getworkouts = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAT:-1})

    res.status(200).json(workouts)
}

//get a single workout 
const getworkout = async (req,res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such workout'})
    }
    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error:'no workout found'})
    }

    res.status(200).json(workout)
}


//create a new workout

const createWorkout =async(req,res)=>{
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)

    } catch(error){
        res.status(404).json({error: error.message})

    }


}

const deleteWorkout = async(req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(404).json({error:'no workout found'})
    }

    res.status(200).json(workout)
}



//delete a workout

// update a workout

const updateWorkout = async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!workout){
        return res.status(404).json({error:'no workout found'})
    }

    res.status(200).json(workout)

}

module.exports = {
    createWorkout,
    getworkout,
    getworkouts,
    deleteWorkout,
    updateWorkout
}