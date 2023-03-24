const express = require('express');
const router = express.Router();
const { getAllTeams, getOneTeam, addTeam, deleteOneTeam, updateOnePost } = require('../controllers/teams');
router.get('/getAll',getAllTeams)
 router.get('/:id',getOneTeam)
router.post('/add',addTeam)
router.delete('/:id',deleteOneTeam)
router.put('/:id',updateOnePost)
module.exports = router