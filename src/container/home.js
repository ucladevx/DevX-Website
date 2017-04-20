import React from 'react';
import {Link} from 'react-router-dom';

import Config from 'config';

import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Button from 'button';

import {Anchor} from 'misc';


class Home extends React.Component {
  render(){
    return <div>
      <Header>
        <div className="grid">
          <div className="col sm-12">
            <div className="title">
              <div className="inner">
                <h1>Dev<span className="devx-x">X</span></h1>
                <h4>Moonshots for UCLA</h4>
                <Anchor ext href={Config.url.mailingList}><Button cta>Mailing List</Button></Anchor>
                <Anchor ext href={Config.url.apply}><Button cta>Apply</Button></Anchor>
              </div>
            </div>
          </div>
          <div className="col sm-12 image-aside">
            <img src="/assets/main_graphic.png"/>
          </div>
        </div>
      </Header>
      <Section background="/assets/about_us_bg.png" id="about-us">
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">About Us</h1>
                </div>
                <p>Have you ever felt that all you were learning at UCLA was theory, with little opportunities to build out practical applications?</p>
                <p>DevX is a brand new program, launched by UCLA ACM, dedicated to solving that very problem! Build out real-world projects to help tackle pressing problems frustrating the UCLA community, grow your technical skills by pairing up with experienced students, and build a network that lasts beyond graduation.</p>
              </div>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/about_us.png"/>
          </div>
        </div>
      </Section>
      <Section invert background="/assets/initiatives_bg.png" id="initiatives">
        <div className="grid">
          <div className="col md-12 image-aside">
            <img src="/assets/initiatives.png"/>
          </div>
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">Initiatives</h1>
                </div>
                <p>We focus on a wide variety of projects, but prioritize ventures that improve the college experience for UCLA students.</p>
                <p>Every quarter we will develop solutions for the most popular initiatives by the community. Submit your own requests for problems you're facing.</p>
                <Anchor ext href={Config.url.workRequest}><Button cta>Request</Button></Anchor>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section background="/assets/join_team_bg.png" id="join-team">
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="inner">
                <div className="head">
                  <h1 className="title">Join Us</h1>
                </div>
                <p>We are looking to bring talented developers, designers, and product managers every quarter!</p>
                <p>We have hired our team for the spring, if you're still interested in joining make sure to apply next quarter. Check out our current team!</p>
                <Link to="/team"><Button cta>View Team</Button></Link>
              </div>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/join_team.png"/>
          </div>
        </div>
      </Section>
      <Footer/>
    </div>;
  }
}

export default Home
