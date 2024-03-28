import { BackgroundBeamsDemo } from "./BackgroundBeamsDemo";
import Banner from "./banner"

const StickyBanner = () => {
  return (
    <div className="stickyBanner">
      <div className="relative">
      
        <div className="sticky top-0 h-fit flex flex-col items-center justify-center text-white">
          <BackgroundBeamsDemo />
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
