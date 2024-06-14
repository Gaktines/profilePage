import "./SocMedBanner.css";


const SocMedBanner = () => {
  return (
    <footer className="socMedBanner">
      <div id="fb-root"></div>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0" nonce="r6O74qzh"></script>
      <div className="fb-share-button" data-href="https://www.facebook.com/profile.php?id=61556786993898" data-layout="" data-size=""><a className="smBanner__link-facebook" rel="noopener" href="https://www.facebook.com/profile.php?id=61556786993898">Facebook</a></div>
      <div className="linkedin-share-button" data-href="https://www.linkedin.com/in/gj-a-332749313" data-layout="" data-size=""><a className="smBanner__link-linkedin" rel="noopener" href="https://www.linkedin.com/in/gj-a-332749313">LinkedIn</a></div>
      <div className="github-share-button" data-href="https://github.com/Gaktines" data-layout="" data-size=""><a className="smBanner__link-github" rel="noopener" href="https://github.com/Gaktines">Github</a></div>

    </footer>
  );
};

export default SocMedBanner;
