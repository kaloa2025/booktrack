const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmarkModel');

router.post('/addbookmark', async (req, res) => {
  try {
    const { userId, name, author, price } = req.body;
    const existingBookmark = await Bookmark.findOne({ userId});

    if (existingBookmark) {
      return res.json({message: 'Bookmark already exists for this user and book.' });
    }

    const newBookmark = new Bookmark({
      userId,
      name,
      author,
      price,
    });
    await newBookmark.save();
    res.json({ success: true});

  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

router.get('/getbookmarks/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const bookmarks = await Bookmark.find({ userId:userId });
    res.json(bookmarks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
