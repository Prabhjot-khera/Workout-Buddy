const express = require('express')
const {
    createWorkout,
    getworkout,
    getworkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getworkouts)


router.get('/:id', getworkout)


router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports =router