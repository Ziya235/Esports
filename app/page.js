import Banner from "./components/banner";
import Explore from "./components/explore";
import Faq from "./components/faq";
import Game_on from "./components/game_on";
import Top_10 from "./components/top_10";


export default function Home() {
  return (
  <>
    <Banner/>
    <Explore/>
    <Top_10/>
    <Game_on/>
    <Faq/>
  </>
  );
}
