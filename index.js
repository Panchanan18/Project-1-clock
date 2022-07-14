let time ;
let day ;
let timeString;
setInterval(() => {
    time=new Date();
    timeString=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    day=`${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`;
    document.getElementById('time').innerHTML=timeString+ " ON " + day;
    
}, 1000);