// controllers/usersController.js

class UsersController {
  // GET /users
  static list(req, res) {
    res.send('User list - stub');
  }

  // GET /users/:id
  static detail(req, res) {
    res.send('User detail - stub');
  }

  // POST /users
  static create(req, res) {
    res.send('User create - stub');
  }

  // PUT /users/:id
  static update(req, res) {
    res.send('User update - stub');
  }

  // DELETE /users/:id
  static delete(req, res) {
    res.send('User delete - stub');
  }
}

module.exports = UsersController;
