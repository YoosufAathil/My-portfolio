import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2>Education</h2>
      {/* grid of 4 education cells */}
      <div className="grid-wrapper">
        {/* education cell */}
        <div className="cell">
          <h3>University of Colombo School of Computing</h3>
          <p>2018 - 2021</p>
          <p>BSc (Hons) in Information Systems</p>
        </div>
        {/* education cell */}
        <div className="cell">
          <h3>Lyceum International School</h3>
          <p>2016 - 2018</p>
          <p>London Advanced Level</p>
        </div>
        {/* education cell */}
        <div className="cell">
          <h3>Lyceum International School</h3>
          <p>2006 - 2016</p>
          <p>London Ordinary Level</p>
        </div>
        {/* education cell */}
        <div className="cell">
          <h3>Lyceum International School</h3>
          <p>2003 - 2006</p>
          <p>Primary Education</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
