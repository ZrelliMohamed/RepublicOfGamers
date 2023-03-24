const users = require('../databases/models/users')

module.exports = {
    getAllUsers:function(req, res) {
        users.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
},
addUser: function(req, res) {
    users.add(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },req.body)
},
deleteOneUser: function(req, res) {
    users.deleteOne(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },[req.params.id])
},
getOneUser: function(req, res) {
    users.getOne(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },[req.params.id])
},
updateOneUser:function(req, res) {
    users.upOne(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },[req.body,req.params.id])
},
getTeam:function(req, res) {
    users.oneTeam(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    },[req.params.id])
},
}