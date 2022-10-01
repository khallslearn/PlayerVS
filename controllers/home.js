const { query, Router } = require('express');
const nbaTask = require('../models/nbatask')

module.exports = {
    getIndex : async (req, res) => {
        try {
            const tasks = await
            nbaTask.find()
            res.render('index', { data: tasks });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    searchTask: async(req,res)=>{
        try {
            const tasks = await
            nbaTask.findOne({player_name:req.query.player_name});
            const task2 = await
            nbaTask.findOne({player_name:req.query.player_name2});
            console.log(req.query.player_name)
            console.log(req.query.player_name2)
            res.render('pages/search', {
                 nbaTask: tasks,
                nbaTask2: task2 });
        }catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    }
   