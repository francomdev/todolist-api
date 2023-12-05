import mongoose from 'mongoose'

const itemSchema = {
  item: String,
  category: { type: String, lowercase: true },
  done: Boolean
}

const Item = mongoose.model('Item', itemSchema)

export class ItemModel {
  static async getAll ({ category }) {
    const filterByCategory = await Item.find({ category: `${String(category).toLowerCase()}` })
    if (filterByCategory.length > 0) return filterByCategory
    const items = await Item.find()
    return items
  }

  static async create ({ input }) {
    const newItem = new Item({
      ...input.data,
      checked: false
    })
    try {
      await newItem.save()
      return true
    } catch (error) {
      return false
    }
  }

  static async update ({ id, input }) {
    const update = { ...input.data }
    const filter = { _id: id }
    try {
      const newItem = await Item.findOneAndUpdate(filter, update)
      return newItem
    } catch (error) {
      return false
    }
  }

  static async delete ({ id }) {
    const deleted = await Item.findOneAndDelete({ _id: id })
    return deleted
  }
}
