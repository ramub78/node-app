const express = require("express");
const router = express.Router();

const {
  listUsers,
  createUser,
  updateUser,
  getUserDetailsById,
  deleteUser
} = require("../controllers/userController");

/**@route GET api/v1/users
 * @desc Get list of users
 * @access Public */

router.get("/", listUsers);

/**@route POST api/v1/users
 * @desc Create new user
 * @access Public  */
router.post("/", createUser);

/**@route PUT api/v1/users/id
 * @desc Update user
 * @access Public */
router.put("/:id", updateUser);

/**@route GET api/v1/users/id
 * @desc Get user details by id
 * @access Public  */
router.get("/:id", getUserDetailsById);

/**@route Delete api/v1/users/id
 * @desc Delete user details by id
 * @access Public  */
router.delete("/:id", deleteUser);

module.exports = router;
