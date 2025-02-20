"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./server/db");
await db_1.db.user.create({
    data: {
        emailAddress: 'helo@gmail.com',
        firstName: 'helo',
        lastName: 'hi',
    }
});
