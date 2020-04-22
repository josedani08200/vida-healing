import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic05 from '../assets/images/pic05.jpg'

const Family = () => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Family Page" />
        </Helmet>
        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img src={pic05} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h3>We Specialize in Applied Behavior Analysis (ABA), Individual Therapy, Family Therapy, and Marriage and Couples Therapy. Please Reach out to Vida Healing Today to Schedule an Appointment!</h3>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </Layout>
)

export default Family
