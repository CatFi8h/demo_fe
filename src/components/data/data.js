import React from 'react';

const Data = ({data}) => {
    return (
        <div>
            <div className="main">
                <div>We recorded Your tap to database, my friend</div>
                <div>It was recorded under number: {data.id}. Time of record: {data.time}</div>
                <div>You can tap one more time</div>
            </div>
        </div>
    );
};

export default Data;