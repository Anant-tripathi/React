import { useState } from "react";
import "./BoxCard.css";

export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box ${result}`}>
        {children}
        <button onClick={() => setShow(!show)} className="trigger">
          Hide
        </button>
      </div>
    </div>
  );
};

// children props are props that have been passed as a sub component of a
// however they are not passed explicitly. That is, in the example above the
// two p tags have not been passed seperately rather they are used withing the
// boxcard and because of that they are passed to boxcard internally and can
// be used by simply adding the children prop in the function declaration .
//
// Propo Drilling => when we have a variable or state of function that is
// being passed again and again to components then it is called prop
// drilling and it is good practice to use the same name for that prop
// throughout.
