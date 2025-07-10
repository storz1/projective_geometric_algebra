import Algebra from '../ganja.js';
function createSetupUI(onStartCallback) {
    // Create a container for UI
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '20px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.padding = '20px';
    container.style.backgroundColor = 'rgba(255,255,255,0.95)';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    container.style.textAlign = 'center';
    container.style.zIndex = '1000';

    // Create a label
    const label = document.createElement('label');
    label.innerText = 'Select an object: ';
    label.style.marginRight = '10px';

    // Create dropdown
    const select = document.createElement('select');
    select.style.padding = '5px 10px';

    const options = ['Point', 'Line', 'Plane'];
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.toLowerCase();
        option.innerText = opt;
        select.appendChild(option);
    });

    // Create Start button
    const startButton = document.createElement('button');
    startButton.innerText = 'Start';
    startButton.style.marginLeft = '20px';
    startButton.style.padding = '5px 15px';
    startButton.style.cursor = 'pointer';

    // Handle click
    startButton.addEventListener('click', () => {
        const selection = select.value;
        document.body.removeChild(container); // Remove UI
        onStartCallback(selection); // Start simulation
    });

    // Add elements to container
    container.appendChild(label);
    container.appendChild(select);
    container.appendChild(startButton);
    // Add container to body
    document.body.appendChild(container);
}


// Stage 2 – Start Simulation
function startSimulation(selection) {
  if (selection === 'point') {
    Algebra(3, 0, 1, () => {
        let point = !(1e0 + 1e3).Normalized;
        let reflection_point = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
        let point_ref = -reflection_point * point * reflection_point;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, point,
                0xFF0000, point_ref,
                0xAAAAFF, reflection_point,
                0x00FF00, [point, point_ref]
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
    });
  }
  else if (selection === 'line'){
    Algebra(3,0,1, () => {
      // Define a line L via two distinct points A, B
      let A = !(1e0 + 0.5e1+0.5e3).Normalized;
      let L = 1e12 + 0.25e23;
      let B = L >>> A;
      //let L = A | B ; // homogeneous line through A,B
      
      // Define a point P off the line
      let P = 1e1 + 0.5e2 + 1e0;
      
      // Reflect P in L
      let Pp = L >>> P;
      
      document.body.appendChild(this.graph(() => [
        0x0000FF, L,                         // draw line L in blue
        0xFF0000, A,                        // original P in red
        0x00FF00, B,                       // reflected point in green
        0xAAAAAA, [P, Pp]                  // segment connecting P and Pp in gray
      ], { grid: true, scale: 0.5 }));
    });
  }

  else {
    Algebra(3, 0, 1, () => {
        let point = !(1e0 + 1e3).Normalized;
        let plane = 1e3;
        let point_ref = -plane * point * plane;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, point,
                0xFF0000, point_ref,
                0xAAAAFF, plane,
                0x00FF00, [point, point_ref]
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
    });
    
  }

  }
  
  

// Main Entry Point
function main() {
  createSetupUI(startSimulation);
}

// Run the main flow
main();