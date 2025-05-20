import React, { useState, useEffect, useRef } from "react";

const plastics = {
  PET: { name: "PET", color: "#4ea8de", initialMass: 10, k: 0.035 }, // Fast
  PP: { name: "PP", color: "#f9c74f", initialMass: 10, k: 0.018 }, // Moderate
  PE: { name: "PE", color: "#90be6d", initialMass: 10, k: 0.008 }, // Slow
};

function PlasticSimulator() {
  const canvasRef = useRef(null);
  const tooltipRef = useRef(null);
  const legendColorRef = useRef(null);

  const [selectedPlastic, setSelectedPlastic] = useState("PET");
  const [uvIntensity, setUvIntensity] = useState(70);
  const [time, setTime] = useState(0);
  const [mass, setMass] = useState(plastics["PET"].initialMass);
  const [data, setData] = useState([{ t: 0, m: plastics["PET"].initialMass }]);
  const [running, setRunning] = useState(true);

  const animationIdRef = useRef(null);

  // Resize canvas function
  function resizeCanvas(canvas) {
    if (!canvas) return;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  // Reset simulation function
  function resetSimulation(selected = selectedPlastic) {
    setTime(0);
    setMass(plastics[selected].initialMass);
    setData([{ t: 0, m: plastics[selected].initialMass }]);
    setRunning(true);
  }

  // Step function for simulation
  function step(currentTime, currentMass, currentData, currentSelectedPlastic, currentUvIntensity) {
    const k = plastics[currentSelectedPlastic].k * (currentUvIntensity / 100);
    const newTime = currentTime + 0.1;
    let newMass = plastics[currentSelectedPlastic].initialMass * Math.exp(-k * newTime);
    let newRunning = true;
    if (newMass < 0.01) {
      newMass = 0;
      newRunning = false;
    }
    let newData = [...currentData, { t: newTime, m: newMass }];
    if (newData.length > 300) newData.shift();
    return { newTime, newMass, newData, newRunning };
  }

  // Draw graph function
  function drawGraph(canvas, ctx, currentData, currentSelectedPlastic) {
    if (!canvas || !ctx) return;
    resizeCanvas(canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Axes
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 10);
    ctx.lineTo(40, canvas.height - 30);
    ctx.lineTo(canvas.width - 10, canvas.height - 30);
    ctx.stroke();

    // Labels
    ctx.fillStyle = "#333";
    ctx.font = "14px Arial";
    ctx.fillText("Time (min)", canvas.width / 2 - 30, canvas.height - 8);
    ctx.save();
    ctx.translate(12, canvas.height / 2 + 30);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Mass (g)", 0, 0);
    ctx.restore();

    // Data
    ctx.strokeStyle = plastics[currentSelectedPlastic].color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    let maxT = Math.max(...currentData.map((d) => d.t), 10);
    let maxM = plastics[currentSelectedPlastic].initialMass;
    for (let i = 0; i < currentData.length; i++) {
      let x = 40 + (canvas.width - 60) * (currentData[i].t / maxT);
      let y = canvas.height - 30 - (canvas.height - 60) * (currentData[i].m / maxM);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Current value
    ctx.fillStyle = plastics[currentSelectedPlastic].color;
    ctx.beginPath();
    let last = currentData[currentData.length - 1];
    let x = 40 + (canvas.width - 60) * (last.t / maxT);
    let y = canvas.height - 30 - (canvas.height - 60) * (last.m / maxM);
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fill();

    // Y-axis ticks
    ctx.fillStyle = "#555";
    ctx.font = "12px Arial";
    for (let i = 0; i <= 5; i++) {
      let m = maxM * (1 - i / 5);
      let yTick = canvas.height - 30 - (canvas.height - 60) * (m / maxM);
      ctx.fillText(m.toFixed(1), 8, yTick + 4);
    }

    // X-axis ticks
    for (let i = 0; i <= 5; i++) {
      let t = maxT * (i / 5);
      let xTick = 40 + (canvas.width - 60) * (t / maxT);
      ctx.fillText(t.toFixed(1), xTick - 10, canvas.height - 12);
    }
  }

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function animate() {
      if (running) {
        const { newTime, newMass, newData, newRunning } = step(time, mass, data, selectedPlastic, uvIntensity);
        setTime(newTime);
        setMass(newMass);
        setData(newData);
        setRunning(newRunning);
      }
      drawGraph(canvas, ctx, data, selectedPlastic);
      animationIdRef.current = requestAnimationFrame(animate);
    }

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [running, time, mass, data, selectedPlastic, uvIntensity]);

  // Update legend color when selectedPlastic changes
  useEffect(() => {
    if (legendColorRef.current) {
      legendColorRef.current.style.background = plastics[selectedPlastic].color;
    }
  }, [selectedPlastic]);

  // Handle plastic type change
  function handlePlasticChange(e) {
    const newPlastic = e.target.value;
    setSelectedPlastic(newPlastic);
    resetSimulation(newPlastic);
  }

  // Handle UV intensity change
  function handleUvChange(e) {
    const newUv = +e.target.value;
    setUvIntensity(newUv);
  }

  // Handle reset button click
  function handleReset() {
    resetSimulation();
  }

  // Tooltip management
  const [tooltipStyle, setTooltipStyle] = useState({ display: "none", left: 0, top: 0 });
  const [tooltipContent, setTooltipContent] = useState("");

  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let maxT = Math.max(...data.map((d) => d.t), 10);
    let maxM = plastics[selectedPlastic].initialMass;

    let minDist = 9999;
    let closest = null;
    for (let i = 0; i < data.length; i++) {
      let x = 40 + (canvas.width - 60) * (data[i].t / maxT);
      let y = canvas.height - 30 - (canvas.height - 60) * (data[i].m / maxM);
      let dist = Math.hypot(mx - x, my - y);
      if (dist < minDist) {
        minDist = dist;
        closest = { x, y, t: data[i].t, m: data[i].m };
      }
    }
    if (closest && minDist < 18) {
      setTooltipContent(
        `<b>Time:</b> ${closest.t.toFixed(2)} min<br><b>Mass:</b> ${closest.m.toFixed(3)} g`
      );
      setTooltipStyle({
        display: "block",
        left: e.clientX + 16,
        top: e.clientY - 8,
        position: "fixed",
        pointerEvents: "none",
        background: "rgba(255,255,255,0.95)",
        border: "1px solid #4ea8de",
        borderRadius: "6px",
        padding: "6px 12px",
        font: "14px Arial",
        color: "#222",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 1000,
      });
    } else {
      setTooltipStyle((prev) => ({ ...prev, display: "none" }));
    }
  }

  function handleMouseLeave() {
    setTooltipStyle((prev) => ({ ...prev, display: "none" }));
  }

  function handleClick(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let maxT = Math.max(...data.map((d) => d.t), 10);
    let maxM = plastics[selectedPlastic].initialMass;

    let minDist = 9999;
    let closest = null;
    for (let i = 0; i < data.length; i++) {
      let x = 40 + (canvas.width - 60) * (data[i].t / maxT);
      let y = canvas.height - 30 - (canvas.height - 60) * (data[i].m / maxM);
      let dist = Math.hypot(mx - x, my - y);
      if (dist < minDist) {
        minDist = dist;
        closest = { x, y, t: data[i].t, m: data[i].m };
      }
    }
    if (closest && minDist < 18) {
      setTooltipContent(
        `<b>Time:</b> ${closest.t.toFixed(2)} min<br><b>Mass:</b> ${closest.m.toFixed(3)} g`
      );
      setTooltipStyle((prev) => ({
        ...prev,
        display: "block",
        left: e.clientX + 16,
        top: e.clientY - 8,
      }));
      setTimeout(() => {
        setTooltipStyle((prev) => ({ ...prev, display: "none" }));
      }, 1800);
    }
  }

  return (
    <div className="relative p-6 bg-blue-900 rounded shadow-md max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-2 text-white">🔬 Photocatalysis Simulation: UV-Induced Plastic Degradation</h1>
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Plastic Type:{" "}
        </label>
        <select
          value={selectedPlastic}
          onChange={handlePlasticChange}
          className="w-full rounded border-none bg-blue-800 text-white px-3 py-2"
        >
          {Object.keys(plastics).map((key) => (
            <option key={key} value={key}>
              {plastics[key].name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-white mb-1">
          UV Intensity:{" "}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={uvIntensity}
          onChange={handleUvChange}
          className="rounded border-none bg-blue-800 text-white px-3 py-2"
        />
        <span className="ml-2 text-white">{uvIntensity}%</span>
      </div>
      <button
        onClick={handleReset}
        className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition"
      >
        Reset
      </button>
      <canvas
        ref={canvasRef}
        id="graph"
        className="w-full h-[300px] rounded border border-white bg-blue-800"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      ></canvas>
      <div
        ref={tooltipRef}
        style={{ ...tooltipStyle }}
        dangerouslySetInnerHTML={{ __html: tooltipContent }}
      />
      <div className="relative mb-4 z-10 flex items-center gap-2 text-white">
        <span
          className="inline-block w-5 h-5 rounded border border-gray-300"
          style={{ backgroundColor: plastics[selectedPlastic].color }}
          aria-label="Selected plastic color"
        ></span>
        Plastic Mass (g)
      </div>
    </div>
  );
}

export default PlasticSimulator;
