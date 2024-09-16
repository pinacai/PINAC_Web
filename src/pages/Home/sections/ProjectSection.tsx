import React, { useEffect, useRef } from "react";
import styles from "./styles/ProjectSection.module.css";

const ProjectSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = "rgba(135, 206, 250, 0.8)";
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(135, 206, 250, ${1 - distance / 100})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.projectSection}>
      <canvas ref={canvasRef} className={styles.neuralNetwork}></canvas>
      <span className={styles.title}>Our Projects</span>
      <div className={styles.cardGrid}>
        <div className={styles.projectCard}>
          <span className={styles.cardTitle}>PINAC Workspace</span>
          <span className={styles.cardDescription}>
            A desktop app to address the widespread challenges professionals
            face in formulating effective prompts for AI, which often leads to
            suboptimal responses.
          </span>
        </div>
        <div className={styles.projectCard}>
          <span className={styles.cardTitle}>PINAC NexusGPT</span>
          <span className={styles.cardDescription}>
            AI-powered tool for effortless, high-quality results from simple
            prompts. No prompt engineering skills required. The CLI version of
            PINAC Workspace.
          </span>
        </div>
        <div className={styles.projectCard}>
          <span className={styles.cardTitle}>PINAC-Web</span>
          <span className={styles.cardDescription}>
            Public repository of this official website of PINAC Organization.
            Contribute to this repository to make this website even better !
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
