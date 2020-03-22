const covid19Router = require("express").Router();
const State = require("../models/state");

covid19Router.get("/", async (req, res) => {
  const states = await State.find({});
  res.json(states.map(state => state.toJSON()));
});

covid19Router.get("/:state", async (req, res) => {
  let stateToFind = req.params.state;

  if (req.params.state === "india" || req.params.state === "India")
    stateToFind = "Total number of confirmed cases in India";
  console.log(stateToFind);
  const state = await State.find({ State: stateToFind });
  console.log(state);
  if (state) res.json(state);
  else res.status(404).end();
});

module.exports = covid19Router;
