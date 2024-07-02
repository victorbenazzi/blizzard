import Header from "./components/Header";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-start justify-center ">
        <Header />
        <div className="w-full relative">
          <Slider />
        </div>
      </div>
    </>
  );
}
