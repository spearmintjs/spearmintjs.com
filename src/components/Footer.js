import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section id='footer' className='main style2 special'>
        <div className='container'>
          <header className='major'>
            <h2>Want to Contribute?</h2>
          </header>
          <p>
            Join us and help developers write better React tests in less time. <br /> Star us on
            Github!{' '}
          </p>
          <ul className='actions uniform'>
            <li>
              <a href='mailto:apark0720@gmail.com' id='footer-buttons' className='button special'>
                Email
              </a>
            </li>
            <li>
              <a
                href='https://www.github.com/spearmintjs/spearmint'
                id='footer-buttons'
                className='button'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Footer;
