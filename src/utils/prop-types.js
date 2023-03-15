import PropTypes from 'prop-types';

export const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired 

})