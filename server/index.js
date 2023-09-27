const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());

app.get('/fetch-radio-data', async (req, res) => {
  try {
    const response = await fetch('https://onair.radioapi.io/thisisgo/go/onair.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
