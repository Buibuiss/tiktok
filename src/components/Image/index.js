import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/asset/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(images.noImage);
    };
    return <img ref={ref} src={fallback || src} {...props} alt={alt} onError={handleError} />;
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
