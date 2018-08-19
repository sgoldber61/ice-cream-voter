const Flavor = require('./Flavor.js');

module.exports = function(app) {
  // returns an object with the vote totals for chocolate, vanilla, and strawberry ice cream
  app.get('/api/votes', (req, res) => {
    Flavor.find({}, (err, items) => {
      if (err) return res.status(500).send(err);
      
      res.status(200).send(items)
    })
  });
  
  // adds a vote to the ice cream with the given req.body.flavor
  // creates the flavor in the database if it's not found
  app.post('/api/vote', (req, res) => {
    const flavor = req.body.flavor;
    
    Flavor.findOneAndUpdate({flavor}, {$inc: {likes: 1}}, {upsert: true, new: true}, (err, item) => {
      if (err) return res.status(500).send(err);
      
      res.status(200).send(item);
    });
  });
}

