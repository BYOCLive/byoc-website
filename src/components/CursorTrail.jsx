// CursorTrail.jsx - Component for smooth cursor line trail effect
import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const points = []; // Store points for the trail
    const maxPoints = 40; // Maximum number of points in the trail
    const trailLifetime = 800; // Trail disappearance time in milliseconds
    let mouse = { x: -100, y: -100 }; // Start off-screen
    let isActive = true;
    let lastTimestamp = 0;
    
    // Resize canvas to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Track mouse position
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      const now = Date.now();
      
      // Add current mouse position to points array with timestamp
      points.push({
        x: mouse.x,
        y: mouse.y,
        timestamp: now
      });
      
      // Limit points for performance
      if (points.length > maxPoints) {
        points.shift();
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    function animate() {
      if (!isActive) return;
      
      const now = Date.now();
      
      // Remove points that have expired
      while (points.length > 0 && now - points[0].timestamp > trailLifetime) {
        points.shift();
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the trail
      if (points.length > 1) {
        // Create smooth curve through points
        ctx.beginPath();
        
        // Setup gradient
        let gradient;
        if (points.length >= 2) {
          gradient = ctx.createLinearGradient(
            points[0].x, points[0].y,
            points[points.length - 1].x, points[points.length - 1].y
          );
          
          // Match exact tailwind gradient colors
          gradient.addColorStop(0, '#4ecdc4'); // teal-400
          gradient.addColorStop(0.5, '#3b82f6'); // blue-500
          gradient.addColorStop(1, '#7c3aed'); // purple-600
        } else {
          gradient = '#3b82f6'; // default color if we don't have enough points
        }
        
        // Draw the path
        ctx.beginPath();
        
        // Start with the first point
        ctx.moveTo(points[0].x, points[0].y);
        
        // Create a smooth curve through the points
        for (let i = 0; i < points.length - 1; i++) {
          const startPoint = points[i];
          const endPoint = points[i + 1];
          
          // Calculate how much time this point has left
          const pointAge = now - startPoint.timestamp;
          const opacity = Math.max(0, 1 - pointAge / trailLifetime);
          
          // Draw straight line segments with varying opacity
          ctx.beginPath();
          ctx.moveTo(startPoint.x, startPoint.y);
          ctx.lineTo(endPoint.x, endPoint.y);
          
          // Set line style
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.globalAlpha = opacity;
          ctx.stroke();
        }
        
        // Reset global alpha
        ctx.globalAlpha = 1;
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup
    return () => {
      isActive = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default CursorTrail;