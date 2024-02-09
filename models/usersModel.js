const mongoose=require('mongoose');

const mydb = process.env.DATABASE.replace('<l0Jtw2X5fW9IB873>',process.env.DATABASE_PASSWORD);


module.export = mongoose;   // optionally export the mongoose instance for reuse in other parts
