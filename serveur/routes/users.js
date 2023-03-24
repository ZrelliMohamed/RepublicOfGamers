const express = require('express')
const router = express.Router()
const { getAllUsers, addUser, deleteOneUser, getOneUser, updateOneUser, getTeam } = require('../controllers/users');
router.get('/getAll',getAllUsers)
router.get('/:id',getOneUser)
router.get('/team/:id',getTeam)
 router.post('/add',addUser)
 router.delete('/:id',deleteOneUser)
 router.put('/:id',updateOneUser)
module.exports = router