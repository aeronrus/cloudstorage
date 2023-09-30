import { diskStorage } from 'multer';

const generateID = () => {
  //для генерации ID
  Array(18) //id будет из 18 символов
    .fill(null) //заполнение всех элементов массива одним значением (null)
    .map(() => Math.round(Math.random() * 16).toString(16)) //Функция toString(16) для преобразования числа в строку в шестнадцатеричном формате.
    .join(''); //все в строку
};

const normalizeFileName = (req, file, callback) => {
  const fileExtName = file.originalName.split('.').pop(); //разбиваем имя файла на массив и возвращаем только последний элемент(получаем формат файла)

  callback(null, `${generateID()}.${fileExtName}`); ///итоговое имя файла в хранилище
};

export const fileStorage = diskStorage({
  destination: './uploads', //куда сохранять
  filename: normalizeFileName, //берем имя файла для записи на диск
});
