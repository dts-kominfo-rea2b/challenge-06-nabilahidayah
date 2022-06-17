// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let temp = [];
  fs.readFile(file2, "utf8", (err, data) => {
    if (err) fnCallback(err, null);
    temp.push(jsonType2(data));
    fs.readFile(file1, "utf8", (err, data) => {
      if (err) fnCallback(err, null);
      temp.push(jsonType1(data));
      fs.readFile(file3, "utf8", (err, data) => {
        if (err) fnCallback(err, null);
        temp.push(jsonType3(data));

        fnCallback(null, temp);
      });
    });
  });
};
const jsonType1 = (j) => {
  let obj = JSON.parse(j);
  return obj.message.split(" ")[1];
};

const jsonType2 = (j) => {
  let obj = JSON.parse(j);
  return obj[0].message.split(" ")[1];
};

const jsonType3 = (j) => {
  let obj = JSON.parse(j);
  return obj[0].data.message.split(" ")[1];
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
