module.exports = function(app) {
  // returns an object with the vote totals for chocolate, vanilla, and strawberry ice cream
  app.get('/api/votes', (req, res) => {
    
  });
  
  // adds a vote to the ice cream with the given req.body.flavor
  // creates the flavor in the database if it's not found
  app.post('/api/vote', userController.requireAuth, (req, res) => {
    
  });
}

