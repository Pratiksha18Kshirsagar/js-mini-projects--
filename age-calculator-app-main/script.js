let btn = document.querySelector("img");



btn.addEventListener("click", () => {
    let day = document.querySelector(".Iday");
    let month = document.querySelector(".Imonth");
    let year = document.querySelector(".Iyear");
    let birth = `${day.value}-${month.value}-${year.value}`
    var today = new Date();
    // console.log(Date());
    var birthDate = new Date(birth);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = 12 + months;
    }

    if (days < 0) {
        months--;
        var tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        console.log(tempDate);
        days = tempDate.getDate() - birthDate.getDate() + today.getDate();
    }


    console.log(years);
    console.log(months);
    console.log(days);

    
   
});











