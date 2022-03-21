import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ action }) {
  return (
    <div>
      <button type="button" className={action === 'sync' ? 'sync-button action-button' : 'pop-button action-button'}>{action}</button>
    </div>
  );
}
export default Button;

Button.propTypes = {
  action: PropTypes.string.isRequired,
};
