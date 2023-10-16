var arr = [
    {dp : "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2908&q=80",
     story :"https://images.unsplash.com/photo-1570051008600-b34baa49e751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },

    {dp : "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
     story :"https://plus.unsplash.com/premium_photo-1683910767554-7508927ef89f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },

    {dp : "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
     story :"https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },

    {dp : "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
     story :"https://plus.unsplash.com/premium_photo-1661678244954-d1d766c00a57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
    
    {dp : "https://images.unsplash.com/photo-1617079114138-9cf245e006c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
     story :"https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" },
]

var cluter = "";
var full_screen =  document.querySelector(".full-screen");
var stories = document.querySelector("#stories");
arr.forEach(function(ele,idx){
    cluter += `<div class="story">
    <img id="${idx}" src="${ele.dp}" alt="">
    </div>`
})

stories.innerHTML= cluter;

stories.addEventListener("click",function(dets){
    var golden_val = arr[dets.target.id].story;
    full_screen.style.display = "block";
    full_screen.style.backgroundImage = `url(${golden_val })`;

    setTimeout(function(){
        full_screen.style.display = "none";
    },3000)


})
