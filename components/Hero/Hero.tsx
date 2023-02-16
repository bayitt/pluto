import { useSelector } from "react-redux";
import { TAppState } from "../../store";

export const Hero = () => {
  const { articles, categories } = useSelector<TAppState, TAppState>(
    (state) => state
  );

  return <p>Hero</p>;
};
