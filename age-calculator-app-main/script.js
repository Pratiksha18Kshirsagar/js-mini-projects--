let btn = document.querySelector("img");



btn.addEventListener("click", () => {
    let day = document.querySelector(".Iday");
    let month = document.querySelector(".Imonth");
    let year = document.querySelector(".Iyear");
    day.value = " ";
    year.value = " ";
    month.value = " ";


    var today = new Date();
    // console.log(Date());
    var birthDate = new Date(year.value, month.value, day.value);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = (today.getMonth() + 1) - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = 12 + months;
    }

    if (days < 0) {
        months--;
        var tempDate = new Date(today.getFullYear(), today.getMonth(), 0);

        days = tempDate.getDate() - birthDate.getDate() + today.getDate();
    }

    
    if (day.value == " " || month.value == " " || year.value == " ") {
        document.querySelectorAll("p")[0].style.color = "red";
        document.querySelectorAll("p")[2].style.color = "red";
        document.querySelectorAll("p")[4].style.color = "red";
        document.querySelectorAll("p")[1].style.color = "red";
        document.querySelectorAll("p")[3].style.color = "red";
        document.querySelectorAll("p")[5].style.color = "red";
        day.style.borderColor = "red";
        year.style.borderColor = "red";
        month.style.borderColor = "red";
        document.querySelectorAll("p")[1].innerText = "This field is required";
        document.querySelectorAll("p")[3].innerText = "This field is required";
        document.querySelectorAll("p")[5].innerText = "This field is required";
        

        
    }

    else {
        let yr = document.querySelectorAll("span")[0];
        yr.innerText = years;
        let mth = document.querySelectorAll("span")[1];
        mth.innerText = months;
        let dy = document.querySelectorAll("span")[2];
        dy.innerText = days;
    }


});











