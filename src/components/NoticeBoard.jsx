// src/components/NoticeBoard.jsx
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './NoticeBoard.css'; // Import the custom CSS for animations

const notices = [
  "Notice 1: School will remain closed on Friday.",
  "Notice 2: Parent-teacher meeting on Saturday.",
  "Notice 3: New admissions open from next month.",
  "Notice 4: Annual sports day next week.",
  "Notice 5: Science exhibition on coming Monday.",
  "Notice 1: School will remain closed on Friday.",
  "Notice 2: Parent-teacher meeting on Saturday.",
  "Notice 3: New admissions open from next month.",
  "Notice 4: Annual sports day next week.",
  "Notice 5: Science exhibition on coming Monday.",
];

const NoticeBoard = () => {
  return (
    <div className="p-8 bg-black text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Notice Board</h2>
      <TransitionGroup className="notice-list">
        {notices.map((notice, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="notice"
          >
            <p className="mb-2">{notice}</p>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default NoticeBoard;
