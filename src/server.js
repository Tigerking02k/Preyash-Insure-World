const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const COUNT_FILE = path.join(__dirname, '..', 'data', 'visitorCount.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Configure CORS for security
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://preyashinsurance.com' 
    : '*'
}));

app.use(express.json());

// Helper to read count
function readCount() {
  try {
    if (!fs.existsSync(COUNT_FILE)) {
      fs.writeFileSync(COUNT_FILE, JSON.stringify({ count: 0 }));
    }
    const data = fs.readFileSync(COUNT_FILE);
    return JSON.parse(data).count;
  } catch (e) {
    return 0;
  }
}

// Helper to write count
function writeCount(count) {
  fs.writeFileSync(COUNT_FILE, JSON.stringify({ count }));
}

// GET visitor count
app.get('/api/visitor-count', (req, res) => {
  try {
    const count = readCount();
    res.json({ count });
  } catch (error) {
    console.error('Error reading visitor count:', error);
    res.status(500).json({ error: 'Failed to read visitor count' });
  }
});

// POST to increment visitor count
app.post('/api/visitor-count', (req, res) => {
  try {
    let count = readCount();
    count += 1;
    writeCount(count);
    res.json({ count });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    res.status(500).json({ error: 'Failed to update visitor count' });
  }
});

app.listen(PORT, () => {
  console.log(`Visitor counter API running on port ${PORT}`);
});
