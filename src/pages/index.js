import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import appDemo from '../assets/images/spearmint.gif';
import accessibilityLens from '../assets/images/accessibilityLens.gif';
import saveAndGetTestDemo from '../assets/images/saveAndGetTestDemo.gif';
import todoTest from '../assets/images/todoTest.png';
import favicon from '../assets/images/favicon.ico';
import addedfeatures from '../assets/images/testoptions.gif';
import ContributorsCard from '../components/ContributorsCard';

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
                <h2>Create and run tests in Spearmint.</h2>
                <h2>Zero coding required.</h2>
              </header>
              <p>
                Easily create, save, and run tests intuitively using Spearmint. Access your app's file directory and codebase while enjoying
                a fully functional terminal and browser in-app.
                
                When you're ready to continue developing your application, your Jest test files will be in your app's __tests__ folder.
              </p>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={appDemo} alt='Spearmint App Demo' />
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
                <h2>A fresh take on testing.</h2>
              </header>
              <p>
                Writing tests is like eating your veggies: it's something everyone knows that they
                should do, but not everyone does. Spearmint.js provides a simple way to write tests
                that gives you confidence your React application will work in the way your users
                interact with it.
              </p>
              <p>
                Spearmint provides a user-friendly GUI for developers to easily generate tests with a few 
                clicks of a button. It dynamically converts user inputs into executable test code 
                through react-testing-library, jest, supertest, puppeteer, and axe-core. 
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
                <h2>Supports React, Redux, Hooks, Context, Puppeteer, Endpoint, Security and Accessibility Testing.</h2>
              </header>
              <p>
                Spearmint isn't just for React. Write tests for your Redux actions, async functions,
                reducers, or middleware. While you're at it, check out your hooks, context or even
                your endpoints. If you're interested in performance, utilize the Puppeteer module.
                Provide custom mock data and inputs, and you're on your way. You can also leverage the
                <a href='https://github.com/dequelabs/axe-core'> Axe-Core </a> testing library
                to verify that your application meets various 
                accessibility standards and guarantees an internet for all. 
              </p>
              <p>
                The latest version of Spearmint has a specific focus on security. The
                <a href= 'https://github.com/snyk/snyk'> Snyk </a> 
                library has been utilized to ensure your application is up to snuff for various 
                security standards and make sure your app isn't vulnerable to malicious attacks.  
              </p>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={addedfeatures} alt='Spearmint Options' />
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
                <h2>Accessibility Lens.</h2>
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
                  <h2>Test Saving.</h2>
              </header>
              <p>
              Thanks to the new login feature, developers can now save their test templates. This allows for a quick render of frequently desired test clusters. Simply click the “Save Test” button, name the test template you have created and you’re good to go. To reload the test template click the “Get Test” button and select the test by the name given. This makes recalling tests much easier than having to re-build the tests like in previous versions. 
              </p>
            </div>
            <div className='col-6'>
              <img id='save-and-get-test' src={saveAndGetTestDemo} alt='save and get test demo'/>
            </div>
          </div>
        </section>

        <section id='four' className='main style2 special'>
          <header className='major'>
            <h2>Meet the Team!</h2>
          </header>
          <div className='flexName'>
            <ContributorsCard
              name='Alan Richardson'
              linkedIn='https://www.linkedin.com/in/arichardson7'
              github='https://github.com/alanrichardson7'
            />

            <ContributorsCard
              name='Alex Park'
              linkedIn='https://www.linkedin.com/in/apark0720'
              github='https://www.github.com/apark0720'
            />

            <ContributorsCard
              name='Alfred Sta. Iglesia'
              linkedIn='https://www.linkedin.com/in/alfred-sta-iglesia/'
              github='https://github.com/astaiglesia'
            />

            <ContributorsCard
              name='Annie Shin'
              linkedIn='https://www.linkedin.com/in/annieshinn/'
              github='https://github.com/annieshinn'
            />

            <ContributorsCard
              name='Ben Kwak'
              linkedIn='https://www.linkedin.com/in/ben-kwak/'
              github='https://github.com/bkwak'
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
              name={`Dieu 'Dieunity' Huynh`}
              linkedIn='https://www.linkedin.com/in/dieu-huynh/'
              github='https://www.github.com/dieunity'
            />

            <ContributorsCard 
             name='Eric Park' 
             linkedIn='https://www.linkedin.com/in/ericgpark/' 
             github='https://github.com/ericgpark' 
            />

            <ContributorsCard
              name='Evan Berghoff'
              linkedIn='https://www.linkedin.com/in/evanberghoff/'
              github='https://github.com/Berghoer'
            />

            <ContributorsCard
              name='Gabriel Christo'
              linkedIn='https://www.linkedin.com/in/gabriel-christo-44364086/'
              github='https://github.com/bielchristo'
            />

            <ContributorsCard
              name='Johnny Lim'
              linkedIn='https://www.linkedin.com/in/lim-johnny'
              github='https://www.github.com/johnny-lim'
            />

            <ContributorsCard
              name='Joseph Nagy'
              linkedIn='https://www.linkedin.com/in/josephmnagy'
              github='https://github.com/Josephnagy'
            />

            <ContributorsCard
              name='Julie Beak'
              linkedIn='https://www.linkedin.com/in/juliebeak'
              github='https://www.github.com/julicious100'
            />
            
            <ContributorsCard
              name='Justin Baik'
              linkedIn='https://www.linkedin.com/in/justin-baik/'
              github='https://github.com/JIB3377'
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
              name='Luis Lo'
              linkedIn='https://www.linkedin.com/in/luis-lo/'
              github='https://github.com/Luis-KM-Lo'
            />

            <ContributorsCard
              name= {`Mahmoud 'Mo' Hmaidi`}
              linkedIn='http://linkedin.com/in/mahmoud-hmaidi-mo'
              github='https://github.com/mhmaidi789'
            />

           <ContributorsCard
            name='Max Bromet'
            linkedIn='https://www.linkedin.com/in/max-bromet-2607aa211/'
            github='https://github.com/mbromet'
            /> 

            <ContributorsCard
              name='Max Weisenberger'
              linkedIn='https://www.linkedin.com/in/maxweisen/'
              github='https://github.com/MaxWeisen'
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
              name='Nicolas Pita'
              linkedIn='https://www.linkedin.com/in/nicolaspita/'
              github='https://github.com/nicolaspita'
            />

            <ContributorsCard
              name='Owen Eldridge'
              linkedIn='https://www.linkedin.com/in/owen-eldridge'
              github='https://github.com/oweneldridge'
            />

            <ContributorsCard
              name='Rachel Yoo'
              linkedIn='https://www.linkedin.com/in/rachel-yoo/'
              github='https://www.github.com/rachethecreator'
            />

            <ContributorsCard
              name='Sean Haverstock'
              linkedIn='https://www.linkedin.com/in/sean-haverstock/'
              github='https://github.com/Sean-Haverstock'
            />

            <ContributorsCard
            name='Sean Yoo'
            linkedIn='https://www.linkedin.com/in/seanyyoo/'
            github='https://github.com/seanyyoo'
            />

            <ContributorsCard
              name='Sharon Zhu'
              linkedIn='https://www.linkedin.com/in/sharonzhu/'
              github='https://github.com/sharon-zhu'
            />

            <ContributorsCard
              name='Sieun Jang'
              linkedIn='https://www.linkedin.com/in/sieunj/'
              github='https://github.com/sieunjang'
            />

            <ContributorsCard
              name='Terence Petersen'
              linkedIn='https://www.linkedin.com/in/terence-petersen'
              github='https://github.com/TERR-inss'
            />

            <ContributorsCard name='Tristen Wastell' linkedIn='' github='' />

            <ContributorsCard
              name='Tolan Thornton'
              linkedIn='https://www.linkedin.com/in/tolanthornton/'
              github='https://github.com/taoantaoan'
            />

            <ContributorsCard
            name='Tyler Martinez'
            linkedIn='https://www.linkedin.com/in/tylerjamesonmartinez/'
            github='https://github.com/tytyjameson'
            />

          </div>
        </section>
            
      </Layout>
    );
  }
}

export default Homepage;
