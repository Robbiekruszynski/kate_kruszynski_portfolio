import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingJapan from '../components/BannerLandingJapan'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const LandingTwo = (props) => (
    <Layout>
        <Helmet>
            <title>Tokyo</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLandingJapan />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Japan only</h2>
                    </header>
                    <p>THIS IS A P</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/japanCulture" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Culture</h3>
                            </header>
                            <p>Blip on culture experience, expecations.</p>
                            <ul className="actions">
                                <li><Link to="/japanCulture" className="button">Read More</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/japanCuisine" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cuisine</h3>
                            </header>
                            <p>Short blip about food</p>
                            <ul className="actions">
                                <li><Link to="/japanCuisine" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>X</h3>
                            </header>
                            <p>Blip on X</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default LandingTwo
