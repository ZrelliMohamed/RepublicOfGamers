const teams = require('../databases/models/teams')
module.exports = {
    getAllTeams:function(req, res) {
        teams.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
},
getOneTeam:function(req, res) {
    teams.getOne(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },[req.params.id])
},
addTeam:function(req, res) {
    teams.add(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },req.body)
},
deleteOneTeam:function(req, res) {
    teams.deleteOne(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },[req.params.id])
},
updateOnePost:function(req, res) {
    teams.upOne(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },[req.body,req.params.id])
},
}