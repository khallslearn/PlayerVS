const nbaTask = require('../models/nbatask')

module.exports = {
    getIndex : async (req, res) => {
        try {
            const tasks = await
            nbaTask.find()
            res.render("index.ejs", { nbaTask: tasks });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    createTask: async (req, res) => {
    
        const todoTask = new nbaTask(
            {
                player_name: req.body.player_name,
                team_abbreviation: req.body.team_abbreviation,
                pts: req.body.pts,
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
    }
}