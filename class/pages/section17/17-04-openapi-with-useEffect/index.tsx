import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPaege(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message); //사진 주소
      setDog(result.data.message);
    };

    onClickSync();
  }, []);

  return (
    <div>
      <img src={dog} />
      {/* <button onClick={onClickSync}>REST-API(동기)</button> */}
    </div>
  );
}
