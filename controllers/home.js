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
    /*createTask: async (req, res) => {
    
        const todoTask = new nbaTask(
            {
                player_name: req.query.player_name,
                team_abbreviation: req.query.team_abbreviation,
                pts: req.query.pts,
                reb: req.body.reb,
                ast: req.body.ast

            });
        try {
            await todoTask;
            console.log(todoTask)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }*/
    searchTask: async(req,res)=>{
        try {
            const tasks = await
            nbaTask.find({player_name:req.query.player_name});
            console.log(req.query.player_name)
            res.render('pages/search', { data: tasks });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    createTask: async (req, res) => {
    
        try {
            var books = new nbaTask({
                player_name:req.body.player_name,
                pts: req.body.pts
            });
            books.save((err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.redirect('/');
                }
            })
     } catch (error) {
         console.log(error);
     }
        }
    }
    /*get('/search',(req,res)=>{
    a    try {
                 bookModel.find({$or:[{author:{'$regex':req.query.dsearch}},{books:{'$regex':req.query.dsearch}}]},(err,data)=>{
                     if(err){
                         console.log(err);
                     }else{
                         res.render('pages/home',{data:data});
                     }
                 })
        } catch (error) {
            console.log(error);
        }
    });
    
.post('/',(req,res)=>{
        try {
               var books = new bookModel({
                   author:req.body.author,
                   books:req.body.book
               });
               books.save((err,data)=>{
                   if(err){
                       console.log(err)
                   }else{
                       res.redirect('/');
                   }
               })
        } catch (error) {
            console.log(error);
        }
    });*/
