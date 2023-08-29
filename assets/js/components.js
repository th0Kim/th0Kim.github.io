document.addEventListener('DOMContentLoaded', function () {
  // Header
  const headerID = document.getElementById('header');
  headerID.innerHTML = `
    <div class="header-inner">
      <h1 class="header-logo"><a href="/" title="Deck."></a></h1>
      <nav class="gnb">
        <ul class="gnb-list">
          <li><a href="javascript:void(0);">TECHNOLOGY</a></li>
          <li><a href="javascript:void(0);">IDEAS</a></li>
          <li><a href="javascript:void(0);">LEADERSHIP</a></li>
          <li><a href="javascript:void(0);">VIDEO</a></li>
          <li><a href="javascript:void(0);">NEWS</a></li>
          <li><a href="javascript:void(0);">Finance</a></li>
          <li><a href="javascript:void(0);">ENTERTAINMENT</a></li>
        </ul>
      </nav>
      <div class="header-side">
        <button type="button" class="btn-gnb-toggle" title="toggle menu"></button>
      </div>
    </div>
  `;

  // Footer
  const footerID = document.getElementById('footer');
  footerID.innerHTML = `
    <div class="footer-inner">
      <div class="footer-area-left">
        <a href="/" class="footer-logo" title="Deck."></a>
        <div class="footer-copyright">
          <p>© 2018 Deck</p>
          <p>Component based UI Kit</p>
        </div>
      </div>
      <div class="footer-area-center">
        <ul class="footer-menu" id="footer-menu"></ul>
      </div>
      <div class="footer-area-right">
        <div class="footer-enter-email">
          <input type="text" placeholder="Your E-mail" title="Your E-mail" />
          <button type="button" class="btn btn-primary"><span>Subscribe</span></button>
        </div>
        <div class="footer-followus">
          <div class="footer-followus-label">Follow us</div>
          <ul class="footer-sns-box">
            <li>
              <a href="javascript:void(0);" class="icon-sns instagram" title="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1544 6.7686H12.7614C12.8629 7.16258 12.9228 7.57419 12.9228 7.99963C12.9228 10.719 10.7188 12.9229 8.00002 12.9229C5.28122 12.9229 3.07717 10.719 3.07717 7.99963C3.07717 7.57419 3.13733 7.16254 3.2388 6.7686H1.84583V13.5382C1.84583 13.8777 2.1214 14.1531 2.46175 14.1531H13.5382C13.8787 14.1531 14.1543 13.8777 14.1543 13.5382V6.7686H14.1544ZM14.2772 2.48581C14.2772 2.13244 13.9905 1.84587 13.6366 1.84587H11.7172C11.3636 1.84587 11.0772 2.13244 11.0772 2.48581V4.40592C11.0772 4.75905 11.3636 5.04587 11.7172 5.04587H13.6366C13.9906 5.04587 14.2772 4.75905 14.2772 4.40592V2.48581ZM8.00002 4.92304C6.30048 4.92304 4.923 6.30025 4.923 7.99967C4.923 9.69894 6.30052 11.077 8.00002 11.077C9.6994 11.077 11.0772 9.69894 11.0772 7.99967C11.0772 6.30021 9.6994 4.92304 8.00002 4.92304ZM14.1544 16H1.84583C0.826565 16 0 15.1732 0 14.1531V1.84587C0 0.826293 0.826565 0 1.84583 0H14.1543C15.1737 0 16 0.826293 16 1.84587V14.1531C16 15.1732 15.1738 16 14.1544 16Z" fill="white" fill-opacity="0.3"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="icon-sns pinterest" title="pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.56802 0C2.2017 0 0 3.13055 0 5.74107C0 7.32173 0.598484 8.72802 1.88201 9.25213C2.09242 9.33815 2.28104 9.25512 2.34205 9.02207C2.3845 8.86079 2.485 8.45388 2.52982 8.28456C2.59133 8.05404 2.56749 7.97318 2.39766 7.77229C2.02757 7.33571 1.79102 6.77055 1.79102 5.97004C1.79102 3.64749 3.52873 1.56838 6.31587 1.56838C8.78378 1.56838 10.1397 3.07638 10.1397 5.09032C10.1397 7.74017 8.967 9.97667 7.22612 9.97667C6.2646 9.97667 5.54496 9.18153 5.7756 8.20639C6.05191 7.04208 6.58701 5.78565 6.58701 4.94523C6.58701 4.193 6.18321 3.56554 5.34748 3.56554C4.36465 3.56554 3.5751 4.58232 3.5751 5.94433C3.5751 6.81179 3.86826 7.39854 3.86826 7.39854C3.86826 7.39854 2.86252 11.6602 2.68617 12.4065C2.33498 13.8928 2.63331 15.7149 2.65867 15.8989C2.67343 16.008 2.81358 16.0339 2.87696 15.9515C2.96764 15.8332 4.13828 14.388 4.53622 12.9441C4.64884 12.5352 5.18274 10.4179 5.18274 10.4179C5.502 11.027 6.43521 11.5634 7.42759 11.5634C10.382 11.5634 12.3863 8.87007 12.3863 5.26492C12.3863 2.53879 10.0773 0 6.56802 0Z" fill="white" fill-opacity="0.3"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="icon-sns twitter" title="twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.53918C15.4113 1.80031 14.7787 1.97682 14.1147 2.05608C14.7923 1.64983 15.3129 1.00656 15.5579 0.24C14.9236 0.616194 14.2212 0.889359 13.4734 1.03654C12.8747 0.398563 12.0216 0 11.0774 0C8.95856 0 7.40097 1.97732 7.87984 4.03056C5.15169 3.89371 2.73289 2.5868 1.1139 0.600893C0.254019 2.07596 0.667884 4.00637 2.12975 4.98342C1.59173 4.96641 1.08544 4.81872 0.642951 4.57278C0.60734 6.09363 1.69717 7.51573 3.27577 7.83293C2.81379 7.95864 2.30777 7.98742 1.79344 7.88913C2.21107 9.1932 3.42342 10.1423 4.85984 10.1687C3.47977 11.2502 1.74159 11.7333 0 11.528C1.45266 12.4594 3.17814 13.0029 5.03188 13.0029C11.1263 13.0029 14.5696 7.85526 14.362 3.23841C15.0035 2.77561 15.5599 2.19748 16 1.53918Z" fill="white" fill-opacity="0.3"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="icon-sns facebook" title="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.23076V7.96575H1.6755V16H4.89744V7.93157H7.14528L7.38458 5.23076H4.89744C4.89744 5.23076 4.89744 4.22221 4.89744 3.69231C4.89744 3.0555 5.02567 2.80338 5.64101 2.80338C6.13678 2.80338 7.38454 2.80338 7.38454 2.80338V0C7.38454 0 5.54664 0 5.15383 0C2.75639 0 1.6755 1.0555 1.6755 3.07693C1.6755 4.83751 1.6755 5.23076 1.6755 5.23076H0Z" fill="white" fill-opacity="0.3"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;

  // Responsive Footer Menu list
  const footerMenu = document.getElementById('footer-menu');
  window.addEventListener('load', footerMenuLoad);
  function footerMenuLoad() {
    footerMenuResize();
    window.addEventListener('resize', footerMenuResize);
  }

  function footerMenuResize() {
    const mxSize = matchMedia('screen and (max-width: 1080px)').matches;
    const smSize = matchMedia('screen and (max-width: 768px)').matches;
    if (smSize) {
      footerMenu.innerHTML = `
        <li><a href="javascript:void(0);">TECHNOLOGY</a></li>
        <li><a href="javascript:void(0);">VIDEO</a></li>
        <li><a href="javascript:void(0);">IDEAS</a></li>
        <li><a href="javascript:void(0);">NEWS</a></li>
        <li><a href="javascript:void(0);">ENTERTAINMENT</a></li>
        <li><a href="javascript:void(0);">Finance</a></li>
        <li><a href="javascript:void(0);">LEADERSHIP</a></li>
      `;
    } else if (mxSize) {
      footerMenu.innerHTML = `
        <li><a href="javascript:void(0);">TECHNOLOGY</a></li>
        <li><a href="javascript:void(0);">LEADERSHIP</a></li>
        <li><a href="javascript:void(0);">NEWS</a></li>
        <li><a href="javascript:void(0);">IDEAS</a></li>
        <li><a href="javascript:void(0);">VIDEO</a></li>
        <li><a href="javascript:void(0);">Finance</a></li>
        <li><a href="javascript:void(0);">ENTERTAINMENT</a></li>
      `;
    } else {
      footerMenu.innerHTML = `
        <li><a href="javascript:void(0);">TECHNOLOGY</a></li>
        <li><a href="javascript:void(0);">LEADERSHIP</a></li>
        <li><a href="javascript:void(0);">NEWS</a></li>
        <li><a href="javascript:void(0);">ENTERTAINMENT</a></li>
        <li><a href="javascript:void(0);">IDEAS</a></li>
        <li><a href="javascript:void(0);">VIDEO</a></li>
        <li><a href="javascript:void(0);">Finance</a></li>
      `;
    }
  }
});
