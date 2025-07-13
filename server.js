const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const COUNT_FILE = path.join(__dirname, 'visitorCount.json');

app.use(cors());
app.use(express.json());

// Helper to read count
function readCount() {
  try {
    if (!fs.existsSync(COUNT_FILE)) {
      fs.writeFileSync(COUNT_FILE, JSON.stringify({ count: 1250 }));
    }
    const data = fs.readFileSync(COUNT_FILE);
    return JSON.parse(data).count;
  } catch (e) {
    return 1250;
  }
}

// Helper to write count
function writeCount(count) {
  fs.writeFileSync(COUNT_FILE, JSON.stringify({ count }));
}

// GET visitor count
app.get('/api/visitor-count', (req, res) => {
  const count = readCount();
  res.json({ count });
});

// POST increment visitor count
app.post('/api/visitor-count', (req, res) => {
  let count = readCount();
  count += 1;
  writeCount(count);
  res.json({ count });
});

app.listen(PORT, () => {
  console.log(`Visitor counter API running on port ${PORT}`);
});
