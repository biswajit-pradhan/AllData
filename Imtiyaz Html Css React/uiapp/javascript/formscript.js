mainFunc=()=>{
    let encodedUrl=urlEncoding('http://127.0.0.1:5500/javascript/form.html');
    decodeUrl(encodedUrl);
    console.log(currentDate());
    console.log(customDate());
    console.log(dateDiff(customDate(),currentDate()));
}

function readFromAndValidate(){
    // alert('func called....');
   // console.log('func called....');
   //Reading value style 1
    let name=document.getElementById('name').value;
    console.log('Name: '+name);
    //Reading value style 2
    let email=document.myForm.email.value;
    console.log('Email: '+email);
    let password=document.myForm.password.value;
    console.log('Password: '+password);
    let sports=document.myForm.sport;
    let favSport=[];
    for(i=0;i<sports.length;i++){
        if(sports[i].checked==true)
            favSport.push(sports[i].value)
    }
    console.log('Fav Sport: '+favSport)
    let college=document.myForm.college.value;
    console.log('College Student or Not: '+college);
    let address=document.myForm.address.value;
    console.log('Address: '+address);
    let city=document.myForm.city.value;
    console.log('City: '+city);
    let age=document.myForm.age.value;
    console.log('Age: '+age)
    let file=document.myForm.file.value;
    console.log('File: '+file)
    let date=document.myForm.joiningDate.value;
    console.log('Joining Date: '+date)
    let rating=document.myForm.rating.value;
    console.log('Rating: '+rating);
    return false;
}

/*URL Encoding and Decoding*/
urlEncoding = (url)=>{
    console.log(encodeURIComponent(url))
    return encodeURIComponent(url);
}
decodeUrl=(url)=>{
    console.log(decodeURIComponent(url));
}

currentDate=()=>{
    const todaysDate=new Date();
    //console.log(todaysDate);
    return todaysDate;
}

customDate=()=>{
    const customDate=new Date(2011,03,21); //03: april
    return customDate;
}

dateDiff=(startDate,endDate)=>{
    // return endDate.getDate()-startDate.getDate();
//    return endDate.getYear() - startDate.getYear();
    return endDate.getMonth() - startDate.getMonth();
}