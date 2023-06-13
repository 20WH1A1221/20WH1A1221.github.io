let dhonioldinfo = {
    imgurl:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png",
    name: "Dhoni",
    discription:"Cricketer"
} 


let displayobject = {
    name:"",
    imgurl:"",
    description:""
};
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name = data.results[0].name.first +" "+ data.results[0].name.last
        //displayobject.name = "tanusree"
        displayobject.imgurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender
        document.getElementById("dhoni-img").src=displayobject.imgurl;
        document.getElementById("dhoni-name").innerHTML=displayobject.name;
        document.getElementById("dhoni-discription").innerHTML=displayobject.discription;

    })
    
}