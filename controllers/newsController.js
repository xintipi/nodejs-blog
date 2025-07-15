// controllers/newsController.js

class NewsController {
  // GET /news
  static list(req, res) {
    res.send('News list - stub');
  }

  // GET /news/:id
  static detail(req, res) {
    res.send('News detail - stub');
  }

  // POST /news
  static create(req, res) {
    res.send('News create - stub');
  }

  // PUT /news/:id
  static update(req, res) {
    res.send('News update - stub');
  }

  // DELETE /news/:id
  static delete(req, res) {
    res.send('News delete - stub');
  }
}

module.exports = NewsController;
