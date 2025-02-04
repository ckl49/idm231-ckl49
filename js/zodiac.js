// variables needed
// const birthday;       // user's birthday
// const birthday_month; // birthday: month value
// const birthday_day;   // birthday: day value
// let selected_sign;    // currently selected zodiac sign

let birthday = [10, 17, 2004];
// let birthday = [x, x, x];
// should be take data from the date picker and break into the parts of the array

// const birthday = ["month", "day", "year"];
const birthday_month = birthday[0];
const birthday_day = birthday[1];
// grabs both the day and the month from the array

// let newArray = birthdayString.split(" ");
// console.log(birthday_month);
// console.log(birthday_day);

// let selected_sign = i;


const myZodiacSigns = () => { 
  [
    sign = "Aries",
    title = "The Bold Trailblazer 🌟🐏",
    sound = '',
    img = "",
    text = "Energetic and fearless, Aries Dimoo is always ready to lead the charge! With a fiery personality and a spark in their eyes, they love taking on new adventures, armed with a tiny ram horn headpiece and a blazing torch of ambition."
  ] , 

  [
    sign = "Taurus",
    title = "The Peaceful Dreamer 🌿🐮",
    sound = "",
    img = "",
    text = "Taurus Dimoo loves the finer things in life. Surrounded by blooming flowers and a cozy blanket, they bring a calm, steady energy wherever they go. This little dreamer always has a teacup and a soft pillow nearby for maximum comfort."
  ] ,

  [
    sign = "Gemini – The Charming Twin ✨👯",
    sound = "",
    img = "",
    text = "With a mischievous smile and a dual-colored hat, Gemini Dimoo can charm anyone with their quick wit and endless curiosity. They carry a book of riddles in one hand and a kite in the other, ready to switch between fun and intellect at a moment’s notice."
  ] ,

  [
    sign = "Cancer",
    title = "The Moonlit Protector 🌙🦀",
    sound = "",
    img = "",
    text = "Under the gentle glow of the moon, Cancer Dimoo radiates warmth and care. They hold a tiny crab companion close and wear a shimmering shell cape, always ready to protect those they love while daydreaming by the seaside."
  ] ,
  
  [
    sign = "Leo",
    title= "The Radiant Star 🌞🦁",
    sound = "",
    img = "",
    text = "Leo Dimoo shines with a golden crown and a dazzling mane. Their confident smile lights up any room, and they love sharing their creative energy. With a sun charm in their hand, they remind everyone to shine their brightest."
  ] ,

  [
    sign = "Virgo",
    title = "The Pure Perfectionist 🌾🌸",
    sound = "",
    img = "",
    text = "With a bouquet of wheat and daisies in hand, Virgo Dimoo is an embodiment of grace and detail. They wear a delicate floral headband, always striving to make the world a more beautiful and organized place."
  ] ,

  [
    sign = "Libra",
    title = "The Harmonious Charmer ⚖️💖",
    sound = "",
    img = "",
    text = "Balanced and graceful, Libra Dimoo carries a golden scale in one hand and a bouquet of roses in the other. With a soft smile, they love spreading harmony and creating connections wherever they go."
  ] ,

  [
    sign = "Scorpio",
    title = "The Mysterious Alchemist 🦂🖤",
    sound = "",
    img = "",
    text = "Wrapped in shadows and mystery, Scorpio Dimoo wields a tiny potion bottle filled with shimmering secrets. A scorpion tail peeks out from their cloak, hinting at their intensity and depth."
  ] ,

  [
    sign = "Sagittarius",
    title = "The Wanderlust Explorer 🎯🏹",
    sound = "",
    img = "",
    text = "Sagittarius Dimoo dons a feathered hat and carries a tiny bow and arrow, always ready to aim for their dreams. With a map in their pocket and stars in their eyes, they’re on a quest to explore new horizons."
  ] ,

  [
    sign = "Capricorn",
    title = "The Ambitious Mountain Climber ⛰️🐐",
    sound = "",
    img = "",
    text = "Capricorn Dimoo wears a sturdy hiking outfit and carries a tiny staff, symbolizing their climb to success. With determination in their heart and stars on their boots, they’ll conquer every mountain—literal or metaphorical."
  ] ,

  [
    sign = "Aquarius",
    title = "The Cosmic Visionary 🌊🌌",
    sound = "",
    img = "",
    text = "Aquarius Dimoo carries a vessel of shimmering water, pouring creativity and innovation wherever they go. Dressed in futuristic robes adorned with stars, they love sharing their unique ideas with the world."
  ] ,

  [
    sign = "Pisces",
    title = "The Dreamy Mystic 🐠💫",
    sound = "",
    img = "",
    text = "Pisces Dimoo drifts through a magical sea of stars with a little fish friend by their side. Wrapped in flowing fabric that glimmers like water, they’re always lost in dreams and surrounded by ethereal beauty."
  ]
}

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