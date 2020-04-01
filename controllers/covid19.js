const covid19Router = require("express").Router();
const India = require("../models/india");
const World = require("../models/world");

covid19Router.get("/", async (req, res) => {
  const data1 = await India.find({ State: "India" });
  const data2 = await World.find({ Country: "World" });
  res.json([data1, data2]);
});

covid19Router.get("/India", async (req, res) => {
  const states = await India.find({});
  res.json(states.map(state => state.toJSON()));
});

covid19Router.get("/India/:state", async (req, res) => {
  let stateToFind = req.params.state;
  const state = await India.find({ State: stateToFind });
  if (state) res.json(state);
  else res.status(404).end();
});

covid19Router.get("/World", async (req, res) => {
  const countries = await World.find({});
  res.json(countries.map(country => country.toJSON()));
});

covid19Router.get("/World/:country", async (req, res) => {
  let countryToFind = req.params.country;
  const country = await World.find({ Country: countryToFind });
  if (country) res.json(country);
  else res.status(404).end();
});

module.exports = covid19Router;
