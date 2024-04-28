import express from "express";
import { engine } from "express-handlebars";
import router from "./routers/Router.js";
import path from "path";
import { db } from "./config/db.js";

const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', engine({ extname: ".hbs", runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowedProtoMethodsByDeafult: true
} }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(router)

try {
    await db.authenticate();
    console.log('Server was successufully connected to db.');
    app.listen(PORT, () => {
        console.log('Server was started at: localhost: ' + PORT);
    })
} catch {
    console.error('Unable to connect to the db.');
}
