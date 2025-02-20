import { db } from "./server/db";

await db.user.create({
    data:{
        emailAddress: 'helo@gmail.com',
        firstName: 'helo',
        lastName: 'hi',

    }
})