
import { useEffect, useRef } from 'react';

const SplineViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.98/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      const existingScript = document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.9.98/build/spline-viewer.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[200%] h-full -ml-[50%]">
          <spline-viewer 
            url="https://prod.spline.design/1vfkGuDjtcs43zf0/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplineViewer;
