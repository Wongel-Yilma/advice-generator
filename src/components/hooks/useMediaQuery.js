import React from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function hadleChange(e) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", hadleChange);
    return () => {
      matchQueryList.removeEventListener("change", hadleChange);
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;
