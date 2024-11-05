import React from 'react';
import bannerImg from '../../books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-40">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                <div className='w-1/2 space-y-6'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;