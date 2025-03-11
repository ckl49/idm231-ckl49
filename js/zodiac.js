// variables needed
// const birthday;       // user's birthday
// const birthday_month; // birthday: month value
// const birthday_day;   // birthday: day value
// let selected_sign;    // currently selected zodiac sign

// grabs both the day and the month from the array

// let newArray = birthdayString.split(" ");
// console.log(birthday_month);
// console.log(birthday_day);

// let selected_sign = i;

const myZodiacSigns = [
    {
      sign: "Aries",
      title: "The Bold Trailblazer 🌟🐏",
      sound: '../soundfx/aries_sound.mp3',
      img: "../graphics/dimoo_aries_edited.png",
      text:"Energetic and fearless, Aries Dimoo is always ready to lead the charge! With a fiery personality and a spark in their eyes, they love taking on new adventures, armed with a tiny ram horn headpiece and a blazing torch of ambition.",
    } 
    , 

    {
      sign : "Taurus",
      title : "The Peaceful Dreamer 🌿🐮",
      sound : "../soundfx/taurus_sound.mp3",
      img : "../graphics/dimoo_taurus_edited.png",
      text : "Taurus Dimoo loves the finer things in life. Surrounded by blooming flowers and a cozy blanket, they bring a calm, steady energy wherever they go. This little dreamer always has a teacup and a soft pillow nearby for maximum comfort.",
    }
   ,

  
    { 
      sign : "Gemini",
      title : "The Charming Twin ✨👯",
      sound : "../soundfx/gemini_sound.mp3",
      img : "../graphics/dimoo_gemini_edited.png",
      text : "With a mischievous smile and a dual-colored hat, Gemini Dimoo can charm anyone with their quick wit and endless curiosity. They carry a book of riddles in one hand and a kite in the other, ready to switch between fun and intellect at a moment’s notice.",
    }
   ,

  
    {
      sign : "Cancer",
      title : "The Moonlit Protector 🌙🦀",
      sound : "../soundfx/cancer_sound.mp3",
      img : "../graphics/dimoo_cancer_edited.png",
      text : "Under the gentle glow of the moon, Cancer Dimoo radiates warmth and care. They hold a tiny crab companion close and wear a shimmering shell cape, always ready to protect those they love while daydreaming by the seaside.",
    }
   ,
  
  
    {
      sign : "Leo",
      title : "The Radiant Star 🌞🦁",
      sound : "../soundfx/leo_sound.mp3",
      img : "../graphics/dimoo_leo_edited.png",
      text : "Leo Dimoo shines with a golden crown and a dazzling mane. Their confident smile lights up any room, and they love sharing their creative energy. With a sun charm in their hand, they remind everyone to shine their brightest.",
    }
   ,

  
    { 
      sign : "Virgo",
      title : "The Pure Perfectionist 🌾🌸",
      sound : "../soundfx/virgo_sound.mp3",
      img : "../graphics/dimoo_virgo_edited.png",
      text : "With a bouquet of wheat and daisies in hand, Virgo Dimoo is an embodiment of grace and detail. They wear a delicate floral headband, always striving to make the world a more beautiful and organized place.",
    }
   ,

    {
      sign : "Libra",
      title : "The Harmonious Charmer ⚖️💖",
      sound : "../soundfx/libra_sound.mp3",
      img : "../graphics/dimoo_libra_edited.png",
      text : "Balanced and graceful, Libra Dimoo carries a golden scale in one hand and a bouquet of roses in the other. With a soft smile, they love spreading harmony and creating connections wherever they go.",
    }
   ,

    {
      sign : "Scorpio",
      title : "The Mysterious Alchemist 🦂🖤",
      sound : "../soundfx/scorpio_sound.mp3",
      img : "../graphics/dimoo_scorpio_edited.png",
      text : "Wrapped in shadows and mystery, Scorpio Dimoo wields a tiny potion bottle filled with shimmering secrets. A scorpion tail peeks out from their cloak, hinting at their intensity and depth.",
    }
   ,

  
    {
    sign : "Sagittarius",
    title : "The Wanderlust Explorer 🎯🏹",
    sound : "../soundfx/sagittarius_sound.mp3",
    img : "../graphics/dimoo_sagittarius_edited.png",
    text : "Sagittarius Dimoo dons a feathered hat and carries a tiny bow and arrow, always ready to aim for their dreams. With a map in their pocket and stars in their eyes, they’re on a quest to explore new horizons.",
    }
   ,

    {
      sign :"Capricorn",
      title : "The Ambitious Mountain Climber ⛰️🐐",
      sound : "../soundfx/capricorn_sound.mp3",
      img : "../graphics/dimoo_capricorn_edited.png",
      text : "Capricorn Dimoo wears a sturdy hiking outfit and carries a tiny staff, symbolizing their climb to success. With determination in their heart and stars on their boots, they’ll conquer every mountain—literal or metaphorical.",
    }
   ,

    {
      sign : "Aquarius",
      title : "The Cosmic Visionary 🌊🌌",
      sound : "../soundfx/aquarius_sound.mp3",
      img : "../graphics/dimoo_aquarius_edited.png",
      text :"Aquarius Dimoo carries a vessel of shimmering water, pouring creativity and innovation wherever they go. Dressed in futuristic robes adorned with stars, they love sharing their unique ideas with the world.",
    }
   ,

    {
      sign : "Pisces",
      title : "The Dreamy Mystic 🐠💫",
      sound : "../soundfx/pisces_sound.mp3",
      img : "../graphics/dimoo_pisces_edited.png",
      text : "Pisces Dimoo drifts through a magical sea of stars with a little fish friend by their side. Wrapped in flowing fabric that glimmers like water, they’re always lost in dreams and surrounded by ethereal beauty.",
    }
];


/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */


// @ts-chceck

function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'Capricorn';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'Sagittarius';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 'Scorpio';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 'Libra';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Virgo';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Leo';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 'Cancer';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 'Gemini';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Taurus';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Aries';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Pisces';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Aquarius';
  } else return null;
}

// to stop all sounds when another is pressed, called in the create button

let all_sounds = []

function stop_all_sounds () {
  all_sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

function clear_overlay() {
  overlay_img_div.innerHTML = '';
  overlay_text_div.innerHTML = '';
  document.body.classList.remove("overlay-active"); // Removes blur effect

}
// clear the info

// to create image seperately outside of the create button function to abstract
function create_image (zodiacSignImgFile, zodiacSignFile) {
  const img = document.createElement('img');
  img.src = zodiacSignImgFile;
  img.alt = zodiacSignFile;
  img.className = 'card-img';
  return img;
}

// this just calls the init and creates the create the buttons, takes 3 inputs to show 

function initialize () {
  myZodiacSigns.forEach((zodiac) => {
    create_button(zodiac.sound, zodiac.sign, zodiac.img);
  })
}

// need to handle form submission

const errors = [];

// if (form.elements[birthday].value = mm/dd/yyyy) {
//    errors.push('Please enter your birthdate');
//    form.elements[birthday_submit].focus();
// }

const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

// event > form > input
// year month day value of input
// listening for when the form is submitted, it'll refresh

let birthdate = [];

// function 

const overlay_div = document.getElementById('container');
const overlay_text_div = document.getElementById('overlay-content');
const overlay_img_div = document.getElementById('overlay-img')

function checkZodiacMatch (zodiacAnswer) {
  const userSign = myZodiacSigns.find(zodiac => zodiac.sign === zodiacAnswer);
  console.log(userSign);

  clear_overlay();
  
  const new_img = document.createElement('img');
  new_img.src = userSign.img;
  new_img.alt = userSign.sign;
  overlay_img_div.appendChild(new_img);

  const new_h1 = document.createElement('h1');
  new_h1.textContent = userSign.sign;
  overlay_text_div.appendChild(new_h1);


  const new_title = document.createElement('h2');
  new_title.textContent = userSign.title;
  overlay_text_div.appendChild(new_title);

  const new_text = document.createElement('p');
  new_text.textContent = userSign.text;
  overlay_text_div.appendChild(new_text);

  const close_btn = document.createElement('button');
  close_btn.className = "button";
  close_btn.innerText = 'Close';
  overlay_text_div.appendChild(close_btn);

  close_btn.addEventListener('click', () => {
    overlay_div.style.display = 'none';
    clear_overlay();
    stop_all_sounds();
  });

  const audio = new Audio(userSign.sound);
  all_sounds.push(audio);
  stop_all_sounds();
  audio.play();
}

// main function to create each button on the screen of each zodiac
function create_button(zodiacSoundFile, zodiacSignFile, zodiacSignImgFile) {
  // console.log('zodiac.sound', zodiacSoundFile);
  const btn = document.createElement('button');
  btn.className = 'card'
  btn.textContent = zodiacSignFile;

  const img =  create_image(zodiacSignImgFile, zodiacSignFile);
  btn.appendChild(img);

  const audio = new Audio(zodiacSoundFile);
  all_sounds.push(audio);
  
  btn.addEventListener('click', () => {
    checkZodiacMatch(zodiacSignFile);
    show_overlay();
  });

  document.body.appendChild(btn);
}

function handle_submit(event) {
  event.preventDefault();
  console.log(form.elements['birthdate'].value);

  if (form.elements['birthdate'].value === '') {
    console.log('error, no birthday inputted');
    alert('Please enter a birthdate before submitting. Zodiac signs are special to you and based on your specific birthdate.');
  } else {
    const birthdate = form.elements['birthdate'].value.split('-');
  
    console.log(birthdate);
    const month = birthdate[1];
    const day = birthdate[2];
    // console.log(typeof month);
    const month_nbr = Number(month);
    const day_nbr = Number(day);
    // console.log(typeof month_nbr);
    const zodiacAnswer = getZodiac(month_nbr, day_nbr);
    const zodiacOverlay = checkZodiacMatch(zodiacAnswer);
    // showOverlay(zodiacOverlay);
  
    show_overlay();

  }

}

// const body = document.getElementsByName('body');
const help_btn = document.querySelector('.help-button');
const help_container = document.querySelector('#help-container');

if (help_btn) {}
  help_btn.addEventListener ('click', () => {
    if (help_container.style.display === 'none' || help_container.style.display === '') {
      help_container.style.display = 'flex'; // Change display to flex
    } else {
      help_container.style.display = 'none';
}})

const help_close_btn = document.querySelector('.help-close-button')

if (help_close_btn) {}
  help_close_btn.addEventListener ('click', () => {
    if (help_container.style.display === 'flex') {
      help_container.style.display = 'none';
}})


// function need_help() {

//   help_btn.addEventListener('click', () => {
//     console.log('button is pressed');
    
//   })
// }

// need_help();

function show_overlay(event) {
  if (overlay_div.style.display === 'none' || overlay_div.style.display === '') {
    overlay_div.style.display = 'flex'; // Change display to flex
    document.body.classList.add("overlay-active"); // Adds blur effect
  } else {
    overlay_div.style.display = 'none';
  }
}

if (form) {
  form.addEventListener('submit', handle_submit);
} 

// to start initialize when window loads 
window.addEventListener('load', initialize);




