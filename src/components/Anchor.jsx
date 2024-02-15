import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

/* 
    href = string //? indica la ruta del link
    content = string //? Es el contenido del link
*/

const Anchor = (props) => {
    // console.log(props.children)
    return (
        <NavLink to={props.href} >{props.text}</NavLink>
    )
}

Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.any
}

export default Anchor