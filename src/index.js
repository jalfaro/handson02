const app = require('./config/server');
require('./app/test')(app);

app.listen(8085, () => console.log("Corriendo en puerto 8085"));