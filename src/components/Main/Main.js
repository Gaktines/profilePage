import "./Main.css";
//import JobCard from "../JobCard/JobCard";
import gTechLogo from "../../images/gTechLogo.jpg";
import { Link } from "react-router-dom";

function Main(/*{ onSelectCard, jobItems, setSelectedCard, loggedIn}*/ ) {
  /*const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;*/

  /*const sortedCards = jobItems?.sort(
    (a, b) => new Date(a.jobPostingDate) - new Date(b.jobPostingDate)
  );*/

  return (
   
    <main className="main">
      <section className="main__card-section">
        {/*}<p className="main__date">Today is {date}</p>
        <div className="main__cards">
          {sortedCards.map((x) => (
            <JobCard
              item={x}
              key={x.jobLink}
              onSelectCard={onSelectCard}
              onClick={() => {
                setSelectedCard(x);
              }}
              loggedIn={loggedIn}
            />
          ))}
        </div>{*/},
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5315456058652715"
     crossOrigin="anonymous"></script>
        <div className="main__logo">
        <Link to="/">
          <img src={gTechLogo} alt="logo" />
        </Link>
      </div>
      <p className="main__description">
        Balancing your books, and building your web pages!
      </p>
      </section>
     
    </main>
   
  );
}

export default Main;

/*
 */
