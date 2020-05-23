import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import appDemo from '../assets/images/appDemo.gif';
import todoTest from '../assets/images/todoTest.png';
import favicon from '../assets/images/favicon.ico';
import addedfeatures from '../assets/images/addedfeatures1.png';
import ContributorsCard from '../components/ContributorsCard'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'spearmint';

    return (
      <Layout>
        <Helmet
          title={siteTitle}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
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
                Spearmint provides a user-friendly GUI for developers to easily generate tests. It
                dynamically converts user inputs into executable Jest test code by using DOM query
                selectors provided by the react-testing-library. We chose react-testing-library over
                Enzyme because it guides developers to focus on testing user behavior rather than
                testing implementation details. By leveraging react-testing-library, spearmint
                provides our users with more stable tests that do not break when refactoring or
                gives false positives due to shallow-rendering.
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
                <h2>Supports React, Redux, Hooks, Context, Puppeteer, and Endpoint Testing</h2>
              </header>
              <p>
                Spearmint isn't just for React. Write tests for your Redux actions, async functions,
                reducers, or middleware. While you're at it, check out your hooks, context or even
                your endpoints. If your interested in performance, utilize the Puppeteer
                module. Provide custom mock data and your inputs, and you're on your way.
              </p>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={addedfeatures} alt='' />
              </span>
            </div>
          </div>
        </section>

        <section id='four' className='main style2 special'>
          <header className='major'>
            <h2>Meet the Team!</h2>
          </header>
          <div className='flexName'>
            <ContributorsCard
              name='Alex Park'
              linkedIn='https://www.linkedin.com/in/apark0720'
              github='https://www.github.com/apark0720'
            />
            <ContributorsCard
              name='Charlie Maloney'
              linkedIn='https://www.linkedin.com/in/charlie-maloney/'
              github='https://github.com/charlie-maloney'
            />
            <ContributorsCard
              name='Chloe Aribo'
              linkedIn='https://www.linkedin.com/in/chloe-aribo/'
              github='https://www.github.com/HeyItsChloe'
            />
            <ContributorsCard 
              name='Cornelius Phanthanh'
              linkedIn='https://www.linkedin.com/in/corneliusphanthanh/'
              github='https://www.github.com/Corneeltron' 
            />

            <ContributorsCard 
              name='Dave Franz'
              linkedIn='https://www.linkedin.com/in/dave-franz/'
              github='https://www.github.com/davefranz'
            />

            <ContributorsCard 
              name='Johnny Lim'
              linkedIn='https://www.linkedin.com/in/lim-johnny'
              github='https://www.github.com/johnny-lim'
            />

            <ContributorsCard 
              name='Julie Beak'
              linkedIn='https://www.linkedin.com/in/juliebeak' 
              github='https://www.github.com/julicious100'
            />

            <ContributorsCard 
              name='Karen Pinilla'
              linkedIn='https://www.linkedin.com/in/karen-pinilla/'
              github='https://github.com/karenpinilla'
            />

            <ContributorsCard 
              name='Linda Wishingrad'
              linkedIn='https://www.linkedin.com/in/lindawishingrad/'
              github='https://www.github.com/lcwish'
            />

            <ContributorsCard 
              name='Mike Coker'
              linkedIn='https://www.linkedin.com/in/mike-coker/'
              github='https://github.com/mbcoker'
            />

            <ContributorsCard 
              name='Natlyn Phomsavanh'
              linkedIn='https://linkedin.com/in/natlyn-phom'
              github='https://github.com/natlynp'
            />

            <ContributorsCard 
              name='Rachel Yoo'
              linkedIn='https://www.linkedin.com/in/rachel-yoo/'
              github='https://www.github.com/rachethecreator'
            />

            <ContributorsCard 
              name='Sieun Jang'
              linkedIn='https://www.linkedin.com/in/sieunj/'
              github='https://github.com/sieunjang'
            />

            <ContributorsCard 
              name='Tristen Wastell'
              linkedIn=''
              github=''
            />
          
          </div>
        </section>
      </Layout>
    );
  }
}

export default Homepage;
