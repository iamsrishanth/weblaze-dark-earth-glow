
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
    <div className="w-full h-full relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[200%] h-full -ml-[50%]" ref={containerRef}>
          {/* Spline viewer will be inserted here */}
        </div>
      </div>
    </div>
  );
};

export default SplineViewer;
