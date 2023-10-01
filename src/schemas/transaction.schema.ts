import z from "zod";

const transactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  option: z.enum(["Entradas", "Saídas"]).optional(),
  created_at: z.date(),
});

export { transactionSchema };
