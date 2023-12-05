import z from 'zod'

const itemSchema = z.object({
  item: z.string({
    invalid_type_error: 'Item must be a string',
    required_error: 'Item is required'
  }),
  category: z.string({
    invalid_type_error: 'Category must be a string',
    required_error: 'Category is required'
  })
})

export function validateItem (object) {
  return itemSchema.safeParse(object)
}

export function validatePartialItem (object) {
  return itemSchema.partial().safeParse(object)
}
