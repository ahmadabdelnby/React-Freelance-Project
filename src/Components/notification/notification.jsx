import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import "./notification.css";

function NotificationBell({ userId }) {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/Freelancing/api/v1/notifications/${userId}`)
      .then(res => res.json())
      .then(data => setNotifications(data))
      .catch(() => setNotifications([]));
  }, [userId]);

  return (
    <div
      className="notif-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <FaBell className="notif-icon" />

      {notifications.some(n => !n.isRead) && (
        <span className="notif-count">
          {notifications.filter(n => !n.isRead).length}
        </span>
      )}

      {open && (
        <div className="notif-dropdown">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div key={n._id} className={`notif-item ${!n.isRead ? "unread" : ""}`}>
                <p className="notif-text">{n.content}</p>

                {n.linkUrl && (
                  <a href={n.linkUrl} className="notif-link">
                    Open
                  </a>
                )}

                <span className="notif-date">
                  {new Date(n.createdAt).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <div className="notif-empty">No notifications</div>
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationBell;
