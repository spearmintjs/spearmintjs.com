import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import appDemo from '../assets/images/demo.png';
import accessibilityLens from '../assets/images/Acc Demo.gif';
import darkMode from '../assets/images/darkmodelogin.gif';
import docker from '../assets/images/docker.png';
import todoTest from '../assets/images/todoTest.png';
import favicon from '../assets/images/favicon.ico';
import addedfeatures from '../assets/images/panel.png';
import solidTest from '../assets/images/Run Demo.gif'
import reactTestDemo from '../assets/images/RTD.webp';
import testMenu from '../assets/images/TestMenu.png';


class Homepage extends React.Component {
  render() {
    const siteTitle = 'spearmint';

    return (
      <Layout>
        <Helmet
          title={siteTitle}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
        >
          <html lang="en" amp />
        </ Helmet>
        <section id='one' className='main style1'>
          <div className='grid-wrapper'>
            <div className='col-6 center'>
              <header className='major'>
                <h2>Create and run tests in Spearmint</h2>
                <h2>- Zero coding required</h2>
              </header>
              <p>
                Easily create, save, and run tests intuitively using Spearmint. Access your app's file directory and codebase while providing
                a fully functional in-app terminal and browser.
                
                When you're ready to continue developing your application, your Jest test files will be in your app's __tests__ folder.
              </p>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={testMenu} alt='Spearmint App Demo' />
              </span>
            </div>
          </div>
        </section>

        <section id='two' className='main style2'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <img id='todo-test' src={todoTest} alt='Code Preview Example'/>
            </div>
            <div className='col-6'>
              <header className='major'>
                <h2>A fresh take on testing</h2>
              </header>
              <p>
                Writing tests is like eating your veggies: it's something everyone knows that they
                should do, but not everyone does. Spearmint provides a simple way to write tests
                that gives you confidence your application will work in the way your users
                interact with it.
              </p>
              <p>
                Spearmint provides a user-friendly GUI for developers to easily generate tests with a few 
                clicks of a button. It dynamically converts user inputs into executable test code 
                through react-testing-library, jest, supertest, puppeteer, vue-test-utils, solid-testing-library, and axe-core. 
              </p>
              <p>
                <i>
                  Fun fact: The origin of the word “debugging” comes from Grace Hopper removing a
                  moth that was causing the Mark II Aiken Relay computer to malfunction. Did you
                  know that moths are repelled by spearmint?
                </i>
              </p>
            </div>
          </div>
        </section>

        <section id='three' className='main style1'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <header className='major'>
                <h2>Supports React, Redux, Svelte, Solid, GraphQL, Hooks, Context, Puppeteer, Endpoint, Vue, Security & Accessibility Testing</h2>
              </header>
              <p>
                Spearmint isn't just for React. Write tests for your Redux actions, async functions,
                reducers, or middleware. While you're at it, check out your hooks, context or even
                your endpoints. If you're interested in performance, utilize the Puppeteer module.
                Provide custom mock data and inputs, and you're on your way. You can also leverage the
                <a href='https://github.com/dequelabs/axe-core'> Axe-Core </a> testing library
                to verify that your application meets various 
                accessibility standards and guarantees an internet for all. If you're concerned about security, the
                <a href= 'https://github.com/snyk/snyk'> Snyk </a> 
                library has been utilized to ensure your application is up to snuff for various 
                security standards and make sure your app isn't vulnerable to malicious attacks.
              </p>
              <p>
              Spearmint provides support for SolidJS. 
              If your application is developed with Solid, you can utilize the <a href='https://github.com/solidjs/solid-testing-library'>Solid-Testing-Library</a> via Spearmint’s test generator 
              to develop, run, and export your test files, all inside of Spearmint! 
              {/* This section can be uncommented when a new docker image is generated: Additionally, Spearmint is now available on <a href='https://hub.docker.com/r/spearmintoslabs/spearmint'>Docker Hub</a> as a downloadable Docker Image to be deployed alongside your other containers. */}
              </p>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={addedfeatures} alt='Spearmint Options' />
                <br/> <br/>
                <img src={reactTestDemo} alt='svelte test' />
              </span>
            </div>
          </div>
        </section>

        <section id='four' className='main style2'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <img id='accessibility-lens' src={accessibilityLens} alt='Accessibility Lens App Demo'/>
            </div>
            <div className='col-6'>
              <header className='major'>
                <h2>Accessibility Lens - </h2>
                <h2>See your app from different perspectives</h2>
              </header>
              <p>
                Beyond testing your app for accessibility, 
                Browser view's "Accessibility Lens" allow you to test out your application's usability as if you didn't have
                access to a mouse, or have a color/hearing mismatch.
              </p>
            </div>
          </div>
        </section>

        <section id='five' className='main style1'>
          <div className='grid-wrapper'>
              <div className='col-6'>
                <header className='major'>
                  <h2>Modernized UI/UX with Dark Mode</h2>
              </header>
              <p>
              Spearmint provides an outstanding user interface and guarantees the best user experience. When you want to save freshly generated test files for easy access in the future to modify or update, simply click the “Save Test” button, name the test template you have created and you’re good to go. You can easily find the test file saved in the __test__ folder. 
              </p>
            </div>
            <div className='col-6'>
              <img id='accessibility-lens' src={darkMode} alt='activate dark mode'/>
            </div>
          </div>
        </section>

        {/* This section can be uncommented when a new docker image is generated: <section id='six' className='main style2'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <img id='accessibility-lens' src={docker} alt='Accessibility Lens App Demo' />
            </div>
            <div className='col-6'>
              <header className='major'>
                <h2>Containerized Image</h2> 
              </header>
              <p>
                The Spearmint team is excited to offer Spearmint as an OCI-compliant container image via Docker. 
              </p>
            </div>
          </div>
        </section> */}
      </Layout>
    );
  }
}

export default Homepage;
