let sliderCount = 0;
document.addEventListener('DOMContentLoaded', function() {
  let arr = [
    'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg',
    'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/01-beautiful-white-cat-imagescar-wallpaper.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDVuBIXkPOuHjsCEZIlB8-5FWwxTWvxbDZg-Zu5iESkeOoCjZ',
    'http://www.radionetplus.ru/uploads/posts/2013-11/1384588851_vyhodnye-3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBzJkF6HJTTjVRT5TpxxQxBdprYUk9r7GCFfLND3NLrm-s-rD'
  ];
  let slider = document.getElementsByClassName('slider-wrapper');
  console.log(slider);
  let rightButtom = document.getElementById('right-buttom');
  rightButtom.addEventListener ('click', function() {
  	if (sliderCount==arr.length-1) {
  		sliderCount=0;
  	} else {
  		sliderCount++;
  	};    	
  	let img = document.getElementById('img');
  	img.src = arr[sliderCount];    	
  });      
  let leftButtom = document.getElementById('left-buttom');
  leftButtom.addEventListener ('click', function() {
 	  if (sliderCount==0) {
 		  sliderCount=arr.length-1;
 	  } else {
 		  sliderCount--;
 	  }; 
 	  let img = document.getElementById('img');
    img.src = arr[sliderCount];
  });   
})	