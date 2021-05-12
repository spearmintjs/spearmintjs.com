import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.os = '';
    // this is what needs to be updated to link the correct release of the app
    this.macDownload =
      'https://github.com/open-source-labs/spearmint/releases/download/v0.5.0/Spearmint-0.5.0.dmg';
    this.windowDownload = 'https://github.com/open-source-labs/spearmint/releases/download/v0.5.0/Spearmint-0.5.0.exe' ;
    this.linusDownload = 'https://github.com/open-source-labs/spearmint/releases/download/v0.2.0/Spearmint-0.2.0.AppImage';
    this.downloadClassName = 'icon alt fa-apple margin-left';
  }

  componentDidMount() {
    this.getOS();
    this.setDownloadLink();
  }

  // getOS() {
  //   var userAgent = window.navigator.userAgent,
  //     platform = window.navigator.platform,
  //     macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  //     windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  //     iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  //   if (macosPlatforms.indexOf(platform) !== -1) {
  //     this.os = 'Mac OS';
  //   } else if (iosPlatforms.indexOf(platform) !== -1) {
  //     this.os = 'iOS';
  //   } else if (windowsPlatforms.indexOf(platform) !== -1) {
  //     this.os = 'Windows';
  //   } else if (/Android/.test(userAgent)) {
  //     this.os = 'Android';
  //   } else {
  //     this.os = 'Linux';
  //   }
  // }

  // setDownloadLink() {
  //   if (this.os === 'Mac OS' || this.os === 'iOS') {
  //     this.downloadLink =
  //       'https://github.com/open-source-labs/spearmint/releases/download/v0.5.0/Spearmint-0.5.0.dmg';
  //     this.downloadClassName = 'icon alt fa-apple margin-left';
  //   } else if (this.os === 'Windows' || this.os === 'Android') {
  //     this.downloadLink =
  //       'https://github.com/open-source-labs/spearmint/releases/download/v0.5.0/Spearmint-0.5.0.exe';
  //     this.downloadClassName = 'icon alt fa-windows margin-left';
  //   } else if (this.os === 'Linux') {
  //     this.downloadLink =
  //       'https://github.com/open-source-labs/spearmint/releases/download/v0.2.0/Spearmint-0.2.0.AppImage';
  //     this.downloadClassName = 'icon alt fa-linux margin-left';
  //   }
  // }

  render() {
    console.log(this.downloadLink);
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
              <a href={this.downloadLink} className='button scrolly'>
                Mac (.dmg)
                <i className={'icon alt fa-apple margin-left'} />
              </a>
              <a href={this.downloadLink} className='button scrolly'>
                Windows (.exe)
                <i className={'icon alt fa-windows margin-left'} />
              </a>
              <a href={this.downloadLink} className='button scrolly'>
                Linux (.deb)
                <i className={'icon alt fa-linux margin-left'} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
