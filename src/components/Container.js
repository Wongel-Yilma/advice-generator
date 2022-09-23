import React from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import { ReactComponent as DesktopDividerIcon } from "../images/pattern-divider-desktop.svg";
import { ReactComponent as MobileDividerIcon } from "../images/pattern-divider-mobile.svg";
import { ReactComponent as DiceIcon } from "../images/icon-dice.svg";

const BASE_URL = "https://api.adviceslip.com/advice";

const Container = () => {
  const [{ id, advice }, setState] = React.useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  React.useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    (async function () {
      const response = await fetch(BASE_URL);
      const { slip } = await response.json();
      console.log(slip);
      setState({ id: slip.id, advice: slip.advice });
    })();
  };
  return (
    <div className="container">
      <div className="header">Advice #{id}</div>
      <div className="advice">{`"${advice}"`}</div>
      <div className="divider-icon">
        {isMobile ? <MobileDividerIcon /> : <DesktopDividerIcon />}
      </div>
      <div className="dice" onClick={getAdvice}>
        <div className="icon-dice">
          <DiceIcon />
        </div>
      </div>
    </div>
  );
};

export default Container;
