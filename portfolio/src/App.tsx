import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./pages/about";
import ProjectCard from "./utils/projectCard";
import PageNav from "./pageNav";
import SlantedPage from "./utils/slantedPage";
import ProjectPage from "./utils/projectPage";
import {
  Firebase,
  GoogleCloud,
  Heroku,
  JavaScript,
  NextJS,
  Python,
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
      //<PageNav />
  return (
    <div className="App relative">
      <div className=" flex flex-col">
        <section id="About me">
          <About />
        </section>
        <section id="Projects">
          <h3>Projects</h3>
          <div className="flex flex-wrap justify-center p-4">
            <ProjectCard
              name="Autoseg"
              source="https://github.com/anforsm/autoseg"
              image="autoseg.png"
              description="Autoseg is a repository for automatic segmentation of 3D EM images."
            />
            <ProjectCard
              name="Self-Refine Experiments"
              source="https://github.com/anforsm/self-refine"
              image="selfrefine.png"
              description="Self-Refine is a framework for self-improving LLMs. This project contains experiments with different LLMs."
            />
            <ProjectCard
              name="Movie Diffusion"
              source="https://github.com/anforsm/movie-diffusion"
              image="diffusion.png"
              description="Movie Diffusion is a diffusion model implemented from scratch trained to generate movie posters."
            />
            <ProjectCard
              name="NeuronSim"
              source="https://github.com/siljeholm-forsman/neuronsim"
              image="neuronsim.png"
              description="NeuronSim is a simulator for neurons in biological neural networks. Created for my bachelor's thesis."
            />
            <ProjectCard
              name="Movieguesser"
              link="https://movieguesser.com"
              source="https://github.com/anforsm/movieguesser"
              image="movieguesser.png"
              description="Movieguesser is a Wordle-inspired game where users try to guess the name of a movie given some clues about it."
            />
            <ProjectCard
              name="TV Ratings"
              link="https://tvratings.anforsm.com"
              source="https://github.com/anforsm/tvratings"
              image="tvratings.png"
              description="TV Ratings is a service to display the IMDb ratings of TV episodes in a more user-friendly way."
            />
            <ProjectCard
              name="Tickertracker"
              link="https://tickertracker.anforsm.com"
              source="https://github.com/siljeholm-forsman/Tickertracker"
              image="tickertracker.png"
              description="Tickertracker is a webapp to discover trending stocks on social media, as well as to track price, forum discussions and other metrics of a stock."
            />
          </div>
        </section>
      </div>
    </div>
  )
}
/*
    </div>
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
            githubLink="https://github.com/anforsm/movieguesser"
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
            githubLink="https://github.com/siljeholm-forsman/Tickertracker"
            projectLink="https://tickertracker.anforsm.com"
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
        <section id="NeuronSim">
          <ProjectPage
            color="#3c3c75"
            skew={-80}
            projectName="NeuronSim"
            aboutProject={[
              {
                subtitle: "Description",
                text: `NeuronSim is a simulator for neurons in biological neural networks. The simulator was created in conjunction with my bachelor's thesis <link><text>"The Impact of Noise when Decoding Information in Highly Curved Neuronal Encoding Manifolds"</text><url>https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1700457&dswid=138</url></link> <link><text>[PDF]</text><url>https://kth.diva-portal.org/smash/get/diva2:1700457/FULLTEXT01.pdf</url></link>. 
                My thesis explores how the brain can decode information from a noisy signal (stimuli), and how neurons with different properties are affected differently by noise. The simulator can be used to simulate information decoding in a network of neurons with different properties, and thus observe how the properties of the neurons affect the decoding accuracy.`,
              },
              {
                subtitle: "Technologies",
                text: "The simulator is written in Python with the help of numpy. The visualizations are created using matplotlib.",
              },
            ]}
            image="/images/neuronsim_demo.png"
            wideImage={true}
            githubLink="https://github.com/siljeholm-forsman/neuronsim"
            technologies={[Python]}
          />
        </section>
      </div>
    </div>
  );
}*/

export default App;
