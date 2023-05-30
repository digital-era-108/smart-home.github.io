// variables

const faqs = document.querySelectorAll('.faqs');



const removeOpenClass = () => {
    faqs.forEach(item => {
        item.classList.remove('open');
    })
}


faqs.forEach(item => {
    item.addEventListener('click', () => {

        
        // change icon
        const icon = item.querySelector('.faqs span');
        if(icon.textContent === 'remove'){
            console.log(icon.textContent);
            icon.textContent = 'add';
        }else{
            icon.textContent = 'remove';
        }
        // removeOpenClass();
        item.classList.toggle('open');

    })
})

