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
  { sortAscending: true, key: 'name', value: 'Name & Surname' },
  { sortAscending: true, key: 'position', value: 'Position' },
  { sortAscending: true, key: 'office', value: 'Office' },
  { sortAscending: true, key: 'age', value: 'Age' },
  { sortAscending: true, key: 'start_date', value: 'Start Date' },
  { sortAscending: true, key: 'salary', value: 'Salary' },
];
export class tableoperations {
  static sortbyString(item: any, rows) {
    switch (item.key) {
      case 'name': {
        rows.sort(function (a, b) {
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
        if (item.sortAscending == false) {
          rows.reverse();
          item.sortAscending = true;
        } else {
          item.sortAscending = false;
        }
        return rows;
      }
      case 'position': {
        rows.sort(function (a, b) {
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
        if (item.sortAscending == false) {
          rows.reverse();
          item.sortAscending = true;
        } else {
          item.sortAscending = false;
        }
        return rows;
      }
      case 'office': {
        rows.sort(function (a, b) {
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
        if (item.sortAscending == false) {
          rows.reverse();
          item.sortAscending = true;
        } else {
          item.sortAscending = false;
        }
        return rows;
      }
      case 'age': {
        rows.sort(function (a, b) {
          Number(a.age);
          Number(b.age);
          return a.age - b.age;
        });
        if (item.sortAscending == false) {
          rows.reverse();
          item.sortAscending = true;
        } else {
          item.sortAscending = false;
        }
        return rows;
      }
      case 'start_date': {
        rows.sort(function (a, b) {
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
        if (item.sortAscending == false) {
          rows.reverse();
          item.sortAscending = true;
        } else {
          item.sortAscending = false;
        }
        return rows;
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
        if (item.sortAscending == false) {
          rows.reverse();
          item.sortAscending = true;
        } else {
          item.sortAscending = false;
        }
        return rows;
      }
      default:
        console.log(item.key);
    }

    return rows;
  }
}
