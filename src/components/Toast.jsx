import React, { useState, useEffect } from 'react';
import './Toast.css';

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success', duration = 3000) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, duration);
  };

  return { toast, showToast };
}

function Toast({ message, type = 'success' }) {
  if (!message) return null;

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <span className="toast-icon">
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'info' && 'ℹ'}
        </span>
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
}

export default Toast;
