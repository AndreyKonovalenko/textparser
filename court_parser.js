const dataObject = require("./case.json");
const data = dataObject;

const parser = data => {
    const list = data.cases_list.slice();

    let result = [];
    let totalSum = 0;
    list.forEach(element => {
        if (element.isActive === true){
            result.push([element.caseNo, element.sum]);
            totalSum += element.sum;
        }
    })
    console.groupCollapsed(data.currentCompany.fullName, data.currentCompany.inn, result, "sum: ", totalSum);
}


parser(data);