let fileInput = document.getElementById('file_btn');// input type='file
// console.log(fileInput);
let image = document.getElementById('image');// image tag
// console.log(image);
let effect_btn = document.querySelectorAll('#btn button');//effect btn
// console.log(effect_btn);
let effect_name = document.getElementById('effect_name');// effect name
// console.log(effect_name);
let effect_box = document.getElementById('left_box'); // left box 
let input_slide = document.getElementById('input_range');// range input
let range_name = document.getElementById('range_name');

let brightness = 100, saturation =100, inversion = 0, grayscale = 0;


// =============set image into img tag ========================
fileInput.addEventListener('change', ()=>{
 let file = fileInput.files[0];
 if(!file) return;
  // console.log(file);
  image.src = URL.createObjectURL(file)
  effect_box.classList.remove('disable')
});

// ===================click on the effectBtn for add active link and remove active link =================
effect_btn.forEach(option =>{
    option.addEventListener('click', ()=>{
       document.querySelector('#btn .active').classList.remove('active');
       option.classList.add('active');
       effect_name.innerText = option.innerHTML

       if(option.id === "Brightness"){
          input_slide.value = brightness;
           range_name.innerText = `${brightness}%`;
        // console.log("adefug8aefy8egfy8g")
       }
    });
});

// ============================input range ==================================
input_slide.addEventListener('input', ()=>{
    console.log(input_slide.value);
    range_name.innerText = `${input_slide.value}%`;
    let data = document.querySelector('#btn .active');
    // console.log(date);
    if(data === "Brightness"){
        brightness = input_slide.value;
    }else if(data === 'Saturation'){
        saturation = input_slide.value;
    }else if(data === 'Inversion'){
        inversion = input_slide.value;
    }else{
        grayscale = input_slide.value;
    }
})

// ============================