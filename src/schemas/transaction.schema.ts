import z from 'zod'

const transactionSchema = z.object({
  id: z.string(),
  description: z.string(),
  price: z.string(),
  category: z.string(),
  option: z.enum(['Income', 'Expenses']).optional(),
  created_at: z.date(),
})

export { transactionSchema }
