export function groupeByAttribut(data, attribut) {
  const dataGrouped = {};
  for (const element of data) {
    if (element.hasOwnProperty(attribut)) {
      if (!dataGrouped.hasOwnProperty(element[attribut])) {
        dataGrouped[element[attribut]] = [];
      }
      dataGrouped[element[attribut]].push(element);
    }
  }
  return dataGrouped;
}
export function groupeByProvince(data) {
  const dataGrouped = {};
  for (const element of data) {
    let att = element.province[0].nom;
    if (!dataGrouped.hasOwnProperty(att)) {
      dataGrouped[att] = [];
    }
    dataGrouped[att].push(element);
  }
  return dataGrouped;
}
export function getStatByYear(data) {
  const stat = [];
  const current_year = new Date().getFullYear();
  const one_year_ago = current_year - 1;
  const two_year_ago = current_year - 2;
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let nbr = {
        label : key,
        current_year : 0,
        one_year_ago : 0,
        two_year_ago : 0,
        total : 0,
      };
      for (const element of data[key]) {
        let year = new Date(element.date.dateViol).getFullYear();
        if(year == current_year){
          nbr.current_year +=1
        }else if (year == one_year_ago){
          nbr.one_year_ago +=1
        }else if (year == two_year_ago){
          nbr.two_year_ago +=1
        }    
        nbr.total +=1
      }
      stat.push(nbr)
    }
  }
  
  return stat;
  
}

export function getLabelProvice(data){
  const label = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      label.push(key);
    }
  }
  return label;
}

export function trieObject(object){
  return object.sort(function (a, b) {
    return a > b;
  });
}