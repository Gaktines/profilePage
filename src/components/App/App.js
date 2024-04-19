import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Profile from "../Profile/Profile";
import { fetchJobs, signin, register } from "../../utils/Api";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SocMedBanner from "../../SocMedBanner/SocMedBanner";


function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [jobItems, setJobItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const appContextValue = { state: { loggedIn, userData } };
  const history = useHistory();
  const [screenLoading, setScreenLoading] = useState(false);

  const handleItemCard = (card) => {
    setActiveModal("preview");

    setSelectedCard(card);
  };

  const handleActiveCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleLogInModal = () => {
    setActiveModal("login");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    history.push("/");
  };

  const handleRegistration = (email, password, username) => {
    register(email, password, username);
    setLoggedIn(true);
    setCurrentUser();
    setUserData();
    handleCloseModal();

    history.push("/profile");
  };

  const handleLogin = (email, password) => {
    signin(email, password);
    handleCloseModal();
  };

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        const apiData = data.results.map((job) => ({
          companyName: job.company.name,
          jobName: job.name,
          jobLink: job.refs.landing_page,
          jobPostingDate: job.publication_date,
        }));
        setJobItems(apiData);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [loggedIn]);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <AppContext.Provider value={appContextValue}>
            <div className="app__page">
              <Header
                onClick={handleActiveCreateModal}
                onClickLogin={handleLogInModal}
                onClickSignup={handleSignupModal}
                loggedIn={loggedIn}
              />
              <Switch>
                <Route exact path="/">
                  <Main
                    onSelectCard={handleItemCard}
                    loggedIn={loggedIn}
                    jobItems={jobItems}
                    handleRegistration={handleRegistration}
                    handleLogin={handleLogin}
                  />
                </Route>
                <Route path="/profile">
                  <Profile
                    jobItems={jobItems}
                    onSelectCard={handleItemCard}
                    handleActiveCreateModal={handleActiveCreateModal}
                    selectedCard={selectedCard}
                    handleLogout={handleLogout}
                    loggedIn={loggedIn}
                  />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
              </Switch>
              <SocMedBanner />
              <Footer />

              {activeModal === "signup" && (
                <RegisterModal
                  handleCloseModal={handleCloseModal}
                  isOpen={activeModal === "create"}
                  setActiveModal={setActiveModal}
                  handleRegistration={handleRegistration}
                />
              )}
              {activeModal === "login" && (
                <LoginModal
                  handleCloseModal={handleCloseModal}
                  isOpen={activeModal === "login"}
                  onClickLogin={handleLogInModal}
                  setActiveModal={setActiveModal}
                  handleLogin={handleLogin}
                />
              )}
            </div>
          </AppContext.Provider>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

/* 
Header
Main
Footer
ModalWithForm
ItemModal
*/

export default App;
