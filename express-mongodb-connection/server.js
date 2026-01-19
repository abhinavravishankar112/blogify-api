
// 1. Load environment variables FIRST
require('dotenv').config();

// 2. Import required packages
const express = require('express');
const mongoose = require('mongoose');

// 3. Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// 4. Middleware to parse JSON requests
app.use(express.json());

// 5. Get MongoDB connection string
const mongoURI = process.env.MONGODB_URI;

// 6. Validate MongoDB URI
if (!mongoURI) {
  console.error('❌ ERROR: MONGODB_URI is not defined in .env file');
  process.exit(1);
}

// 7. Connect to MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  });

// 8. Monitor MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('📡 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ Mongoose disconnected from MongoDB');
});

// 9. Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('🔌 MongoDB connection closed due to app termination');
  process.exit(0);
});

// 10. Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running!',
    database:
      mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

app.get('/status', (req, res) => {
  const states = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'];
  const currentState = mongoose.connection.readyState;

  res.json({
    databaseState: states[currentState],
    readyState: currentState,
    databaseName: mongoose.connection.name || 'Not Available'
  });
});

// 11. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
