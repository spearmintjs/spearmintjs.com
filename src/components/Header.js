import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.os = '';
    this.macDownload = 'https://github.com/open-source-labs/spearmint/releases/download/v0.11.0/spearmint-0.11.0.dmg';
    this.windowDownload = 'https://github.com/open-source-labs/spearmint/releases/download/v0.11.0/spearmint.Setup.0.11.0.exe';
    this.linuxDownload = 'https://github.com/open-source-labs/spearmint/releases/download/v0.11.0/spearmint_0.11.0_arm64.deb'; 
    this.dockerLink = 'https://hub.docker.com/r/spearmintoslabs/spearmint'; 
  } 
  
  render() {
    return (
      <section id='header'>
        <div className='inner'>
          <div className='flex'>
            <h1>spearmint</h1>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              className='logo'
            >
              <path
                fill='#ffffff'
                d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z'
              />
            </svg>
          </div>
          <p>testing, simplified</p>
          <ul className='actions'>
            <li>
              <a href={this.macDownload} className='button scrolly'>
                Mac (.dmg)
                <i className={'icon alt fa-apple margin-left'} />
              </a>
              <a href={this.windowDownload} className='button scrolly'>
                Windows (.exe)
                <i className={'icon alt fa-windows margin-left'} />
              </a>
              <a href={this.linuxDownload} className='button scrolly'>
                Linux (.deb)
                <i className={'icon alt fa-linux margin-left'} />
              </a>
              <a href={this.dockerLink} className='button scrolly'>
                Docker Hub
                <i className={'icon alt fa-docker margin-left'} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
