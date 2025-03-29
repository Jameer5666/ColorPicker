
const h2=document.getElementById('head');
function ChangeBackgroundColor(color){
    h2.style.backgroundColor=color;
}
function ChangeColor(color){
    // const h2=document.getElementById('head');
    h2.style.color=color;
}
function ChangeFontStyle(font){
    // const h2=document.getElementById('head');
    h2.style.fontFamily=font;
}

// slider.addEventListener('input', () => {
//     const fontSize = slider.value + 'px';
//     text.style.fontSize = fontSize;
// });

const slider=document.getElementById('range');
slider.addEventListener('input',()=>{
    const FontSize=slider.value+'px';
    document.getElementById('range_val').innerText=FontSize;
    h2.style.fontSize=FontSize;

})