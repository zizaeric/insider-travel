import React from "react";
import { Container } from "../components/Grid";


//Budget your trip widget

function Result() {
 

  return (
    <Container fluid>
      <div style={{ width: 300, margin: 0, padding: 0, border: 0 }}>
        <iframe
          title="badge"
          src="http://www.budgetyourtrip.com/widgets/countrycostwidget.php?width=300"
          frameBorder={0}
          border={0}
          cellSpacing={0}
          style={{
            width: 700,
            height: 600,
            margin: 0,
            padding: 0,
            overflow: "hidden",
            border: 0
          }}
        />
        <div
          style={{
            fontSize: "x-small",
            fontFamily: "Arial, Tahoma, sans-serif",
            textAlign: "right",
            width: 300,
            margin: 0,
            padding: 0
          }}
        >
        </div>
      </div>

     

    </Container>
  );
}
export default Result;
