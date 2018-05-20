const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use((req, res) => {
	res.type('text/html');
	res.status(404);
	res.send('<h2>Page is not found</h2>');
})
app.listen(port, () => console.log(`Listening on port ${port}`));
