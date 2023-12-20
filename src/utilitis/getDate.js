export const getDate = () => {
    //Створення об'єкта Date на основі Unix-часу
    const date = new Date();
  
    //Отримання дати та часу в потрібному форматі

    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, '0');
    //Форматування результату в "hh:mm" і виведення
    const formattedDate = `${minutes}:${seconds}`;
   
    return formattedDate;
  };