import { useEffect, useState } from "react";
import LargeEditor from "./LargeEditor";
import SmallEditor from "./SmallEditor";
import Loading from "../Loading/Loading";

const ImageEditor = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

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
