import { useEffect, useRef } from "react";

export default function RadioVisualizer({ streamUrl }: { streamUrl: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    let audioCtx: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let source: MediaElementAudioSourceNode | null = null;
    let animationId: number;

    const startVisualizer = () => {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      source = audioCtx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      analyser.fftSize = 128;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      function draw() {
        if (!canvas || !ctx) return;
        animationId = requestAnimationFrame(draw);
        analyser!.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Create gradient using CSS variables
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue('--lavender-pink'));
        gradient.addColorStop(0.5, getComputedStyle(document.documentElement).getPropertyValue('--vanilla'));
        gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue('--fairy-tale'));
        ctx.fillStyle = gradient;
        const barWidth = (canvas.width / bufferLength) * 1.5;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          const barHeight = dataArray[i] / 1.5;
          ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        }
      }
      draw();
    };

    // Start visualizer when audio is played (user gesture required)
    const handlePlay = () => {
      if (audioCtx && audioCtx.state === "running") return;
      startVisualizer();
    };
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("play", handlePlay);
      if (audioCtx) audioCtx.close();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Make canvas full width
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = 80;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "fixed", left: 0, bottom: 0, width: "100vw", zIndex: 50 }}>
      <audio ref={audioRef} src={streamUrl} controls style={{ display: "none" }} autoPlay crossOrigin="anonymous" />
      <canvas ref={canvasRef} style={{ width: "100vw", height: 80, display: "block", background: "transparent" }} />
    </div>
  );
} 