import React from 'react'
import PropTypes from 'prop-types'

/* 
    href = string //? indica la ruta del link
    content = string //? Es el contenido del link
*/

const Anchor = (props) => {
    // console.log(props.children)
    return (
        <a href={props.href}>{props.text}</a>
    )
}

Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.any
}

export default Anchor