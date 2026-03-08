function plotCubicEquation() {
    const canvas = document.getElementById("graph");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    canvas.width = canvas.width //not stupid, to reset canvas without ctx.clearRect command

    // 1. Transform the coordinate system
    // Move origin to the center and flip y-axis
    ctx.translate(width / 2, height / 2);
    ctx.scale(1, -1);

    // 2. Define the cubic function
    // Example: y = x^3 (a=1, b=0, c=0, d=0)

    function cubicFn(x) {
        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);
        let c = Number(document.getElementById("c").value);
        let d = Number(document.getElementById("d").value);

        return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
    }

    // 3. Define the plotting parameters
    const scale = 20; // Adjust scale for better visualization
    const startX = -10; // Start x-value
    const endX = 10;   // End x-value
    const step = 0.1;  // Smaller step for a smoother curve

    // 4. Draw the axes (optional but helpful)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-width / 2, 0);
    ctx.lineTo(width / 2, 0);
    ctx.moveTo(0, -height / 2);
    ctx.lineTo(0, height / 2);
    ctx.stroke();

    // 5. Plot the function
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.beginPath();



    for (let x = startX; x <= endX; x += step) {
        const y = cubicFn(x);
        // Scale the points for the canvas coordinates
        const canvasX = x * scale;
        const canvasY = y * scale;

        if (x === startX) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            // Draw a line to the next point
            ctx.lineTo(canvasX, canvasY);
        }
    }

    ctx.stroke();
}

// Run the function when the script loads

