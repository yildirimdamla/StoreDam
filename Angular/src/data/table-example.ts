export class table_schema {
  _id: String;
  name: String;
  position: String;
  office: String;
  age: String;
  start_date: String;
  salary: String;
}

export const columnlist = [
  // { columId:0, key: '_id', value: 'Id' },
  { key: 'name', value: 'Name & Surname' },
  { key: 'position', value: 'Position' },
  { key: 'office', value: 'Office' },
  { key: 'age', value: 'Age' },
  { key: 'start_date', value: 'Start Date' },
  { key: 'salary', value: 'Salary' },
];
export class tableoperations {
  static sortbyString(item: any, rows) {
    switch (item.key) {
      case 'name': {
        return rows.sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      case 'position': {
        return rows.sort(function (a, b) {
          var nameA = a.position.toUpperCase();
          var nameB = b.position.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      case 'office': {
        return rows.sort(function (a, b) {
          var nameA = a.office.toUpperCase();
          var nameB = b.office.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      case 'age': {
        return rows.sort(function (a, b) {
          Number(a.age);
          Number(b.age);
          return a.age - b.age;
        });
      }
      case 'start_date': {
        return rows.sort(function (a, b) {
          const startdateA = new Date(a.start_date);
          const startdateB = new Date(b.start_date);
          if (startdateA < startdateB) {
            return -1;
          }
          if (startdateA > startdateB) {
            return 1;
          }
          return 0;
        });
      }
      case 'salary': {
        rows.sort(function (a, b) {
          var nameA = a.salary.toUpperCase();
          var nameB = b.salary.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      default:
        console.log(item.key);
    }
    return rows;
  }
}
