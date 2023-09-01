let jsonString = '{"title":"JSON", "author":"bala", "price":"5000", "availability":true, "ISBN":"isb123"}';

jsonObject = JSON.parse(jsonString)

Object.entries(jsonObject).forEach((entry) => {
    console.log(entry[0], ':',entry[1]);
});