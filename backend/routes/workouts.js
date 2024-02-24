const express = require('express')
const Workout = require('../models/workout')
const router = express.Router()

router.get('/', (req,res)=>{
res.json({mssg: 'GET ALL WORKOUTS'})

})

router.get('/:id', (req, res)=>{
    res.json({mssg: 'Get a single workout'})
})
router.post('/', async (req, res)=>{
    const {title, load, reps} = req.body

    try{
        const workout = await Workout. create({title, load, reps})
        res.status(200).json(workout)

    } catch(error){
        res.status(404).json({error: error.message})

    }
    res.json({mssg: 'Post a new workout'})
})

router.delete('/:id', (req, res)=>{
    
    res.json({mssg: 'delete a workout'})
})

router.patch('/:id', (req, res)=>{
    res.json({mssg: 'Update a workout'})
})


module.exports =router