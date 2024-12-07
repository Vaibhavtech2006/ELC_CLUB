import React from "react";
import "./event.css";

const PrayaasELC = () => {
  return (
    <div>
     <header>
    <h1>
        <span class="letter p">P</span>
        <span class="letter r">r</span>
        <span class="letter a">a</span>
        <span class="letter y">y</span>
        <span class="letter a">a</span>
        <span class="letter a">a</span>
        <span class="letter s">s</span>
        <span class="letter dash"> - </span>
        <span class="letter e">E</span>
        <span class="letter l">l</span>
        <span class="letter e">e</span>
        <span class="letter c">c</span>
        <span class="letter t">t</span>
        <span class="letter o">o</span>
        <span class="letter r">r</span>
        <span class="letter a">a</span>
        <span class="letter l">l</span>
        <span class="letter space"> </span>
        <span class="letter l">L</span>
        <span class="letter i">i</span>
        <span class="letter t">t</span>
        <span class="letter e">e</span>
        <span class="letter r">r</span>
        <span class="letter a">a</span>
        <span class="letter c">c</span>
        <span class="letter y">y</span>
        <span class="letter space"> </span>
        <span class="letter c">C</span>
        <span class="letter l">l</span>
        <span class="letter u">u</span>
        <span class="letter b">b</span>
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
            "Vikshit Bharat envisions a prosperous and empowered nation, where progress, equality, and sustainability flourish."
          </p>
          <div className="event-images">
            <img src="./elc1.jpg" alt="Electoral Awareness Workshop" />
            <img src="ELC7.jpg" alt="Workshop Session" />
          </div>
        </div>

        <div className="event">
          <h3>Event 2: PEHLA VOTE DESH KE LIYE</h3>
          <p>
            "Pehla Vote Desh Ke Liye" symbolizes the power of youth in shaping the future of our country through active participation in elections.
            <br />
            "It is a reminder that every vote counts in building a stronger, democratic, and prosperous India."
          </p>
          <div className="event-images">
            <img src="elc2.jpg" alt="Mock Voting Session" />
            <img src="elc4.jpg" alt="Participants Casting Votes" />
          </div>
        </div>

        <div className="event">
          <h3>Event 3: SAY OUT LOUD</h3>
          <p>Got something to say? Come, say it here! Presenting: SAY OUT LOUD!</p>
          <div className="event-images">
            <img src="elc3.jpg" alt="Voter Registration Drive" />
          </div>
        </div>

        <div className="event">
          <h3>Event 4: YUVA MANTHAN</h3>
          <p>
            Championing intellectual prowess and diplomatic finesse, the triumphant culmination of YUVA MANTHAN - MODEL UNITED NATION, marks a monumental stride towards nurturing visionary leaders of tomorrow.
          </p>
          <div className="event-images">
            <img src="elc5.jpg" alt="Debate on Electoral Reforms" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayaasELC;
