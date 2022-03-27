import "./styles.css";
import image from "./image";
import { useState } from "react";

export default function App() {
  const [select, setSelect] = useState(image[0]);
  return (
    <div className="App">
      <div className="container">
        <div className="imgSelected">
          <img src={select} alt="photo" />
        </div>
        <div className="imgContainer">
          {image.map((img, index) => (
            <div className="image" key={index}>
              <img
                src={img}
                onClick={() => setSelect(img)}
                style={{ border: select === img ? "4px solid purple" : "" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
