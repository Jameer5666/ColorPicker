
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

document.getElementById('head').addEventListener('focus', function() {
    if (this.textContent === 'Type here...') {
        this.textContent = '';
    }
});

document.getElementById('head').addEventListener('blur', function() {
    if (this.textContent === '') {
        this.textContent = 'Type here...';
    }
});


function ChangeTextAlign(props){
    h2.style.textAlign=props;
}


 // Download functionality
 document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.getElementById('head');
    
    // Add some padding for better appearance in the image
    const originalPadding = element.style.padding;
    element.style.padding = '20px';
    
    html2canvas(element, {
        backgroundColor: element.style.backgroundColor || 'transparent',
        scale: 2 // Higher quality
    }).then(canvas => {
        // Restore original padding
        element.style.padding = originalPadding;
        
        // Create download link
        const link = document.createElement('a');
        link.download = 'styled-text.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});