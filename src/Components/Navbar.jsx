import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            img:"https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-0/p206x206/555769_10151266620092927_706690383_n.jpg?_nc_cat=103&_nc_sid=dd7718&_nc_ohc=1pejw86iMjcAX-MCFOs&_nc_ht=scontent-bos3-1.xx&_nc_tp=6&oh=221d4626126cfb17d3caa810051066cd&oe=5E969A2D",
        }
    }

    render() {
        // const { img} = this.state
        return(
            <div className='nav-bar'>
                <nav>
                    <h1 className='name'>Johanne Enama</h1>
                    <Link className='link1' to='/'>HomePage</Link> {" "}
                    <Link className='link2' to='/about'>About</Link> {" "}
                    <Link className='link3' to='/skills'>Skills</Link> {" "}
                    <Link className='link4' to='/projects'>Projects</Link>
                </nav>

                 {/* <img className='image' src= {img} alt='me'/> */}
                 {/* <h1 className='name'>Johanne Enama</h1> */}
            </div>
        )
    }
}

export default Navbar