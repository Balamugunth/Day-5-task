let jsonString = '{"title":"JSON", "author":"bala", "price":"5000", "availability":true, "ISBN":"isb123"}';

jsonObject = JSON.parse(jsonString)

for(let index in (Object.keys(jsonObject)))
{
    console.log(Object.keys(jsonObject)[index], ':' ,jsonObject[Object.keys(jsonObject)[index]]);
}
