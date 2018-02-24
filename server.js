const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const indexHTML = (() => {
        return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

app.use('/dist', express.static(path.resolve(__dirname, './dist')));
//this returns all of the static modules from the dist folder.

require('./build/dev-server')(app);

app.get('*', (req, res) => {
    res.write(indexHTML);
res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});