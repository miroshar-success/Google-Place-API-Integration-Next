import { useEffect } from "react";

const useScrollTextAnimation = () => {
  useEffect(() => {
    const handleScrollTextAnimation = () => {
      const locationAreas = document.querySelectorAll(".location-area");

      locationAreas.forEach((locationArea) => {
        const dealName = locationArea.querySelector(".location-list");

        if (dealName.offsetWidth >= locationArea.offsetWidth) {
          dealName.classList.add("scrollTextAni");
        } else {
          dealName.classList.remove("scrollTextAni");
        }
      });
    };

    // Attach the event listener
    window.addEventListener("resize", handleScrollTextAnimation);

    // Initial check
    handleScrollTextAnimation();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleScrollTextAnimation);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render


};

export default useScrollTextAnimation;
