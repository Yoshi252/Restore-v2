import { z } from "zod";

const passwordValidation = new RegExp(
    /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})/
)

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(passwordValidation, {
        message: 'Password must contain 1 lowercase character, 1 uppercase character, 1 number, 1 special and be at least 6 characters'
    })
});

export type RegisterSchema = z.infer<typeof registerSchema>;

// one made by Steven Smith - ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$