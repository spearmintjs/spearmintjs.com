import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import appDemo from '../assets/images/appDemo.gif';
import todoTest from '../assets/images/todoTest.png';
import favicon from '../assets/images/favicon.ico';

class Homepage extends React.Component {
  render() {
    const siteTitle = 'spearmint';

    return (
      <Layout>
        <Helmet
          title={siteTitle}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        />

        <section id='one' className='main style1'>
          <div className='grid-wrapper'>
            <div className='col-6 center'>
              <header className='major'>
                <h2>
                  Use spearmint to create tests.
                  <br />
                  Zero coding required.
                </h2>
              </header>
              <p>
                Easily create tests using our UI and refer to the browser, codebase, and docs all in
                one place. Once you are done you can save an executable Jest test file in your
                __tests__ folder.
              </p>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={appDemo} alt='' />
              </span>
            </div>
          </div>
        </section>

        <section id='two' className='main style2'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <img id='todo-test' src={todoTest} />
            </div>
            <div className='col-6'>
              <header className='major'>
                <h2>A fresh take on testing.</h2>
              </header>
              <p>
                Writing tests is like eating your veggies: it's something everyone knows that they
                should do, but not everyone does. Spearmint.js provides a simple way to write tests
                that gives you confidence your React application will work in the way your users
                interact with it.
              </p>
              <p>
                Spearmint provides a user-friendly GUI for developers to easily generate React
                tests. It dynamically converts user inputs into executable Jest test code by using
                DOM query selectors provided by the react-testing-library. We chose
                react-testing-library over Enzyme because it guides developers to focus on testing
                user behavior rather than testing implementation details. By leveraging
                react-testing-library, spearmint provides our users with more stable tests that do
                not break when refactoring or gives false positives due to shallow-rendering.
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

        <section id='three' className='main style1 special'>
          <header className='major'>
            <h2>Meet the Team!</h2>
          </header>
          <div className='flexName'>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Alex Park</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/apark0720' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/apark0720' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Chloe Aribo</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/chloe-aribo-639626b0/' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/HeyItsChloe' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Cornelius Phanthanh</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/corneliusphanthanh/' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/Corneeltron' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Dave Franz</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/davefranz/' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/davefranz' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Johnny Lim</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/lim-johnny' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/johnny-lim' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Julie Beak</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/juliebeak' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/julicious100' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Karen Pinilla</h3>
              <ul className='icons'>
                <li>
                  <a
                    href='https://www.linkedin.com/in/karen-pinilla/'
                    className='icon alt fa-linkedin'
                  >
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/karenpinilla' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Linda Wishingrad</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/lindawishingrad/' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/lcwish' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Natlyn Phomsavanh</h3>
              <ul className='icons'>
                <li>
                  <a href='https://linkedin.com/in/natlyn-phom' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/natlynp' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-2'>
              <span className='image fit' />
              <h3>Rachel Yoo</h3>
              <ul className='icons'>
                <li>
                  <a href='https://www.linkedin.com/in/rachel-yoo/' className='icon alt fa-linkedin'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.github.com/rachethecreator' className='icon alt fa-github'>
                    <span className='label'>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Homepage;
