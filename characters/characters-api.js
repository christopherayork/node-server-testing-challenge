const express = require('express');
const router = express.Router();
const charAPI = require('./models/character-model');
const errorWrapper = require('../handlers/errorWrapper');

// write endpoints
router.get('/', errorWrapper(async (req, res) => {
  let chars = await charAPI.find();
  if(chars) res.status(200).json(chars);
  else res.status(404).json({ message: 'Could not find resource' });
}));

router.get('/:id', errorWrapper(async (req, res) => {
  let id = req.params.id;
  let [char] = charAPI.findByID(id);
  if(char) res.status(200).json(char);
  else res.status(400).json({ message: 'Could not find resource' });
}));

router.get('/:name', errorWrapper(async (req, res) => {
  let name = req.params.name;
  let [char] = charAPI.findByName(name);
  if(char) res.status(200).json(char);
  else res.status(400).json({ message: 'Could not find resource' });
}));

router.post('/', errorWrapper(async (req, res) => {
  let char = req.body;
  let id = await charAPI.insert(char).first();
  if(!id) res.status(401).json({ message: 'Could not insert character' });
  else res.status(201).json({ message: 'Character added', id });
}));

router.put('/:id', errorWrapper(async (req, res) => {
  let id = req.params.id;
  let updates = req.body;
  let [updated] = await charAPI.update(id, updates);
  if(updated) res.status(200).json({ message: 'Character updated', id: updated });
  else res.status(400).json({ message: 'Could not update character' });
}));

router.delete('/:id', errorWrapper(async (req, res) => {
  let id = req.params.id;
  let removed = await charAPI.remove(id);
  if(removed) res.status(200).json({ message: 'Removed character', character: removed });
  else res.status(400).json({ message: 'Could not remove character' });
}));


module.exports = router;


