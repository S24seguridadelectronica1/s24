import PropTypes from 'prop-types';

const ReusableButton = ({ children, variant = "primary", className = "", to, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

ReusableButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};

export default ReusableButton;
