import { useEffect } from "react";

function Space() {
  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("Res", res);
        res.forEach((element) => {
            console.log(element);
        });
      });
  }, []);

  return(<h1>Loading spaces...</h1>)
}

export default Space;