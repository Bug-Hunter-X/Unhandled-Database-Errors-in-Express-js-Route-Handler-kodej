const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database operation using async/await ...
    const user = await db.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));