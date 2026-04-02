import "dotenv/config"
import app from "./src/app.js"
import connectToDB from "./src/config/database.js"
// import { testAi } from "./src/services/ai.service.js"

const PORT=process.env.PORT || 8000

connectToDB()

// testAi()

app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`);
})