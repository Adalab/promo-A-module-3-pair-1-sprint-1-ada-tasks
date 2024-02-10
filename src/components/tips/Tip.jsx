import PropTypes from 'prop-types';

function Tip({ icon, altText, children }) {
  return (
    <>
      <img src={icon} alt={altText} />
      <p>
        {children}
      </p>
    </>
  );
}

Tip.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default Tip;
