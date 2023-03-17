const curDate = document.getElementById("date");
let weathercon = document.getElementById("weather");

const tempStatus = "{%tempstatus%}";

if(tempStatus == "Sunny") {
    weathercon.innerHTML = '<i class="fa-solid fa-sun" style="color:#eccc68"></i>'
};

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday [0] = "Sun";
    weekday [1] = "Mon";
    weekday [2] = "Tue";
    weekday [3] = "Wed";
    weekday [4] = "Thu";
    weekday [5] = "Fri";
    weekday [6] = "Sat";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};

const getCurrentTime = () => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];

    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";
    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    return `${month} ${day} | ${hours}:${mins}${periods}`;
};
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();