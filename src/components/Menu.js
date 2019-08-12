import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingJapan">Buenos Aires</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingJapan">Hong Kong</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingJapan">Japan</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingMexicoCity">Mexico City</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingParis">Paris</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingJapan">Reykjavik</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Planning your trip</Link></li>
            </ul>

        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
