const dataObject = require("./data.json");
const data = dataObject.data;

const parser = data => {
    let result = '';
    let totalsum = 0;
    data.forEach((element) => {
        const re = /(: \d+)(?:\.(\d{1,2}))?/g; // find all ": 1000.33" in string
        const re2 = /(\d+)(?:\.(\d{1,2}))?/g; // find only nubmers         
        const found = element.match(re);
        if (found !== null) {
            const sum = found.map((element) => parseFloat(element.match(re2)));
            let localresult = 0;
            sum.forEach((element) => {
              localresult = localresult + element;
            });
            totalsum = totalsum + localresult;
          }
        console.log(found);
    });
    console.log(data.length, totalsum);
}

parser(data);