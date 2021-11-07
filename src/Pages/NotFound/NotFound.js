import React from 'react';

const NotFound = () => {
    return (
        <div className="w-100">
            <h3 className="text-center my-3 text-color-second">You Entered A Wrong URL</h3>
            <img className="w-100" src="./404.gif" alt=""  />
        </div>
    );
};

export default NotFound;