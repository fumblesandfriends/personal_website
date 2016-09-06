import React from 'react';
import SocialBar from './sections/social';
import Bio from './sections/bio';
import Blog from './sections/blog';
import Footer from './sections/footer';
import Intro from './sections/intro';

export default class Home extends React.Component {
  render() {
    return (
      <section className="index-page">
        <Intro/>
        <SocialBar/>
        <Bio/>
        <Blog/>
        <Footer/>
      </section>
    );
  }
}
