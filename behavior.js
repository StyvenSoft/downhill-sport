document.addEventListener("DOMContentLoaded", function(event) {
    const thumbnailElement = document.getElementById("smart_thumbnail");
    const smart = document.querySelectorAll('.smart');
    
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        } else {
            thumbnailElement.className = "";
        }
    });
 
    for(let i = 0; i < smart.length; i++){
        let btn = smart[i];
        btn.addEventListener('click', function(){
            smart[i].classList.toggle('smart');
        })
    }
});
