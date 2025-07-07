import {star_fixed_orthographic, star_fixed_perspective, star_moving_orthographic, star_moving_perspective} from './functions.js';
import {cube_fixed_orthographic, cube_fixed_perspective, cube_moving_orthographic, cube_moving_perspective} from './functions.js';
import { diamond_fixed_orthographic, diamond_fixed_perspective, diamond_moving_orthographic, diamond_moving_perspective } from './functions.js';
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

    const options = ['Cube', 'Star', 'Diamond'];
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.toLowerCase();
        option.innerText = opt;
        select.appendChild(option);
    });

    const label2 = document.createElement('label')
    label2.innerText = 'Propagating in Time?';
    label2.style.marginRight = '10px';

    const select2 = document.createElement('select');
    select2.style.padding = '5px 10px';

    const options2 = ['Yes', 'No'];
    options2.forEach(opt2 => {
        const option2 = document.createElement('option');
        option2.value = opt2.toLowerCase();
        option2.innerText = opt2;
        select2.appendChild(option2);
    });

    const label3 = document.createElement('label');
    label3.innerText = 'Perspective?';
    label3.style.marginRight = '10px';

    const select3 = document.createElement('select');
    select3.style.padding = '5px 10px';

    const options3 = ['Perspective', 'Orthographic']
    options3.forEach(opt3 => {
      const option3 = document.createElement('option');
      option3.value = opt3.toLowerCase();
      option3.innerText = opt3;
      select3.appendChild(option3);
    })

    // Create Start button
    const startButton = document.createElement('button');
    startButton.innerText = 'Start';
    startButton.style.marginLeft = '20px';
    startButton.style.padding = '5px 15px';
    startButton.style.cursor = 'pointer';

    // Handle click
    startButton.addEventListener('click', () => {
        const selection = select.value;
        const selection2 = select2.value;
        const selection3 = select3.value;
        document.body.removeChild(container); // Remove UI
        onStartCallback(selection, selection2, selection3); // Start simulation
    });

    // Add elements to container
    container.appendChild(label);
    container.appendChild(select);
    container.appendChild(document.createElement("br")); // Line break
    container.appendChild(label2);
    container.appendChild(select2);
    container.appendChild(document.createElement("br")); // Line break
    container.appendChild(label3);
    container.appendChild(select3);
    container.appendChild(document.createElement("br"));
    container.appendChild(startButton);
    // Add container to body
    document.body.appendChild(container);
}


// Stage 2 – Start Simulation
function startSimulation(selection, selection2, selection3) {
  // selection 'cube'/'star'  ; selection2 'no'/'yes' ; selection3 'perspective'/'orthographic'
  if (selection === 'cube') {
    if (selection2 === 'yes') {
      if(selection3 === 'perspective'){
        cube_moving_perspective();
      }
      else {
        cube_moving_orthographic();
      }
    }
    else{
      if(selection3 === 'perspective'){
        cube_fixed_perspective();
      }
      else {
        cube_fixed_orthographic();
      }
    }
  }
  else if (selection === 'diamond'){
    if (selection2 === 'yes') {
      if(selection3 === 'perspective'){
        diamond_moving_perspective();
      }
      else {
        diamond_moving_orthographic();
      }
    }
    else{
      if(selection3 === 'perspective'){
        diamond_fixed_perspective();
      }
      else {
        diamond_fixed_orthographic();
      }
    }
  }

  else {
    if (selection2 === 'yes') {
      if(selection3 === 'perspective'){
        star_moving_perspective();
      }
      else {
        star_moving_orthographic();
      }
    }
    else{
      if(selection3 === 'perspective'){
        star_fixed_perspective();
      }
      else {
        star_fixed_orthographic();
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