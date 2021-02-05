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
        return response(res, 'Login successfully', { data: user })
      }
    } catch (e) {
      return response(res, e.message, {}, 500, false)
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params
      const results = await User.findByPk(id)

      return response(res, `User with id ${id}`, { data: results })
    } catch (e) {
      console.log(e)
      return response(res, e.message, {}, 500, false)
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params
      const { name } = req.body
      await User.update({ name }, { where: { id } })
      return response(res, 'Update successfully')
    } catch (e) {
      return response(res, e.message, {}, 500, false)
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const find = await User.findByPk(id)
      if (!find) {
        return response(res, 'User not found', {}, 404, false)
      }
      await User.destroy({ where: { id } })

      return response(res, 'Delete user successfully')
    } catch (e) {
      return response(res, e.message, {}, 500, false)
    }
  }
}
