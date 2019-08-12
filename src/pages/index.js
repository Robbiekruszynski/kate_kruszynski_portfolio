import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Kate Kruszynski"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Amterdam</h3>
                                <p>Netherlands</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Bangkok</h3>
                                <p>Thailand</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Brussels</h3>
                                <p>Belgium</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Buenos Aires</h3>
                                <p>Argentina</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Copenhagen</h3>
                                <p>Denmark</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Dubai</h3>
                                <p>United Arab Emirates</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Greece</h3>
                                <p>Balkans</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Hong Kong</h3>
                                <p>China</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>From Milan to Rome</h3>
                                <p>Italy</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Tokyo</h3>
                                <p>Japan</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>London</h3>
                                <p>England</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Maui</h3>
                                <p>Hawaii</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>


                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Mexico City</h3>
                                <p>Mexico</p>
                            </header>
                            <Link to="/landingMexicoCity" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Montreal</h3>
                                <p>Canada</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Paris</h3>
                                <p>France</p>
                            </header>
                            <Link to="/landingParis" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Reykjavik</h3>
                                <p>Iceland</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Rio de Janeiro</h3>
                                <p>Brazil</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Stockholm</h3>
                                <p>Sweden</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Zurich</h3>
                                <p>Switzerland</p>
                            </header>
                            <Link to="/landingJapan" className="link primary"></Link>
                        </article>


                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>WHERE IS THIS</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
