import React from 'react';

export default function PostDate({date}) {
    const dateObj = new Date(date);
    const formatted =  dateObj.getUTCMonth()+1 + "/" + dateObj.getUTCDate() + "/" + dateObj.getUTCFullYear();
    return (
        <div>
            {formatted}
        </div>
    )
}
