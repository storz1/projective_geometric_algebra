import Algebra from './ganja.js';

Algebra(3, 0, 1, () => {
    //Insert constants:

    //Define vertices:
    let vertices = [
    ];

    // Define edges:
    let edgeIndices = [];

    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    // Define initial translation offset.
    let position = 1e123;

    // Start time (for animation).
    let t0 = performance.now();

    document.body.appendChild(this.graph(() => {
        // Time since start (in seconds).
        let t = (performance.now() - t0) / 1000;

        // Rotate the cube via rotor.
        //Define axis:
        let axis = (1e12 + 1e23).Normalized
        //Define angle:
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);

        // Translate the cube via translator.
        let line = (position & 1e123).Normalized.Dual;
        let dist = (position & 1e123).Length;
        let translator = 1 - dist / 2 * line;

        // Combine rotation and translation into a single motor.
        let motor = translator * rotor;
        let moved = vertices.map(v => motor >>> v);

        // Project the cube onto the screen.
        
        // Perspective projection.
        let cam = !(1e0 + 5e3).Normalized;
        let plane = 1e3;

        let projected = moved.map(v => (v & cam) ^ plane)
        return [
            0xFF00FF, ...projected, ...edges(projected),
            0x0000FF, ...moved, ...edges(moved),
            0xFF0000, 1e123, position, [1e123, position]
        ]
    }, { width: 512, height: 512, clip: 5, grid: true, animate: true }));
})
