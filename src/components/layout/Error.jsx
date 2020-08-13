import React from 'react';

const Error = ({ children }) => (
    <p className='alert'>{children}</p>
)

export default React.memo(Error);
