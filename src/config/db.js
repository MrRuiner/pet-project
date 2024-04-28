import { Sequelize } from "sequelize";

export const db = new Sequelize('forProject', 'postgres', '123456789', {
    host: "localhost",
    dialect: "postgres"
})

// export const db = new Sequelize('postgres://xxahrsyl:NwoEti0Wzux6GQGHuD6WQA3sd42MzFSz@rain.db.elephantsql.com/xxahrsyl')

//'postgresql://uycdtwhnbk2wjrjd9t1a:tooXL20e6O1trocUJZgQ26shKa7IB2@bzkvoruioepjr1ql3lmn-postgresql.services.clever-cloud.com:50013/bzkvoruioepjr1ql3lmn')
