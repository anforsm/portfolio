import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./pages/about";
import PageNav from "./pageNav";
import SlantedPage from "./utils/slantedPage";
import ProjectPage from "./utils/projectPage";
import {
  Firebase,
  GoogleCloud,
  Heroku,
  JavaScript,
  NextJS,
  ReactTech,
  Redux,
  RESTAPI,
  Scraping,
  TailwindCSS,
  TypeScript,
  UIComponents,
} from "./utils/technologies";

function App() {
  //<Movieguesser />
  return (
    <div className="App relative">
      <PageNav />
      <div className=" flex flex-col">
        <section id="About me">
          <About />
        </section>
        <section id="Movieguesser">
          <ProjectPage
            color="#753c3c"
            skew={80}
            projectName="Movieguesser"
            aboutProject={[
              {
                subtitle: "Description",
                text: "Movieguesser is a Wordle-inspired game where users try to guess the name of a movie given some clues about it.",
              },
              {
                subtitle: "Technologies",
                text: "The application is written as a webapp using React.js and TailwindCSS. User progress is stored in localStorage, so there is no need to create an account and thus no need of authentication. Movie metadata is small enough to be stored on the client which means that no API's are required, except for the first-time setup.",
              },
              {
                subtitle: "Purpose",
                text: "The focus of the application is on the user experience and the design. The application is designed to be simple and intuitive.",
              },
            ]}
            projectLink="https://movieguesser.com"
            image="/images/movieguesser_demo.png"
            imageLeft={true}
            technologies={[
              TypeScript,
              ReactTech,
              TailwindCSS,
              //Firebase
              GoogleCloud,
            ]}
          />
        </section>
        <section id="TV Ratings">
          <ProjectPage
            color="#563c75"
            skew={-30}
            projectName="TV Ratings"
            aboutProject={[
              {
                subtitle: "Description",
                text: "TV Ratings is a service to display the IMDb ratings of TV episodes in a more user-friendly way.",
              },
              {
                subtitle: "Technologies",
                text: "The application is a webapp utilizing Next.js (SSR) and MaterialUI components. The ratings are regularily fetched from IMDb's datasets through a Google Cloud Function, and then stored in a Firebase realtime database. Next.js prerenders and serves the page for each TV Series. The Next.js backend is hosted on Heroku.",
              },
              {
                subtitle: "Purpose",
                text: "The focus of developing this application was to try out Next.js in a simple yet helpful way.",
              },
            ]}
            projectLink="https://tvratings.anforsm.com"
            githubLink="https://github.com/anforsm/tvratings"
            image="/images/tvratings_demo.png"
            imageLeft={false}
            technologies={[
              TypeScript,
              NextJS,
              //UIComponents,
              Scraping,
              Heroku,
              //Firebase,
              GoogleCloud,
            ]}
          />
        </section>
        <section id="Tickertracker">
          <ProjectPage
            color="#3c753c"
            skew={40}
            projectName="Tickertracker"
            aboutProject={[
              {
                subtitle: "Description",
                text: "Tickertracker is a webapp to discover trending stocks on Reddit (social media), as well as to track price, forum discussions and other metrics of a stock.",
              },
              {
                subtitle: "Technologies",
                text: "The application uses React.js and Redux to manage the state of the application. The application is hosted on Firebase. There are two API's in use, one for fetching the stock data and another for fetching the Reddit data. Fetches from the API is done on a scheduled interval through a Google Cloud Function. Data is processed and stored in a Firebase realtime database accessible from the client. The app also features authentication, providing users the ability to set up a profile and create a personalized feed of stock information.",
              },
              {
                subtitle: "Purpose",
                text: "The main focus of the application was to incorporate many different web technologies, while also creating something that I personally can use and enjoy.",
              },
            ]}
            projectLink="https://tickertracker.nootna.com"
            image="/images/tickertracker_demo.png"
            imageLeft={true}
            wideImage={true}
            technologies={[
              JavaScript,
              ReactTech,
              Redux,
              RESTAPI,
              //Firebase
              GoogleCloud,
            ]}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
