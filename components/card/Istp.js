import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Istp() {
  return (
    <div>
      <center>
        <div>
          <Zoom>
            <img src="/assetsCard/istp/1.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/istp/2.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/istp/3.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/istp/4.png" alt="test" width={500} />
          </Zoom>
        </div>
        <br />
        <div>
          <a href="/assetsCard/istp/5.png" download>
            บันทึกรูปภาพ
          </a>
        </div>
      </center>
    </div>
  );
}

export default Istp;
