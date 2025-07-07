import Algebra from '../ganja.js';

export function star_moving_perspective() {

    Algebra(3, 0, 1, () => {

    let left = 1e1 + 0.5e0;   
    let right = 1e1 - 0.5e0;  
    let bottom = 1e2 + 0.5e0; 
    let top = 1e2 - 0.5e0;    
    let back = 1e3 + 0.5e0;   
    let front = 1e3 - 0.5e0;  
    let middle1 = 1e1;
    let middle2 = 1e2;
    let middle3 = 1e3;
    let far_left = 0.5e1 + 0.5e0;  
    let far_right = 0.5e1 - 0.5e0;  
    let far_bottom = 0.5e2 + 0.5e0; 
    let far_top = 0.5e2 - 0.5e0;   
    let far_back = 0.5e3 + 0.5e0;   
    let far_front = 0.5e3 - 0.5e0;  

    let vertices = [front ^ left  ^ bottom,        // 0
                    front ^ left  ^ top,           // 1
                    front ^ right ^ bottom,        // 2
                    front ^ right ^ top,           // 3
                    back  ^ left  ^ bottom,        // 4
                    back  ^ left  ^ top,           // 5
                    back  ^ right ^ bottom,        // 6
                    back  ^ right ^ top,           // 7
                    middle1 ^ middle2 ^ far_back,  //8
                    middle1 ^ middle2 ^ far_front, //9
                    middle2 ^ middle3 ^ far_left,  //10
                    middle2 ^ middle3 ^ far_right, //11
                    middle3 ^ middle1 ^ far_bottom,//12
                    middle3 ^ middle1 ^ far_top];  //13
    let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                       [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                       [4, 6], [5, 7], [6, 7], [4, 8], [5, 8],
                       [6, 8], [7, 8], [0, 9], [1, 9], [2, 9], 
                       [3, 9], [0,10], [1,10], [4,10], [5,10],
                       [2,11], [3,11], [6,11], [7,11], [0,12],
                       [2,12], [4,12], [6,12], [1,13], [3,13],
                       [5,13], [7,13]];
    
    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);

    // Camera position (focal point and plane).
    let cam = !(1e0 + 5e3).Normalized;
    let plane = 1e3;

    // Helper functions in degrees.
    let cos = (deg) => Math.cos(deg * Math.PI / 180);
    let sin = (deg) => Math.sin(deg * Math.PI / 180);

    let t0 = performance.now();
    document.body.appendChild(this.graph(() => {
        // Time since start (in seconds).
        let t = (performance.now() - t0) / 1000;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
            cam, ...rotated, ...edges(rotated),

            0x0000FF, ...edges(rotated.map(v => (v & cam) ^ plane)),
                      ...rotated.map(v => (v & cam) ^ plane),
            0xFF0000, ...rotated.map(v => [(v & cam) ^ plane, v]),
            0xAAAAFF, 1e3,
            0xFF0000, ...rotated.map(v => [cam, (v & cam) ^ plane]),
        ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, camera: cos(30) - sin(30) * 1e13, animate: true}));
})
}

export function star_moving_orthographic() {

    Algebra(3, 0, 1, () => {

    let left = 1e1 + 0.5e0;   
    let right = 1e1 - 0.5e0;  
    let bottom = 1e2 + 0.5e0; 
    let top = 1e2 - 0.5e0;    
    let back = 1e3 + 0.5e0;   
    let front = 1e3 - 0.5e0;  
    let middle1 = 1e1;
    let middle2 = 1e2;
    let middle3 = 1e3;
    let far_left = 0.5e1 + 0.5e0;  
    let far_right = 0.5e1 - 0.5e0;  
    let far_bottom = 0.5e2 + 0.5e0; 
    let far_top = 0.5e2 - 0.5e0;   
    let far_back = 0.5e3 + 0.5e0;   
    let far_front = 0.5e3 - 0.5e0;  

    let vertices = [front ^ left  ^ bottom,        // 0
                    front ^ left  ^ top,           // 1
                    front ^ right ^ bottom,        // 2
                    front ^ right ^ top,           // 3
                    back  ^ left  ^ bottom,        // 4
                    back  ^ left  ^ top,           // 5
                    back  ^ right ^ bottom,        // 6
                    back  ^ right ^ top,           // 7
                    middle1 ^ middle2 ^ far_back,  //8
                    middle1 ^ middle2 ^ far_front, //9
                    middle2 ^ middle3 ^ far_left,  //10
                    middle2 ^ middle3 ^ far_right, //11
                    middle3 ^ middle1 ^ far_bottom,//12
                    middle3 ^ middle1 ^ far_top];  //13
    let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                       [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                       [4, 6], [5, 7], [6, 7], [4, 8], [5, 8],
                       [6, 8], [7, 8], [0, 9], [1, 9], [2, 9], 
                       [3, 9], [0,10], [1,10], [4,10], [5,10],
                       [2,11], [3,11], [6,11], [7,11], [0,12],
                       [2,12], [4,12], [6,12], [1,13], [3,13],
                       [5,13], [7,13]];
    
    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
    let plane = 1e3;
    let t0 = performance.now();
    document.body.appendChild(this.graph(() => {
        // Time since start (in seconds).
        let t = (performance.now() - t0) / 1000;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
                0x0000FF, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v | plane) ^ plane)),
                          ...rotated.map(v => (v | plane) ^ plane),
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane]),
            ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, animate: true}));
})
}

export function star_fixed_perspective() {
    Algebra(3, 0, 1, () => {

    let left = 1e1 + 0.5e0;   
    let right = 1e1 - 0.5e0;  
    let bottom = 1e2 + 0.5e0; 
    let top = 1e2 - 0.5e0;    
    let back = 1e3 + 0.5e0;   
    let front = 1e3 - 0.5e0;  
    let middle1 = 1e1;
    let middle2 = 1e2;
    let middle3 = 1e3;
    let far_left = 0.5e1 + 0.5e0;  
    let far_right = 0.5e1 - 0.5e0;  
    let far_bottom = 0.5e2 + 0.5e0; 
    let far_top = 0.5e2 - 0.5e0;   
    let far_back = 0.5e3 + 0.5e0;   
    let far_front = 0.5e3 - 0.5e0;  

    let vertices = [front ^ left  ^ bottom,        // 0
                    front ^ left  ^ top,           // 1
                    front ^ right ^ bottom,        // 2
                    front ^ right ^ top,           // 3
                    back  ^ left  ^ bottom,        // 4
                    back  ^ left  ^ top,           // 5
                    back  ^ right ^ bottom,        // 6
                    back  ^ right ^ top,           // 7
                    middle1 ^ middle2 ^ far_back,  //8
                    middle1 ^ middle2 ^ far_front, //9
                    middle2 ^ middle3 ^ far_left,  //10
                    middle2 ^ middle3 ^ far_right, //11
                    middle3 ^ middle1 ^ far_bottom,//12
                    middle3 ^ middle1 ^ far_top];  //13
    let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                       [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                       [4, 6], [5, 7], [6, 7], [4, 8], [5, 8],
                       [6, 8], [7, 8], [0, 9], [1, 9], [2, 9], 
                       [3, 9], [0,10], [1,10], [4,10], [5,10],
                       [2,11], [3,11], [6,11], [7,11], [0,12],
                       [2,12], [4,12], [6,12], [1,13], [3,13],
                       [5,13], [7,13]];
    
    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);

    // Camera position (focal point and plane).
    let cam = !(1e0 + 5e3).Normalized;
    let plane = 1e3;

    // Helper functions in degrees.
    let cos = (deg) => Math.cos(deg * Math.PI / 180);
    let sin = (deg) => Math.sin(deg * Math.PI / 180);

    document.body.appendChild(this.graph(() => {
        let t = 8.1;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
            cam, ...rotated, ...edges(rotated),

            0x0000FF, ...edges(rotated.map(v => (v & cam) ^ plane)),
                      ...rotated.map(v => (v & cam) ^ plane),
            0xFF0000, ...rotated.map(v => [(v & cam) ^ plane, v]),
            0xAAAAFF, 1e3,
            0xFF0000, ...rotated.map(v => [cam, (v & cam) ^ plane]),
        ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, camera: cos(30) - sin(30) * 1e13, animate: true}));
})
}

export function star_fixed_orthographic() {
    Algebra(3, 0, 1, () => {

    let left = 1e1 + 0.5e0;   
    let right = 1e1 - 0.5e0;  
    let bottom = 1e2 + 0.5e0; 
    let top = 1e2 - 0.5e0;    
    let back = 1e3 + 0.5e0;   
    let front = 1e3 - 0.5e0;  
    let middle1 = 1e1;
    let middle2 = 1e2;
    let middle3 = 1e3;
    let far_left = 0.5e1 + 0.5e0;  
    let far_right = 0.5e1 - 0.5e0;  
    let far_bottom = 0.5e2 + 0.5e0; 
    let far_top = 0.5e2 - 0.5e0;   
    let far_back = 0.5e3 + 0.5e0;   
    let far_front = 0.5e3 - 0.5e0;  

    let vertices = [front ^ left  ^ bottom,        // 0
                    front ^ left  ^ top,           // 1
                    front ^ right ^ bottom,        // 2
                    front ^ right ^ top,           // 3
                    back  ^ left  ^ bottom,        // 4
                    back  ^ left  ^ top,           // 5
                    back  ^ right ^ bottom,        // 6
                    back  ^ right ^ top,           // 7
                    middle1 ^ middle2 ^ far_back,  //8
                    middle1 ^ middle2 ^ far_front, //9
                    middle2 ^ middle3 ^ far_left,  //10
                    middle2 ^ middle3 ^ far_right, //11
                    middle3 ^ middle1 ^ far_bottom,//12
                    middle3 ^ middle1 ^ far_top];  //13
    let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                       [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                       [4, 6], [5, 7], [6, 7], [4, 8], [5, 8],
                       [6, 8], [7, 8], [0, 9], [1, 9], [2, 9], 
                       [3, 9], [0,10], [1,10], [4,10], [5,10],
                       [2,11], [3,11], [6,11], [7,11], [0,12],
                       [2,12], [4,12], [6,12], [1,13], [3,13],
                       [5,13], [7,13]];
    
    

    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
    let plane = 1e3;
    document.body.appendChild(this.graph(() => {
        let t = 8.1;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
                0x0000FF, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v | plane) ^ plane)),
                          ...rotated.map(v => (v | plane) ^ plane),
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane]),
            ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, animate: true}));
})
}

export function cube_moving_perspective() {
    Algebra(3, 0, 1, () => {
    
        let left = 1e1 + 0.5e0;   
        let right = 1e1 - 0.5e0;  
        let bottom = 1e2 + 0.5e0; 
        let top = 1e2 - 0.5e0;   
        let back = 1e3 + 0.5e0;   
        let front = 1e3 - 0.5e0; 
    
        let vertices = [front ^ left  ^ bottom,
                        front ^ left  ^ top,
                        front ^ right ^ bottom,
                        front ^ right ^ top,
                        back  ^ left  ^ bottom,
                        back  ^ left  ^ top,
                        back  ^ right ^ bottom,
                        back  ^ right ^ top];

        let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                           [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                           [4, 6], [5, 7], [6, 7]];
    
        // Function to apply edge indices to vertices.
        let edges = vertices => edgeIndices.map(([i, j]) => [
            vertices[i], vertices[j]
        ]);
    
    
        // Move cube to the back.
        vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
    
        // Camera position (focal point and plane).
        let cam = !(1e0 + 5e3).Normalized;
        let plane = 1e3;
    
        // Helper functions in degrees.
        let cos = (deg) => Math.cos(deg * Math.PI / 180);
        let sin = (deg) => Math.sin(deg * Math.PI / 180);
    
        let t0 = performance.now();
        document.body.appendChild(this.graph(() => {
            // Time since start (in seconds).
            let t = (performance.now() - t0) / 1000;
    
            // Rotate the cube via rotor.
            let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
            let angle = 2 * Math.PI * t / 5;
            let rotor = Math.E ** (-angle / 2 * axis);
            let rotated = vertices.map(v => rotor >>> v);
    
            return [
                cam, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v & cam) ^ plane)),
                          ...rotated.map(v => (v & cam) ^ plane),
                0xFF0000, ...rotated.map(v => [(v & cam) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [cam, (v & cam) ^ plane]),
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, camera: cos(30) - sin(30) * 1e13, animate: true}));
    })
}

export function cube_moving_orthographic() {
    Algebra(3, 0, 1, () => {
    
        let left = 1e1 + 0.5e0;   
        let right = 1e1 - 0.5e0;  
        let bottom = 1e2 + 0.5e0; 
        let top = 1e2 - 0.5e0;   
        let back = 1e3 + 0.5e0;   
        let front = 1e3 - 0.5e0; 
    

        let vertices = [front ^ left  ^ bottom,
                        front ^ left  ^ top,
                        front ^ right ^ bottom,
                        front ^ right ^ top,
                        back  ^ left  ^ bottom,
                        back  ^ left  ^ top,
                        back  ^ right ^ bottom,
                        back  ^ right ^ top];

        let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                           [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                           [4, 6], [5, 7], [6, 7]];
    
        // Function to apply edge indices to vertices.
        let edges = vertices => edgeIndices.map(([i, j]) => [
            vertices[i], vertices[j]
        ]);
    
        // Move cube to the back.
        vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
        let plane = 1e3;
    
        let t0 = performance.now();
        document.body.appendChild(this.graph(() => {
            // Time since start (in seconds).
            let t = (performance.now() - t0) / 1000;
    
            // Rotate the cube via rotor.
            let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
            let angle = 2 * Math.PI * t / 5;
            let rotor = Math.E ** (-angle / 2 * axis);
            let rotated = vertices.map(v => rotor >>> v);
    
            return [
                0x0000FF, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v | plane) ^ plane)),
                          ...rotated.map(v => (v | plane) ^ plane),
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane]),
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true,animate: true}));
    })
}

export function cube_fixed_perspective() {
    Algebra(3, 0, 1, () => {
    
        let left = 1e1 + 0.5e0;   
        let right = 1e1 - 0.5e0;  
        let bottom = 1e2 + 0.5e0; 
        let top = 1e2 - 0.5e0;   
        let back = 1e3 + 0.5e0;   
        let front = 1e3 - 0.5e0; 

        let vertices = [front ^ left  ^ bottom,
                        front ^ left  ^ top,
                        front ^ right ^ bottom,
                        front ^ right ^ top,
                        back  ^ left  ^ bottom,
                        back  ^ left  ^ top,
                        back  ^ right ^ bottom,
                        back  ^ right ^ top];
        let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                           [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                           [4, 6], [5, 7], [6, 7]];
    
        // Function to apply edge indices to vertices.
        let edges = vertices => edgeIndices.map(([i, j]) => [
            vertices[i], vertices[j]
        ]);
    
    
        // Move cube to the back.
        vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
    
        // Camera position (focal point and plane).
        let cam = !(1e0 + 5e3).Normalized;
        let plane = 1e3;
    
        // Helper functions in degrees.
        let cos = (deg) => Math.cos(deg * Math.PI / 180);
        let sin = (deg) => Math.sin(deg * Math.PI / 180);
    
        document.body.appendChild(this.graph(() => {
            let t = 8.1;
    
            // Rotate the cube via rotor.
            let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
            let angle = 2 * Math.PI * t / 5;
            let rotor = Math.E ** (-angle / 2 * axis);
            let rotated = vertices.map(v => rotor >>> v);
    
            return [
                cam, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v & cam) ^ plane)),
                          ...rotated.map(v => (v & cam) ^ plane),
                0xFF0000, ...rotated.map(v => [(v & cam) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [cam, (v & cam) ^ plane]),
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, camera: cos(30) - sin(30) * 1e13}));
    })
}

export function cube_fixed_orthographic() {
    Algebra(3, 0, 1, () => {
    
        let left = 1e1 + 0.5e0;   
        let right = 1e1 - 0.5e0;  
        let bottom = 1e2 + 0.5e0; 
        let top = 1e2 - 0.5e0;   
        let back = 1e3 + 0.5e0;   
        let front = 1e3 - 0.5e0; 

        let vertices = [front ^ left  ^ bottom,
                        front ^ left  ^ top,
                        front ^ right ^ bottom,
                        front ^ right ^ top,
                        back  ^ left  ^ bottom,
                        back  ^ left  ^ top,
                        back  ^ right ^ bottom,
                        back  ^ right ^ top];

        let edgeIndices = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5],
                           [2, 3], [2, 6], [3, 2], [3, 7], [4, 5],
                           [4, 6], [5, 7], [6, 7]];

        // Function to apply edge indices to vertices.
        let edges = vertices => edgeIndices.map(([i, j]) => [
            vertices[i], vertices[j]
        ]);
    
        // Move cube to the back.
        vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
        let plane = 1e3;
    
        document.body.appendChild(this.graph(() => {
            let t = 8.1;
            // Rotate the cube via rotor.
            let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
            let angle = 2 * Math.PI * t / 5;
            let rotor = Math.E ** (-angle / 2 * axis);
            let rotated = vertices.map(v => rotor >>> v);
    
            return [
                0x0000FF, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v | plane) ^ plane)),
                          ...rotated.map(v => (v | plane) ^ plane),
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane]),
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
    })
}

export function diamond_moving_perspective() {

    Algebra(3, 0, 1, () => {

    let left   = 1e1 + 0.5e0;  
    let middle1 = 1e1 + 0e0;
    let middle2 = 1e3 + 0e0;
    let right  = 1e1 - 0.5e0;  
    let bottom = 1e2 + 1e0;  
    let top    = 1e2 - 0.1e0;  
    let peak   = 1e2 - 0.5e0
    let back   = 1e3 + 0.5e0;
    let front  = 1e3 - 0.5e0;

    let vertices = [front ^ left  ^ top,           // 0
                    front ^ right ^ top,           // 1
                    back  ^ left  ^ top,           // 2
                    back  ^ right ^ top,           // 3
                    middle1 ^ middle2 ^bottom,     // 4
                    middle1 ^ middle2 ^peak];      // 5

    // Indices of vertex pairs that connect to edges.
    let edgeIndices = [[0, 1], [0, 2], [1, 3], [2, 3],
                       [4, 0], [4, 1], [4, 2], [4, 3],
                       [5, 0], [5, 1], [5, 2], [5, 3]];
    
    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);


    // Move cube to the back.
    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);

    // Camera position (focal point and plane).
    let cam = !(1e0 + 5e3).Normalized;
    let plane = 1e3;

    // Helper functions in degrees.
    let cos = (deg) => Math.cos(deg * Math.PI / 180);
    let sin = (deg) => Math.sin(deg * Math.PI / 180);

    let t0 = performance.now();
    document.body.appendChild(this.graph(() => {
        // Time since start (in seconds).
        //let t = 8.1;
        let t = (performance.now() - t0) / 1000;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
            cam, ...rotated, ...edges(rotated),

            0x0000FF, ...edges(rotated.map(v => (v & cam) ^ plane)),
                      ...rotated.map(v => (v & cam) ^ plane),
            0xFF0000, ...rotated.map(v => [(v & cam) ^ plane, v]),
            0xAAAAFF, 1e3,
            0xFF0000, ...rotated.map(v => [cam, (v & cam) ^ plane]),
        ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, camera: cos(30) - sin(30) * 1e13, animate: true}));
})
}

export function diamond_moving_orthographic() {

    Algebra(3, 0, 1, () => {

    let left   = 1e1 + 0.5e0;  
    let middle1 = 1e1 + 0e0;
    let middle2 = 1e3 + 0e0;
    let right  = 1e1 - 0.5e0;  
    let bottom = 1e2 + 1e0;  
    let top    = 1e2 - 0.1e0;  
    let peak   = 1e2 - 0.5e0
    let back   = 1e3 + 0.5e0;
    let front  = 1e3 - 0.5e0;

    let vertices = [front ^ left  ^ top,           // 0
                    front ^ right ^ top,           // 1
                    back  ^ left  ^ top,           // 2
                    back  ^ right ^ top,           // 3
                    middle1 ^ middle2 ^bottom,     // 4
                    middle1 ^ middle2 ^peak];      // 5

    // Indices of vertex pairs that connect to edges.
    let edgeIndices = [[0, 1], [0, 2], [1, 3], [2, 3],
                       [4, 0], [4, 1], [4, 2], [4, 3],
                       [5, 0], [5, 1], [5, 2], [5, 3]];
    
    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    // Move cube to the back.
    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
    let plane = 1e3;

    let t0 = performance.now();
    document.body.appendChild(this.graph(() => {
        // Time since start (in seconds).
        let t = (performance.now() - t0) / 1000;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
                0x0000FF, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v | plane) ^ plane)),
                          ...rotated.map(v => (v | plane) ^ plane),
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane]),
            ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, animate: true}));
})
}

export function diamond_fixed_perspective() {
    Algebra(3, 0, 1, () => {

    let left   = 1e1 + 0.5e0;  
    let middle1 = 1e1 + 0e0;
    let middle2 = 1e3 + 0e0;
    let right  = 1e1 - 0.5e0;  
    let bottom = 1e2 + 1e0;  
    let top    = 1e2 - 0.1e0;  
    let peak   = 1e2 - 0.5e0
    let back   = 1e3 + 0.5e0;
    let front  = 1e3 - 0.5e0;

    let vertices = [front ^ left  ^ top,           // 0
                    front ^ right ^ top,           // 1
                    back  ^ left  ^ top,           // 2
                    back  ^ right ^ top,           // 3
                    middle1 ^ middle2 ^bottom,     // 4
                    middle1 ^ middle2 ^peak];      // 5

    // Indices of vertex pairs that connect to edges.
    let edgeIndices = [[0, 1], [0, 2], [1, 3], [2, 3],
                       [4, 0], [4, 1], [4, 2], [4, 3],
                       [5, 0], [5, 1], [5, 2], [5, 3]];

    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);
    // Move cube to the back.
    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);

    // Camera position (focal point and plane).
    let cam = !(1e0 + 5e3).Normalized;
    let plane = 1e3;

    // Helper functions in degrees.
    let cos = (deg) => Math.cos(deg * Math.PI / 180);
    let sin = (deg) => Math.sin(deg * Math.PI / 180);

    document.body.appendChild(this.graph(() => {
        let t = 8.1;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
            cam, ...rotated, ...edges(rotated),

            0x0000FF, ...edges(rotated.map(v => (v & cam) ^ plane)),
                      ...rotated.map(v => (v & cam) ^ plane),
            0xFF0000, ...rotated.map(v => [(v & cam) ^ plane, v]),
            0xAAAAFF, 1e3,
            0xFF0000, ...rotated.map(v => [cam, (v & cam) ^ plane]),
        ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, camera: cos(30) - sin(30) * 1e13, animate: true}));
})
}

export function diamond_fixed_orthographic() {
    Algebra(3, 0, 1, () => {

    let left   = 1e1 + 0.5e0;  
    let middle1 = 1e1 + 0e0;
    let middle2 = 1e3 + 0e0;
    let right  = 1e1 - 0.5e0;  
    let bottom = 1e2 + 1e0;  
    let top    = 1e2 - 0.1e0;  
    let peak   = 1e2 - 0.5e0
    let back   = 1e3 + 0.5e0;
    let front  = 1e3 - 0.5e0;

    let vertices = [front ^ left  ^ top,           // 0
                    front ^ right ^ top,           // 1
                    back  ^ left  ^ top,           // 2
                    back  ^ right ^ top,           // 3
                    middle1 ^ middle2 ^bottom,     // 4
                    middle1 ^ middle2 ^peak];      // 5

    // Indices of vertex pairs that connect to edges.
    let edgeIndices = [[0, 1], [0, 2], [1, 3], [2, 3],
                       [4, 0], [4, 1], [4, 2], [4, 3],
                       [5, 0], [5, 1], [5, 2], [5, 3]];
    
    // Function to apply edge indices to vertices.
    let edges = vertices => edgeIndices.map(([i, j]) => [
        vertices[i], vertices[j]
    ]);

    vertices = vertices.map(v => (1 + 3.5e03 / 2) >>> v);
    let plane = 1e3;

    document.body.appendChild(this.graph(() => {
        let t = 8.1;

        // Rotate the cube via rotor.
        let axis = (1 + 3.5e03 / 2) >>> ((1e12 + 1e23).Normalized)
        let angle = 2 * Math.PI * t / 5;
        let rotor = Math.E ** (-angle / 2 * axis);
        let rotated = vertices.map(v => rotor >>> v);

        return [
                0x0000FF, ...rotated, ...edges(rotated),
    
                0x0000FF, ...edges(rotated.map(v => (v | plane) ^ plane)),
                          ...rotated.map(v => (v | plane) ^ plane),
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane, v]),
                0xAAAAFF, 1e3,
                0xFF0000, ...rotated.map(v => [(v | plane) ^ plane]),
            ]
    }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true, animate: true}));
})
}
