(()=>{
  
    // make constants of the elements you are going to interact with
    //NAME-TO-BE-USED-INSIDE-OF-JS = document.querySelector('NAME OF .CLASS OR #ID IN HTML');
  const clickMe = document.querySelector('.click-me'),
        lightBox = document.querySelector('.light-box'),
        closeBox = document.querySelector('.exit');
  //querySelector when theres only one element
    //querySelectorAll when there is multiple with the same class (comes in an array form)
    
    
  //function that is called when event happens
  function openLightBox(){
    //adds that important class to show the div
    lightBox.classList.add('show-lightbox');
  }
    
  //function that is called when event happens
  function closeLightBox(){
      //removes that important class to show the div, therefore making it go back to display:none;
    lightBox.classList.remove('show-lightbox');
  }
  
  //CONSTANT.ADDEVENTLISTENER('CLICK', FUNCTION NAME);
  clickMe.addEventListener('click', openLightBox);
  closeBox.addEventListener('click', closeLightBox);
  })();