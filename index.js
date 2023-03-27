const app = require('./api/app');
require('dotenv').config();

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`server is listening on port ${port}`));
