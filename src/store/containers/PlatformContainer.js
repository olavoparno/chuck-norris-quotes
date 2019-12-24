import { useState, useEffect } from "react";
import isMobile from "ismobilejs";
import { useLog } from "../hooks/useLog";

function PlatformContainer() {
  const [isMobileState, setIsMobile] = useState(global.window.innerWidth < 900);
  const [isLoadingState, setIsLoading] = useState(false);
  const { userAgent } = global.navigator;
  function handleSizeChange(customAgent) {
    const result =
      global.window.innerWidth < 900 ||
      isMobile(customAgent).phone ||
      isMobile(customAgent).tablet;
    return setIsMobile(result);
  }

  useEffect(() => {
    global.window.addEventListener("resize", () => handleSizeChange(userAgent));

    return () => {
      global.window.removeEventListener("resize", () =>
        handleSizeChange(userAgent)
      );
    };
  }, [isMobileState, userAgent]);

  const platformActions = {
    setIsLoading
  };

  const platformState = { isMobile: isMobileState, isLoading: isLoadingState };

  /**
   * JUST COMMENT THE LINE BELOW IF LOGGING IS NOT NEEDED
   */
  useLog("PlatformContainer", platformState);

  return { platformState, platformActions };
}

export { PlatformContainer };
