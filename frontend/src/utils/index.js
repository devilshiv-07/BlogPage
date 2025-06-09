export const formatDate = (inputDate) => {
    
  const date = new Date(inputDate);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = days[date.getDay()];
  const dateNum = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} - ${dateNum} ${month}, ${year}`;
};

export const valueConverter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else if(value>=1000000000){
        return Math.floor(value/1000000000)+"B";
    }
    else{
        return value
    }
}

export const limitWords = (text, maxWords = 15) => {
  const words = text.trim().split(/\s+/); // split by any space(s)
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + " ...";
};