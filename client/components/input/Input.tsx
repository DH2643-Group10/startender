import React from 'react'
//ska göras HoC kompatibel
//component used in various places where input is used, e.g (searching for drinks, login, adding your own drinks etc..)
const Input = ({...props}) => {
    return (
        <input {...props} />
    )
}

export default Input
