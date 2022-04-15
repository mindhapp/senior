import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Estj() {
  return (
    <div>
      <center>
        <div>
          <Zoom>
            <img src="/assetsCard/estj/1.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/estj/2.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/estj/3.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/estj/4.png" alt="test" width={500} />
          </Zoom>
        </div>
        <br />
        <div>
          <a href="/assetsCard/estj/5.png" download>
            บันทึกรูปภาพ
          </a>
        </div>
      </center>
    </div>
  );
}

export default Estj;
