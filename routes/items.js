import { Router } from 'express'
import { ItemController } from '../controllers/item.js'

export const itemsRouter = Router()

itemsRouter.get('/', ItemController.getAll)
itemsRouter.post('/', ItemController.create)

itemsRouter.patch('/:id', ItemController.update)
itemsRouter.delete('/:id', ItemController.delete)
