import React from "react";
import "./event.css";

// Importing images directly from the src folder
import elc1 from "./elc1.jpg";
import elc7 from "./ELC7.jpg";
import elc2 from "./elc2.jpg";
import elc4 from "./elc4.jpg";
import elc3 from "./elc3.jpg";
import elc5 from "./elc5.jpg";

const PrayaasELC = () => {
  return (
    <div>
      <header>
        <h1>
          <span className="letter p">P</span>
          <span className="letter r">r</span>
          <span className="letter a">a</span>
          <span className="letter y">y</span>
          <span className="letter a">a</span>
          <span className="letter a">a</span>
          <span className="letter s">s</span>
          <span className="letter dash"> - </span>
          <span className="letter e">E</span>
          <span className="letter l">l</span>
          <span className="letter e">e</span>
          <span className="letter c">c</span>
          <span className="letter t">t</span>
          <span className="letter o">o</span>
          <span className="letter r">r</span>
          <span className="letter a">a</span>
          <span className="letter l">l</span>
          <span className="letter space"> </span>
          <span className="letter l">L</span>
          <span className="letter i">i</span>
          <span className="letter t">t</span>
          <span className="letter e">e</span>
          <span className="letter r">r</span>
          <span className="letter a">a</span>
          <span className="letter c">c</span>
          <span className="letter y">y</span>
          <span className="letter space"> </span>
          <span className="letter c">C</span>
          <span className="letter l">l</span>
          <span className="letter u">u</span>
          <span className="letter b">b</span>
        </h1>
        <p>Promoting Electoral Awareness through Education and Engagement</p>
      </header>

      <section className="recent-events">
        <h2>Recent Club Events</h2>

        <div className="event">
          <h3>Event 1: VIKSIT BHARAT</h3>
          <p>
            "Vikshit Bharat" translates to "Developed India" in English. Here's a two-line description:
            <br />
            "Vikshit Bharat envisions a prosperous and empowered nation, where progress, equality, and sustainability
            flourish."
          </p>
          <div className="event-images">
            <img src={elc1} alt="Electoral Awareness Workshop" />
            <img src={elc7} alt="Workshop Session" />
          </div>
        </div>

        <div className="event">
          <h3>Event 2: PEHLA VOTE DESH KE LIYE</h3>
          <p>
            "Pehla Vote Desh Ke Liye" symbolizes the power of youth in shaping the future of our country through active
            participation in elections.
            <br />
            "It is a reminder that every vote counts in building a stronger, democratic, and prosperous India."
          </p>
          <div className="event-images">
            <img src={elc2} alt="Mock Voting Session" />
            <img src={elc4} alt="Participants Casting Votes" />
          </div>
        </div>

        <div className="event">
          <h3>Event 3: SAY OUT LOUD</h3>
          <p>Got something to say? Come, say it here! Presenting: SAY OUT LOUD!</p>
          <div className="event-images">
            <img src={elc3} alt="Voter Registration Drive" />
          </div>
        </div>

        <div className="event">
          <h3>Event 4: YUVA MANTHAN</h3>
          <p>
            Championing intellectual prowess and diplomatic finesse, the triumphant culmination of YUVA MANTHAN - MODEL
            UNITED NATION, marks a monumental stride towards nurturing visionary leaders of tomorrow.
          </p>
          <div className="event-images">
            <img src={elc5} alt="Debate on Electoral Reforms" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayaasELC;
