let dhonioldinfo = {
    imgurl:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png",
    name: "Dhoni",
    discription:"Cricketer"
} 
let dhoniyounginfo = {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMSfih9B9-gDbMvyM-ROobva_kCqp3qFWMQ&usqp=CAU",
    name: "MS Dhoni",
    discription:"Indian cricket player"
}
let isdhoniold = true;
let displayobject;
let flipdata = function(){
    if(isdhoniold == true){
        displayobject=dhoniyounginfo;
        isdhoniold = false;
    }
    else{
        displayobject=dhonioldinfo;
        isdhoniold=true;
    }
    document.getElementById("dhoni-img").src=displayobject.imgurl;
    document.getElementById("dhoni-name").innerHTML=displayobject.name;
    document.getElementById("dhoni-discription").innerHTML=displayobject.discription;
}