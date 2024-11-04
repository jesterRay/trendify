import {z} from "zod";

export const UserValidation = z.object({
    profile_pic: z.string().url(),
    name: z.string()
            .min(3,"Name must be atleast 3 letters")
            .max(30,"Name must not be longer then 30 letters"),
    username: z.string()
                .min(3,"Username must be atleast 3 letters")
                .max(30,"Username must not be longer then 30 letters"),
    bio: z.string()
        .min(3,"Bio must be atleast 3 letters")
        .max(1000,"Bio must not be longer then 30 letters")
})


export type User = z.infer<typeof UserValidation>