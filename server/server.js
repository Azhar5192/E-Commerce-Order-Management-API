const require = require("express");
const dotenv = require("dotenv");


const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})