import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Infj() {
  return (
    <div>
      <center>
        <div>
          <Zoom>
            <img
              src="/assetsCard/infj/1.png"
              width={500}
              alt="test"
            />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/infj/2.png" width={500} alt="test" />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/infj/3.png" width={500} alt="test" />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/infj/4.png" width={500} alt="test" />
          </Zoom>
        </div>
        
        <br />
        <div>
          <a href="/assetsCard/infj/5.png" download>
            บันทึกรูปภาพ
          </a>
        </div>
      </center>
    </div>
  );
}

export default Infj;
