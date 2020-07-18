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
  { columId: 1, key: 'name', value: 'Name & Surname' },
  { columId: 2, key: 'position', value: 'Position' },
  { columId: 3, key: 'office', value: 'Office' },
  { columId: 4, key: 'age', value: 'Age' },
  { columId: 5, key: 'start_date', value: 'Start Date' },
  { columId: 6, key: 'salary', value: 'Salary' },
];
export class tableoperations {
  static sortbyString(item: any, rows) {
    switch (item.columId) {
      case 1: {
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
      case 2: {
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
      case 3: {
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
      case 4: {
        return rows.sort(function (a, b) {
          var nameA = a.age.toUpperCase();
          var nameB = b.age.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      case 5: {
        rows.sort(function (a, b) {
          var nameA = a.start_date.toUpperCase();
          var nameB = b.start_date.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      case 6: {
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
        console.log(item.columId);
    }
    return rows;
  }
}
