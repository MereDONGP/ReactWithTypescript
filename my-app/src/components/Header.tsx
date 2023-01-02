import React from 'react'


interface PropInterface {
    nmae: string
}

const Header = (props: PropInterface) => {
    return <h1>{props.nmae}</h1>
}

export default Header