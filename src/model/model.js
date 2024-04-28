import { db } from "../config/db.js";
import { Sequelize, DataTypes } from "sequelize";

export const User = db.define('user', {
    name: {
        type: DataTypes.TEXT
    }
})

export const Note = db.define('note', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.TEXT
    },

    content: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false
})