require("dotenv").config();
const app = require("./src/app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidos esta de pé na porta ${port}`);
});
