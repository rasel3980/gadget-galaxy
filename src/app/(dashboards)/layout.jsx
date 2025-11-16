import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
            <p>dashboard list</p>
            </div>
            <div className='col-span-9'>
            {children}
            </div>
            
        </div>
    );
};

export default DashboardLayout;