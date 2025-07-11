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
    label.innerText = 'Select an object to reflect on: ';
    label.style.marginRight = '10px';

    const label1 = document.createElement('label');
    label1.innerText = 'Select an object to reflect:'
    label1.style.marginRight = '10px';

    // Create dropdown
    const select = document.createElement('select');
    select.style.padding = '5px 10px';

    const select1 = document.createElement('select');
    select1.style.padding = '5px 10px';

    const options = ['Point', 'Line', 'Plane'];
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.toLowerCase();
        option.innerText = opt;
        select.appendChild(option);
    });

    const options1 = ['Point', 'Line', 'Plane'];
    options1.forEach(opt => {
      const option1 = document.createElement('option');
      option1.value = opt.toLowerCase();
      option1.innerText = opt
      select1.appendChild(option1);
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
        const selection1 = select1.value;
        document.body.removeChild(container); // Remove UI
        onStartCallback(selection,selection1); // Start simulation
    });

    // Add elements to container
    container.appendChild(label);
    container.appendChild(select);
    container.appendChild(document.createElement("br")); // Line break
    container.appendChild(label1);
    container.appendChild(select1);
    container.appendChild(document.createElement("br")); // Line break
    container.appendChild(startButton);
    // Add container to body
    document.body.appendChild(container);
}


// Stage 2 – Start Simulation
function startSimulation(selection, selection1) {
  if (selection === 'point') {
    if (selection1 === 'point') {
      Algebra(3, 0, 1, () => {
        let reflection = !(1e0 + 1e3).Normalized;
        let object = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
                0x00FF00, [object, object_ref]
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    }
    else if (selection1 === 'line') {
      Algebra(3, 0, 1, () => {
        let reflection = !(1e0 + 1e3).Normalized;
        let object = 1e12 + 0.25e23;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    }
    else if (selection1 === 'plane'){
      Algebra(3, 0, 1, () => {
        let reflection = !(1e0 + 0.5e2+0.5e1+0.5e3).Normalized;
        let object = 1e3;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    } 
  }
  else if (selection === 'line'){
    if (selection1 === 'point') {
      Algebra(3, 0, 1, () => {
        let reflection = 1e12 + 0.25e23;
        let object = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
                0x00FF00, [object, object_ref]
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    }
    else if (selection1 === 'line') {
      Algebra(3, 0, 1, () => {
        let reflection = 1e13 + 0.25e23;
        let object = 1e12 + 0.25e23;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    }
    else if (selection1 === 'plane'){
      Algebra(3, 0, 1, () => {
        let reflection = 1e12 + 0.25e23;
        let object = 1e3;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    } 
  }

  else {
    if (selection1 === 'point') {
      Algebra(3, 0, 1, () => {
        let reflection = 1e3;
        let object = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
                0x00FF00, [object, object_ref]
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    }
    else if (selection1 === 'line') {
      Algebra(3, 0, 1, () => {
        let reflection = 1e3;
        let object = 1e12 + 0.25e23;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    }
    else if (selection1 === 'plane'){
      Algebra(3, 0, 1, () => {
        let reflection = 0.5e3+0.5e2;
        let object = 1e3;
        let object_ref = -reflection * object * reflection;
    
        document.body.appendChild(this.graph(() => {
    
            return [
                0x0000FF, object,
                0xFF0000, object_ref,
                0xAAAAFF, reflection,
            ]
        }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
      });
    }     
  }

  }
  
  

// Main Entry Point
function main() {
  createSetupUI(startSimulation);
}

// Run the main flow
main();