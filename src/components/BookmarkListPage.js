// BookmarkListPage.js
import React from 'react';
import BookmarkList from './Bookmarklist';

const BookmarkListPage = ({ userId }) => {
  return (
    <div>
      <BookmarkList userId={userId} />
    </div>
  );
};

export default BookmarkListPage;
