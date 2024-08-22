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
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message =
        "Are you sure you want to leave? Your changes might not be saved.";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    const handlePopState = () => {
      // Logic for detecting navigation
      const confirmNavigation = window.confirm(
        "Are you sure you want to leave this page? Your changes might not be saved."
      );
      if (!confirmNavigation) {
        // Prevent the navigation by pushing a new state
        window.history.pushState(null, "", window.location.href);
      }
    };

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
