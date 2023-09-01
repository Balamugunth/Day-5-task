let jsonString = '{"title":"JSON", "author":"bala", "price":"5000", "availability":true, "ISBN":"isb123"}';

jsonObject = JSON.parse(jsonString)

for(let entry of Object.entries(jsonObject)) 
{
    console.log(entry[0], ':',entry[1]);
}
