function display(id,event){
    const ans=document.getElementById(id);
    ans.classList.toggle('active');
    const show='file:///E:/WebDev/Frontend%20Mentor/faq-accordion-main/assets/images/icon-plus.svg';
    const collapse='file:///E:/WebDev/Frontend%20Mentor/faq-accordion-main/assets/images/icon-minus.svg';
    console.log(event.currentTarget.src);
    if(event.currentTarget.src==show){
        event.currentTarget.src=collapse;
    }else{
        event.currentTarget.src=show;
    }
}