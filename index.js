const express = require('express');
const app = express();

require('./routes/homeRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
