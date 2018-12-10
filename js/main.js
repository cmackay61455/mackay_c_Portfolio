(()=>{
  
   
  const clickMe = document.querySelector('.click-me'),
        lightBox = document.querySelector('.light-box'),
        closeBox = document.querySelector('.exit');
 
    
    
  
  function openLightBox(){
    
    lightBox.classList.add('show-lightbox');
  }
    
  
  function closeLightBox(){
      
    lightBox.classList.remove('show-lightbox');
  }
  
 
  clickMe.addEventListener('click', openLightBox);
  closeBox.addEventListener('click', closeLightBox);
  })();