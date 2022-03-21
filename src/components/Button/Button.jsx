import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';
import { allSongs } from '../../constants/routes';

function Button() {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(allSongs)} className="sync-button">sync</button>
    </div>
  );
}
export default Button;
