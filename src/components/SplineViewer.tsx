
import { useEffect, useRef } from 'react';

const SplineViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.98/build/spline-viewer.js';
    document.head.appendChild(script);

    // Create the spline-viewer element after script loads
    script.onload = () => {
      if (containerRef.current) {
        const splineViewer = document.createElement('spline-viewer');
        splineViewer.setAttribute('url', 'https://prod.spline.design/1vfkGuDjtcs43zf0/scene.splinecode');
        splineViewer.style.width = '100%';
        splineViewer.style.height = '100%';
        splineViewer.style.opacity = '0.3';
        splineViewer.style.filter = 'hue-rotate(280deg) saturate(1.5) brightness(1.2)';
        containerRef.current.appendChild(splineViewer);
      }
    };

    return () => {
      // Clean up script if component unmounts
      const existingScript = document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.9.98/build/spline-viewer.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden -z-10">
      <div className="absolute right-0 top-0 w-[150%] h-full transform translate-x-1/3">
        <div className="w-full h-full opacity-60" ref={containerRef}>
          {/* Spline viewer will be inserted here */}
        </div>
      </div>
    </div>
  );
};

export default SplineViewer;
