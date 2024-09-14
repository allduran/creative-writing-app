import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ onClick, label }) => {
    return (
        <button className="custom-btn" onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default Button