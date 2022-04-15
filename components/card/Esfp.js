import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Esfp() {
  return (
    <div>
      <center>
        <div>
          <Zoom>
            <img src="/assetsCard/esfp/1.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/esfp/2.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/esfp/3.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/esfp/4.png" alt="test" width={500} />
          </Zoom>
        </div>
        <br />
        <div>
          <a href="/assetsCard/esfp/5.png" download>
            บันทึกรูปภาพ
          </a>
        </div>
      </center>
    </div>
  );
}

export default Esfp;
