import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingParis from '../components/BannerLandingParis'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const LandingParis = (props) => (
    <Layout>
        <Helmet>
            <title>Paris</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLandingParis />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Paris only</h2>
                    </header>
                    <p>THIS IS A P</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/parisCulture" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Culture</h3>
                            </header>
                            <p>Blip on culture experience, expecations.</p>
                            <ul className="actions">
                                <li><Link to="/parisCulture" className="button">Read More</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/parisCuisine" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cuisine</h3>
                            </header>
                            <p>Short blip about food</p>
                            <ul className="actions">
                                <li><Link to="/parisCuisine" className="button">Learn more</Link></li>
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
                                <h3>Jounrey</h3>
                            </header>
                            <p>Blip on itinerary</p>
                            <ul className="actions">
                                <li><Link to="/parisJourney" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default LandingParis
