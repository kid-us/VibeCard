import { useEffect, useState } from "react";
import LargeEditor from "../Editor/LargeEditor";
import SmallEditor from "../Editor/SmallEditor";
import Loading from "../Loading/Loading";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const ImageEditor = () => {
  const [title] = useState("Design your Card");
  useDocumentTitle(title);

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reload
  useEffect(() => {
    let isReloading = false;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isReloading) {
        const message =
          "Are you sure you want to leave? Your changes might not be saved.";
        event.returnValue = message; // Standard for most browsers
        return message; // For some older browsers
      }
    };

    const handlePopState = () => {
      isReloading = false; // Reset the flag if back navigation happens
    };

    const handleUnload = () => {
      isReloading = true; // Set flag to true only when a reload is detected
    };

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [history]);

  // Screen Detector
  useEffect(() => {
    function detectMobile() {
      const userAgent = navigator.userAgent || navigator.vendor;

      // Check for Android devices
      if (/android/i.test(userAgent)) {
        return true;
      }

      // Check for iOS devices
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return true;
      }

      // Check for other mobile user agents
      if (/Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        return true;
      }

      return false;
    }

    // Set the mobile state based on detection
    setIsMobile(detectMobile());
  }, []);

  if (isMobile === null) {
    return <Loading />;
  }

  return (
    <>
      {/* Large device */}
      {!isMobile && (
        <div className="lg:block hidden">
          <LargeEditor />
        </div>
      )}
      {/* Small device */}
      {isMobile && (
        <div className="lg:hidden block">
          <SmallEditor />
        </div>
      )}
    </>
  );
};

export default ImageEditor;
