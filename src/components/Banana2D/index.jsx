'use client';
import React, { useState } from 'react';

export default function Banana2D() {
    const [image, setImage] = useState('/legacy-assets/images/banana-ice-s.png');

    const handleMouseEnter = () => {
        setImage('/legacy-assets/images/banana.png');
    };

    const handleMouseLeave = () => {
        setImage('/legacy-assets/images/banana-ice-s.png');
    };

    return (
        <>
            {image === '/legacy-assets/images/banana.png' ? (
                <img
                    src="/legacy-assets/images/freeze-text.png"
                    alt="freeze text"
                    width={150}
                    height={150}
                />
            ) : (
                <div className='w-[150px] h-[150px]' />
            )}
            <img
                className="mb-32"
                src={image}
                alt="main banana"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                width={150}
                height={150}
            />
        </>
    );
}
