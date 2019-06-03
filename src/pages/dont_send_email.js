import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import dont_send_email from '../assets/images/dont_send_email.png'

const linkDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const linkStyle = {
  // color: "red",
  border: "solid black 1px",
  width: "20%",
  margin: "0 1%",
  textAlign: "center"
}

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={dont_send_email} alt="Chad Jemmett" /></span>
            <h2>Don't Send that Email</h2>
            <p>This is a React app with a Node backend. This app takes the user's message and analyzes the emotional tone of the message. It uses the IBM Watson API to do the analysis. I worked on a team of six people to get this app completed in five weeks. The most challenging and intersesting thing was implementing the API. We used the IBM Watson API to analyze the tone of email or text messages.ue leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
            <p>Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.</p>
            <div style={linkDiv}>
            <a style={linkStyle} href="https://github.com/Lambda-School-Labs/dont-send-that-email">Github</a>
            <a style={linkStyle} href="https://dont-send-that-email.netlify.com/">Live Site</a>
            <a style={linkStyle} href="https://github.com/Lambda-School-Labs/dont-send-that-email/pulls?q=is%3Apr+author%3Aceejaay+is%3Aclosed">Pull Requests</a>
            </div>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Generic
