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
    label.innerText = 'Select a Product: ';
    label.style.marginRight = '10px';

    const label1 = document.createElement('label');
    label1.innerText = 'Type 1';
    label1.style.marginRight = '10px';

    const label2 = document.createElement('label');
    label2.innerText = 'Type2';
    label2.style.marginRight = '10px';

    // Create dropdown
    const select = document.createElement('select');
    select.style.padding = '5px 10px';

    const select1 = document.createElement('select');
    select1.style.padding = '5px 10px';

    const select2 = document.createElement('select');
    select2.style.padding = '5px 10px'

    const options = ['Outer', 'Regressive', 'Inner'];
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.toLowerCase();
        option.innerText = opt;
        select.appendChild(option);
    });

    const options1 = ['Point', 'Line', 'Plane'];
    options1.forEach(opt1 => {
        const option1 = document.createElement('option');
        option1.value = opt1.toLowerCase();
        option1.innerText = opt1;
        select1.appendChild(option1);
    });

    const options2 = ['Point', 'Line', 'Plane'];
    options2.forEach(opt2 => {
        const option2 = document.createElement('option');
        option2.value = opt2.toLowerCase();
        option2.innerText = opt2;
        select2.appendChild(option2);
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
        const selection2 = select2.value;
        document.body.removeChild(container); // Remove UI
        onStartCallback(selection, selection1, selection2); // Start simulation
    });

    // Add elements to container
    container.appendChild(label);
    container.appendChild(select);
    container.appendChild(document.createElement("br")); // Line break
    container.appendChild(label1);
    container.appendChild(select1);
    container.appendChild(document.createElement("br")); // Line break
    container.appendChild(label2);
    container.appendChild(select2);
    container.appendChild(document.createElement("br"));
    container.appendChild(startButton);
    // Add container to body
    document.body.appendChild(container);
}


// Stage 2 – Start Simulation
function startSimulation(selection, selection1, selection2) {
  if (selection === 'outer') {
    if (selection1 === 'point') {
        if (selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = !(1e0 - 0.5e3).Normalized;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if (selection2 === 'line') {
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = 1e12 + 0.25e23;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else {
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 =  1e2 + 1e3;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
    else if(selection1 === 'line'){
        if(selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = 1e12 + 0.25e23;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if(selection2 === 'line'){
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.45e23;
                let L2 = 1e12 + 0.25e23;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else{
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.25e23;
                let L2 = 1e3;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
    else{
        if(selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 =  1e2 + 1e3;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if(selection2 === 'line'){
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.25e23;
                let L2 = 1e3;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else{
            Algebra(3, 0, 1, () => {
                let L1 = 1e2 + 1e3;
                let L2 = 1e3;
                let meet = L1^L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }

  }
  else if (selection === 'regressive'){
    if (selection1 === 'point') {
        if (selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = !(1e0 - 0.5e3).Normalized;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if (selection2 === 'line') {
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = 1e12 + 0.25e23;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else {
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 =  1e2 + 1e3;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
    else if(selection1 === 'line'){
        if(selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = 1e12 + 0.25e23;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if(selection2 === 'line'){
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.45e23;
                let L2 = 1e12 + 0.25e23;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else{
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.25e23;
                let L2 = 1e3;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
    else{
        if(selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 =  1e2 + 1e3;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if(selection2 === 'line'){
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.25e23;
                let L2 = 1e3;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else{
            Algebra(3, 0, 1, () => {
                let L1 = 1e2 + 1e3;
                let L2 = 1e3;
                let meet = L1&L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
  }

  else {
    if (selection1 === 'point') {
        if (selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = !(1e0 - 0.5e3).Normalized;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if (selection2 === 'line') {
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = 1e12 + 0.25e23;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else {
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 =  1e2 + 1e3;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
    else if(selection1 === 'line'){
        if(selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 = 1e12 + 0.25e23;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if(selection2 === 'line'){
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.25e23;
                let L2 = 1e12 + 0.25e23;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else{
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.25e23;
                let L2 = 1e3;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
    else{
        if(selection2 === 'point'){
            Algebra(3, 0, 1, () => {
                let L1 = !(1e0 + 0.25e1 + 0.25e2 + 0.75e3).Normalized;
                let L2 =  1e2 + 1e3;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else if(selection2 === 'line'){
            Algebra(3, 0, 1, () => {
                let L1 = 1e12 - 0.25e23;
                let L2 = 1e3;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
        else{
            Algebra(3, 0, 1, () => {
                let L1 = 1e2 + 1e3;
                let L2 = 1e3;
                let meet = L1|L2;

                document.body.appendChild(this.graph(() => {
    
                    return [
                        0x0000FF, L1,
                        0x0000FF, L2,
                        0x00FF00, meet
                    ]
                }, { width: 1024, height: 512, scale: 0.3, clip: 5, grid: true}));
            });
        }
    }
  }

  }
  
  

// Main Entry Point
function main() {
  createSetupUI(startSimulation);
}

// Run the main flow
main();