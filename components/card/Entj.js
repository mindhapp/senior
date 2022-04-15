import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Entj() {
  return (
    <div>
      <center>
        <div>
          <Zoom>
            <img src="/assetsCard/entj/1.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/entj/2.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/entj/3.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/entj/4.png" alt="test" width={500} />
          </Zoom>
        </div>
        <br />
        <div>
          <a href="/assetsCard/entj/5.png" download>
            บันทึกรูปภาพ
          </a>
        </div>
      </center>
    </div>
  );
}

export default Entj;
