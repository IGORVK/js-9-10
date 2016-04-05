document.addEventListener("DOMContentLoaded", function() {
 
    
    var dropDown = document.querySelectorAll('.js-dropdown');
    var subMenu = document.querySelectorAll('.js-sub-menu');
    
    dropDown[0].addEventListener('mouseover', function(){
    subMenu[0].style.display = "block";
        });
        
    dropDown[0].addEventListener('mouseout', function(){
    subMenu[0].style.display = "none";
        });
        
    dropDown[1].addEventListener('mouseover', function(){
    subMenu[1].style.display = "block";
        });
        
   dropDown[1].addEventListener('mouseout', function(){
   subMenu[1].style.display = "none";
        });
        
   dropDown[2].addEventListener('mouseover', function(){
   subMenu[2].style.display = "block";
        });
        
   dropDown[2].addEventListener('mouseout', function(){
   subMenu[2].style.display = "none";
        });
    
    
});