// components/LazyLoadImage.js
import React from 'react';

const LazyLoadImage = ({ src, alt, style }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            style={style} 
            loading="lazy" // Enables lazy loading
        />
    );
};

export default LazyLoadImage;
