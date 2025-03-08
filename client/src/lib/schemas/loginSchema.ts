import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters'
    })
});
// Gives us the type we can use inside our forms
export type LoginSchema = z.infer<typeof loginSchema>