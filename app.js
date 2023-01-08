const dateLabel = document.getElementById("date");
const timeLabel = document.getElementById("time");

update();
setInterval(update, 100);

function update(){
  let date = new Date();
  let time = new Date();
  
  dateLabel.innerHTML = formatDate(date);
  timeLabel.innerHTML = formatTime(time);
  
  function formatDate(date){
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
  
   return `${dayOfMonth}.${month}.${year}`;
  };

  function formatTime(time){
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();


    if(minute <= 9 && second <= 9){
      return `${hour}:0${minute}:0${second}`;
    }

    else if(minute <= 9){
      return `${hour}:0${minute}:${second}`;
    }

    else if(second <= 9){
      return `${hour}:${minute}:0${second}`;
    }

    else{
      return `${hour}:${minute}:${second}`;
    };
  };
};

//-----------------------------------------

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function setFavicon(darkModeOn) {
  const linkElement = document.querySelector("link[rel*='icon']");
  if (darkModeOn) {
    linkElement.href = 'white_clock.ico';
  } else {
    linkElement.href = 'black_clock.ico';
  }
}

darkModeMediaQuery.addListener((event) => {
  setFavicon(event.matches);
});

setFavicon(darkModeMediaQuery.matches);
