import React from "react";

const educationStyle = {
  backgroundColor: "#f5f5f5",
  padding: "40px 0",
  display: "flex",
  flexDirection: "column",
  AlignItems: "center",
  textAlign: "center",
  margin: "auto",
};

const gridWrapperStyle = {
  padding: "4rem",
  margin: "3rem auto",
};

const cellStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const cellHeaderStyle = {
  color: "#333",
  fontSize: "1.5em",
  marginBottom: "10px",
};

const cellParagraphStyle = {
  color: "#666",
  fontSize: "1.1em",
  margin: "8px 0",
};

const Education = () => {
  return (
    <section className="padding" id="education" style={{ educationStyle }}>
      {/* grid of 4 education cells */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Education</h2>
      <div className="grid-wrapper" style={{ gridWrapperStyle }}>
        {/* education cell */}
        <div className="cell" style={{ cellStyle }}>
          <h3 style={{ cellHeaderStyle }}>Sabaragamuwa University of Sri Lanka</h3>
          <p style={{ cellParagraphStyle }}> 2021 - 2025</p>
          <p style={{ cellParagraphStyle }}>BSc (Hons) in Computing and Information Systems</p>
        </div>

        {/* education cell */}
        <div className="cell" style={{ cellStyle }}>
          <h3 style={{ cellHeaderStyle }}>Zahira National College Kalmunai</h3>
          <p style={{ cellParagraphStyle }}> 2016 - 2019</p>
          <p style={{ cellParagraphStyle }}>G.C.E. (Advanced Level) in Physical Sciences</p>
        </div>
        {/* education cell */}
        <div className="cell" style={{ cellStyle }}>
          <h3 style={{ cellHeaderStyle }}>Zahira National College Kalmunai</h3>
          <p style={{ cellParagraphStyle }}>2013 - 2016</p>
          <p style={{ cellParagraphStyle }}>G.C.E. (Ordinary Level)</p>
        </div>
        {/* education cell */}
        <div className="cell" style={{ cellStyle }}>
          <h3 style={{ cellHeaderStyle }}>Al-Hilal Vidyalaya</h3>
          <p style={{ cellParagraphStyle }}>2006 - 2013</p>
          <p style={{ cellParagraphStyle }}>Primary Education</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
