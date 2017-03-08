import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';
import Footer from 'footer';
import Section from 'section';
import Button from 'button';
import {FaIcon} from 'misc';

class App extends React.Component {
  render(){
    return <div>
      <Navbar />
      <Header>
        <div className="grid">
          <div className="col sm-12">
            <div className="title">
              <div className="inner">
                <h1>Dev<span className="devx-header-x">X</span></h1>
                <h3>Moonshots for UCLA</h3>
                <Button cta>Mailing List</Button>
                <Button cta>Apply</Button>
              </div>
            </div>
          </div>
          <div className="col sm-12 image-aside">
            <img src="/assets/main_graphic.png"/>
          </div>
        </div>
      </Header>
      <Section background="/assets/about_us_bg.png">
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="head">
                <h1 className="title">About Us</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis urna. Mauris id fringilla sapien. Nam eleifend malesuada tristique. Suspendisse maximus interdum posuere. In ipsum sapien, hendrerit non dapibus et, luctus eu sem. Suspendisse sed ipsum erat.</p>
              <p>Aenean maximus purus ultricies libero fermentum, efficitur facilisis dolor pharetra. Praesent et magna ac nibh ultrices efficitur. Proin congue euismod lobortis. Donec eget egestas purus. Sed dignissim nunc arcu, ullamcorper viverra libero interdum convallis. Pellentesque id interdum lacus. Praesent tempus, enim vel finibus porttitor, sem massa scelerisque justo, id suscipit lorem mauris vel sem.</p>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/about_us.png"/>
          </div>
        </div>
      </Section>
      <Section invert background="/assets/initiatives_bg.png">
        <div className="grid">
          <div className="col md-12 image-aside">
            <img src="/assets/initiatives.png"/>
          </div>
          <div className="col md-12">
            <div className="blurb">
              <div className="head">
                <h1 className="title">Initiatives</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis urna. Mauris id fringilla sapien. Nam eleifend malesuada tristique. Suspendisse maximus interdum posuere. In ipsum sapien, hendrerit non dapibus et, luctus eu sem.</p>
              <p>Aenean maximus purus ultricies libero fermentum, efficitur facilisis dolor pharetra. Praesent et magna ac nibh ultrices efficitur. Proin congue euismod lobortis. Donec eget egestas purus. Sed dignissim nunc arcu, ullamcorper viverra libero interdum convallis. Praesent tempus, enim vel finibus porttitor, sem massa scelerisque justo, id suscipit lorem mauris vel sem.</p>
              <Button cta>Request</Button>
            </div>
          </div>
        </div>
      </Section>
      <Section background="/assets/join_team_bg.png">
        <div className="grid">
          <div className="col md-12">
            <div className="blurb">
              <div className="head">
                <h1 className="title">Join Us</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis urna. Mauris id fringilla sapien. Nam eleifend malesuada tristique. Suspendisse maximus interdum posuere. In ipsum sapien, hendrerit non dapibus et, luctus eu sem. Suspendisse sed ipsum erat.</p>
              <p>Aenean maximus purus ultricies libero fermentum, efficitur facilisis dolor pharetra. Praesent et magna ac nibh ultrices efficitur. Proin congue euismod lobortis. Donec eget egestas purus. Sed dignissim nunc arcu, ullamcorper viverra libero interdum convallis. Pellentesque id interdum lacus.</p>
              <p>Praesent tempus, enim vel finibus porttitor, sem massa scelerisque justo, id suscipit lorem mauris vel sem.</p>
              <Button cta>Apply</Button>
            </div>
          </div>
          <div className="col md-12 image-aside">
            <img src="/assets/join_team.png"/>
          </div>
        </div>
      </Section>
      <Footer>
        <div className="info">
          <h1>Dev<span className="devx-footer-x">X</span></h1>
          <div className="icons">
            <a href="#"><FaIcon icon="facebook"/></a>
            <a href="#"><FaIcon icon="github"/></a>
            <a href="#"><FaIcon icon="envelope"/></a>
            <a href="#"><FaIcon icon="youtube"/></a>
          </div>
          <small>Copyright &copy; 2017 UCLA DevX</small>
        </div>
      </Footer>
    </div>;
  }
}

render(
  <App />,
  document.getElementById('mount')
);
