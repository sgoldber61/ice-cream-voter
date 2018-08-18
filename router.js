const Flavor = require('./Flavor.js');

module.exports = app => {
  // returns an object with the like totals for chocolate, vanilla, and strawberry ice cream
  app.get('/api/likes', (req, res) => {
    Flavor.find({}, (err, items) => {
      if (err) return res.status(500);
      
      res.status(200).send(items);
    });
  });
  
  // adds a like to the ice cream with the given req.body.flavor
  // creates the flavor in the database if it's not found
  app.post('/api/like', (req, res) => {
    const flavor = req.body.flavor;
    
    Flavor.findOneAndUpdate({flavor}, {$inc: {likes: 1}}, {upsert: true, new: true}, (err, item) => {
      if (err) return res.status(500);
      
      res.status(200).send(item);
    });
  });
}

