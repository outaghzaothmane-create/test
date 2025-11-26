import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ImageGallery = ({ images = [] }) => {
    const { theme } = useTheme();
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Ensure we have at least one image (placeholder if empty)
    const displayImages = images.length > 0 ? images : ['/placeholder.jpg'];

    const handleMouseMove = (e) => {
        if (!isZoomed) return;
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div
                className={`relative aspect-square rounded-apple-lg overflow-hidden cursor-zoom-in ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                    }`}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
            >
                <img
                    src={displayImages[selectedImage]}
                    alt="Product"
                    className={`w-full h-full object-cover transition-transform duration-200 ${isZoomed ? 'scale-150' : 'scale-100'
                        }`}
                    style={{
                        transformOrigin: isZoomed ? `${mousePosition.x}% ${mousePosition.y}%` : 'center center'
                    }}
                />
                {!isZoomed && (
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">
                        Hover to Zoom
                    </div>
                )}
            </div>

            {/* Thumbnails */}
            {displayImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                    {displayImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`aspect-square rounded-apple overflow-hidden border-2 transition-all ${selectedImage === idx
                                    ? theme === 'dark'
                                        ? 'border-white'
                                        : 'border-black'
                                    : 'border-transparent opacity-70 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
