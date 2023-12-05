import { ItemModel } from '../models/item.js'
import { validateItem, validatePartialItem } from '../schemas/item.js'

export class ItemController {
  static async getAll (req, res) {
    const { category } = req.query
    const result = await ItemModel.getAll({ category })
    if (result.length > 0) return res.status(200).json(result)
    res.status(200).json({ message: 'There are no items yet.' })
  }

  static async create (req, res) {
    const input = validateItem(req.body)
    const created = await ItemModel.create({ input })
    if (created) return res.status(201).json({ message: 'Item created.' })
    return res.status(400).json({ error: 'Error creating new item.' })
  }

  static async update (req, res) {
    const { id } = req.params
    const input = validatePartialItem(req.body)
    const updated = await ItemModel.update({ id, input })
    if (updated) return res.status(200).json(updated)
    return res.status(400).json({ error: 'Error updating item' })
  }

  static async delete (req, res) {
    const { id } = req.params
    const deleted = await ItemModel.delete({ id })
    if (deleted) return res.status(200).json({ message: 'Item deleted', deleted })
    return res.status(400).json({ error: 'Item not found' })
  }
}
