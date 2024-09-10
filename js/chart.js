// import {drack} from './drack';

// drack();


  // Add dragstart event to color swatches
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('color', e.target.style.backgroundColor);
    });
});

// Add dragover event to allow dropping
// document.getElementById('dropBox1')/.addEventListener('dragover', function(e) {
//     e.preventDefault();  // Necessary to allow dropping
// });

// Add drop event to change box color


// Add dragover event to allow dropping
document.getElementById('dropBox15').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox10').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox4').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox3').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox7').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox12').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox18').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox19').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox14').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox9').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox8').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox13').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});

// Add drop event to change box color**********************************************************


document.getElementById('dropBox15').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox10').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox4').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox3').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox7').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox12').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox18').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox19').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox14').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox9').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox8').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


document.getElementById('dropBox13').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});


