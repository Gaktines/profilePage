import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div id="fb-root"></div>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0" nonce="r6O74qzh"></script>
      <p className="footer__name">Developed by George Aktines</p>
      <div className="fb-share-button" data-href="https://www.facebook.com/profile.php?id=61556786993898" data-layout="" data-size=""><a className="footer__link-facebook" rel="noopener" href="https://www.facebook.com/profile.php?id=61556786993898">Facebook</a></div>
      <div className="linkedin-share-button" data-href="https://www.linkedin.com/in/george-aktines-b5712151/" data-layout="" data-size=""><a className="footer__link-linkedin" rel="noopener" href="https://www.linkedin.com/in/george-aktines-b5712151/">LinkedIn</a></div>
      <div className="github-share-button" data-href="https://github.com/Gaktines" data-layout="" data-size=""><a className="footer__link-github" rel="noopener" href="https://github.com/Gaktines">Github</a></div>
      <p className="footer__date">2024</p>
    </footer>
  );
};

export default Footer;
