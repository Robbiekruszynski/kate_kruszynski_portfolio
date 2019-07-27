import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const ParisCulture = (props) => (
    <Layout>
        <Helmet>
            <title>Culture in Japan</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Culture</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>V I B E S .</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ParisCulture
