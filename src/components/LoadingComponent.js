import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12 text-center align-self-center">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};