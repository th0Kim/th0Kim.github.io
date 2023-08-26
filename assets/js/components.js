document.addEventListener('DOMContentLoaded', function () {
  var headerID = document.getElementById('header');
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

  var footerID = document.getElementById('footer');
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
        <ul class="footer-menu">
          <li><a href="javascript:void(0);">TECHNOLOGY</a></li>
          <li><a href="javascript:void(0);">IDEAS</a></li>
          <li><a href="javascript:void(0);">LEADERSHIP</a></li>
          <li><a href="javascript:void(0);">VIDEO</a></li>
          <li><a href="javascript:void(0);">NEWS</a></li>
          <li><a href="javascript:void(0);">Finance</a></li>
          <li><a href="javascript:void(0);">ENTERTAINMENT</a></li>
        </ul>
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
              <a href="javascript:void(0);" class="icon-sns-instagram" title="instagram"></a>
            </li>
            <li>
              <a href="javascript:void(0);" class="icon-sns-pinterest" title="pinterest"></a>
            </li>
            <li>
              <a href="javascript:void(0);" class="icon-sns-twitter" title="twitter"></a>
            </li>
            <li>
              <a href="javascript:void(0);" class="icon-sns-facebook" title="facebook"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
});
