import React from "react";

import './FloatingDiv.css';
import {themeContext} from "../../Context";
import {useContext} from "react";


const FloatingDiv = ({image, txt1, txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    // darkMode
    <div className="floatingdiv">
      <img src={image} alt="" />
      <span style={{ color: darkMode ? "black" : "" }}>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;

// import React from "react";

// import './FloatingDiv.css'


// const FloatinDiv = ({img, text1, text2}) => {
//   return (
//     // darkMode
//     <div className="floatingDiv">
//       <img src={img} alt="" />
//       <span>
//         {text1}
//         <br/>
//         {text2}
//       </span>
//     </div>
//   );
// };

// export default FloatinDiv;