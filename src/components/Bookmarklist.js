import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
const BookmarkList = ({ userId }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getbookmarks/${userId}`);
        setBookmarks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
    };

    if (userId) {
      fetchBookmarks();
    }
  }, [userId]);

  const handleRemoveBookmark = async (bookmarkId) => {
    try {
      await axios.delete(`http://localhost:5000/api/removebookmark/${bookmarkId}`);
      const response = await axios.get(`http://localhost:5000/api/getbookmarks/${userId}`);
      console.log(response.data);
      setBookmarks(response.data);
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  };
  console.log(bookmarks);
  return (
    <div>
      <h1>Bookmark List</h1>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark._id}>
            {bookmark.name} by {bookmark.author} {bookmark.price}
            <button onClick={() => handleRemoveBookmark(bookmark._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <Link to='/home'>
            <button className='ebut'>Explore</button>
          </Link>
    </div>
  );
};

export default BookmarkList;
