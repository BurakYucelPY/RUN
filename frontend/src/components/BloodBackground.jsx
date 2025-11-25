import React, { useEffect, useRef } from 'react';

const BloodBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drops = [];
    const maxDrops = 60; // Damla sayısı

    class Drop {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Başlangıçta ekranın her yerine dağılsın
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -100;
        this.speed = Math.random() * 3 + 2; // Hız
        this.width = Math.random() * 2 + 1; // Kalınlık
        this.length = Math.random() * 20 + 10; // Uzunluk
        this.opacity = Math.random() * 0.4 + 0.1; // Opaklık
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        // Kan kırmızısı
        ctx.fillStyle = `rgba(180, 0, 0, ${this.opacity})`;
        ctx.rect(this.x, this.y, this.width, this.length);
        // Damla ucu
        ctx.arc(this.x + this.width / 2, this.y + this.length, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < maxDrops; i++) {
      drops.push(new Drop());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Hafif kırmızımsı sis efekti
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0, 
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, 'rgba(20, 0, 0, 0)');
      gradient.addColorStop(1, 'rgba(80, 0, 0, 0.4)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #050000, #1a0000)' // Çok koyu kırmızı/siyah gradyan
      }}
    />
  );
};

export default BloodBackground;
