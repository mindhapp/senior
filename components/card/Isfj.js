import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Isfj() {
  return (
    <div>
      <center>
        <div>
          <Zoom>
            <img src="/assetsCard/isfj/1.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/isfj/2.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/isfj/3.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/isfj/4.png" alt="test" width={500} />
          </Zoom>
        </div>
        <br />
        <div>
          <a href="/assetsCard/isfj/5.png" download>
            บันทึกรูปภาพ
          </a>
        </div>
      </center>
    </div>
  );
}

export default Isfj;
