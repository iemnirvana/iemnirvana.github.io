
/*⁣⛅ ☁ ☁  ☁  🚁   ✈
🏢🏤_🏬_ / |_\🏫🏢🌳🌳
_____🚋_🚗__🚕______
🏡⁣🏥🏦  /   |🚖\ 🏠🌳🏡
🏡🏡🏪 /    | 🚘\ 🏪🏨
💒 🏨 /     |    \ 🏡🏩

*/

document.addEventListener("DOMContentLoaded", () => {

    const wrapper = document.querySelector('.wrapper'),
    rotateSlider = document.querySelector('.rotate-slider');
    wrapper.style.setProperty('--rotate-y', `-${rotateSlider.value}deg`);
    rotateSlider.addEventListener('input', () => wrapper.style.setProperty('--rotate-y', `-${rotateSlider.value}deg`));
    
    //Detect Apple Device
    if (navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) wrapper.classList.add('apple-os');
    
    });



    