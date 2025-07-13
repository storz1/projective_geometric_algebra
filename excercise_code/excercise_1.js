import Algebra from './ganja.js';

Algebra(3, 0, 1, () => {
    //Define planes that you want to use multiple times (saves code)
    //examples:
    let left = 1e1 + 0.5e0;   // x = -1/2 plane
    let right = 1e1 - 0.5e0;  // x = +1/2 plane
    let bottom = 1e2 + 0.5e0; // y = -1/2 plane
    let top = 1e2 - 0.5e0;    // y = +1/2 plane
    let back = 1e3 + 0.5e0;   // z = -1/2 plane
    let front = 1e3 - 0.5e0;  // z = +1/2 plane

    //Define structural vertices : points always wedge of 3 planes: P=p1^p2^p3
    //Example:
    let vertices = [front ^ left  ^ bottom,   //0
                    front ^ left  ^ top,      //1  
                    front ^ right ^ bottom,   //2
                    front ^ right ^ top,      //3
                    back  ^ left  ^ bottom,   //4
                    back  ^ left  ^ top,      //5
                    back  ^ right ^ bottom,   //6
                    back  ^ right ^ top];     //7

    // Connect indices of vertices as edges
    //Example:
    let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                       [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                       [4, 6], [5, 7], [6, 7]];

    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    //append graph to simulation
    document.body.appendChild(this.graph(() => [
        0x0000FF, ...vertices,...edges(vertices),  // color, all vertices, all edges
    ], { clip: 5, grid: true }));
})
