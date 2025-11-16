import React, { use } from 'react';

const AllSlugs = ({params}) => {
    const segment = use(params)
    console.log("segment",segment);
    return (
        <div>
            catch all segment
        </div>
    );
};

export default AllSlugs;