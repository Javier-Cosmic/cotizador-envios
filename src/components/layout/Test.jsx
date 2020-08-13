import React from 'react'

function Test() {
    console.log('renderizando tst')
    return (
        <div>
            nada
        </div>
    )
}

export default React.memo(Test);
