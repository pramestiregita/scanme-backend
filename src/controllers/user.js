const { User } = require('../models')
const response = require('../helpers/response')

module.exports = {
  create: async (req, res) => {
    try {
      const { name } = req.body
      if (!name) {
        return response(res, 'Please insert your name!', {}, 400, false)
      }
      const [user, created] = await User.findOrCreate({ where: { name } })

      if (user || created) {
        return response(res, 'Login successfully', { data: user.name }, 200)
      }
    } catch (e) {
      return response(res, e.message, {}, 500, false)
    }
  }
}
