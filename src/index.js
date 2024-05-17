import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()

    .then(() => {
        app.on('error', (error) => {
            console.log(" error while connecting with mongodb " + error)
        }),
            app.listen(process.env.PORT || 8000, () => {
                console.log(`App is running on port ${process.env.PORT}`)
            })
    })
    .catch((error) => {
        console.log(" error while connecting with mongodb " + error)
    })