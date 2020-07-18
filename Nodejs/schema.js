const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://yildirimdam:FEDbilgeadam@cluster0-hhhtz.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Schema = mongoose.Schema;

// Ürün kategorisi - rengi - fiyatı - stok durumu - resimler - açıklama -
// etiketi(indirim, yeni, tükenmek üzere, sezon sonu,sezon başı)
const Table_ExampleSchema = new Schema({
  // isDeleted: { type: Boolean, default: false },
  name: String,
  position: String,
  office: String,
  age: String,
  start_date: String,
  salary: String,
});

const TableExample = mongoose.model("Table_Examples", Table_ExampleSchema);

const table_examples = {
  Add: function (req, res) {
    var entity = new TableExample();
    entity.name = req.body.name;
    entity.position = req.body.position;
    entity.office = req.body.office;
    entity.age = req.body.age;
    entity.start_date = req.body.start_date;
    entity.salary = req.body.salary;

    entity.save(function (entity) {
      res.send("Save successfully!");
    });
  },
  GetAll: function (req, res) {
    TableExample.find(function (error, veri) {
      if (!error) {
        return res.json(veri);
      } else {
        return res.json(error);
      }
    });
  },
};

const ProductSchema = new Schema({
  creatingDate: Date,
  updatedDate: Date,
  isDeleted: { type: Boolean, default: false },
  category: String,
  color: Array,
  price: Number,
  stockNumber: Number,
  pictures: Array,
  description: String,
  tag: Array,
  size: Array,
});

const Product = mongoose.model("Products", ProductSchema);

const product = {
  Add: function (req, res) {
    var entity = new Product();

    entity.creatingDate = new Date();
    entity.updatedDate = entity.creatingDate;
    entity.category = req.body.category;
    entity.color = req.body.color;
    entity.price = req.body.price;
    entity.stockNumber = req.body.stockNumber;
    entity.pictures = req.body.pictures;
    entity.description = req.body.description;
    entity.tag = req.body.tag;
    entity.size = req.body.size;

    entity.save(function (entity) {
      res.send("Save successfully!");
    });
  },
  GetAll: function (req, res) {
    Product.find({ isDeleted: false }, function (error, data) {
      if (!error) {
        return res.json(data);
      } else {
        return res.json(error);
      }
    });
  },
  getbyid: (req, res) => {
    var id = req.params.id;
    Product.findById(id, (err, document) => {
      if (!err) {
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  update: (req, res) => {
    var productid = req.params.id;
    console.log(productid);
    Product.findById(productid, (err, document) => {
      console.log(document);
      if (!err && document != null) {
        document.updatedDate = new Date();
        document.category = req.body.category;
        document.color = req.body.color;
        document.price = req.body.price;
        document.stockNumber = req.body.stockNumber;
        document.pictures = req.body.pictures;
        document.description = req.body.description;
        document.tag = req.body.tag;

        document.save((saveerr, saveresult) => {
          if (!saveerr) {
            res.json(document);
          } else {
            res.json(saveerr);
          }
        });
      }
      if (!err && document == null) {
        res.send("Böyle bir ürün bulunamadı");
      }
      if (err) {
        res.json(err);
      }
    });
  },
  delete: (req, res) => {
    var productid = req.params.id;

    Product.findById(productid, (err, document) => {
      if (!err) {
        document.isDeleted = true;
        document.save();
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  forcedelete: (req, res) => {
    var productid = req.body.id;
    Product.deleteOne({ _id: productid }, (err) => {
      if (!err) {
        res.send("Datanın kökünü kazıdım için rahat olsun");
      } else {
        return res.json(error);
      }
    });
  },
};

const AccountSchema = new Schema({
  creatingDate: Date,
  updatedDate: Date,
  isDeleted: { type: Boolean, default: false },
  accountID: String,
  userFullName: String,
  accountSecret: String,
  userNickname: String,
  userMail: String,
  phone: String,
  address: Array,
  favorites: Array,
  ordersID: Array,
});
const Account = mongoose.model("Accounts", AccountSchema);

const account = {
  Add: function (req, res) {
    var entity = new Account();

    entity.creatingDate = new Date();
    entity.updatedDate = entity.creatingDate;
    entity.accountID = req.body.accountID;
    entity.userFullName = req.body.userFullName;
    entity.accountSecret = req.body.accountSecret;
    entity.userNickname = req.body.userNickname;
    entity.phone = req.body.phone;
    entity.userMail = req.body.userMail;
    entity.address = req.body.address;
    entity.favorites = req.body.favorites;

    entity.ordersID = req.body.ordersID;

    entity.save(function (entity) {
      res.send("Account saved successfully!");
    });
  },
  GetAll: function (req, res) {
    Account.find({ isDeleted: false }, function (error, data) {
      if (!error) {
        return res.send(data);
      } else {
        return res.json(error);
      }
    });
  },
  getbyid: (req, res) => {
    var id = req.params.id;
    Account.findById(id, (err, document) => {
      if (!err) {
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  delete: (req, res) => {
    var accountid = req.body.id;
    Account.findById(accountid, (err, document) => {
      if (!err) {
        document.isDeleted = true;
        document.save();
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  forcedelete: (req, res) => {
    var accountid = req.body.id;
    Account.deleteOne({ _id: accountid }, (err) => {
      if (!err) {
        res.send("Datanın kökünü kazıdım için rahat olsun");
      } else {
        return res.json(error);
      }
    });
  },
  updatePassword: (req, res) => {
    var accountid = req.body.id;
    Account.findById(accountid, (err, document) => {
      if (!err && document != null) {
        document.updatedDate = new Date();
        document.accountSecret = req.body.accountSecret;
        document.save((saveerr, saveresult) => {
          if (!saveerr) {
            res.json(document);
          } else {
            res.json(saveerr);
          }
        });
      } else {
        return res.json(error);
      }
    });
  },
  updateAccountDetails: (req, res) => {
    var accountid = req.body.id;
    Account.findById(accountid, (err, document) => {
      if (!err && document != null) {
        document.updatedDate = new Date();
        document.address = req.body.address;
        document.phone = req.body.phone;
        document.userNickname = req.body.userNickname;
        document.userMail = req.body.userMail;
        document.save((saveerr, saveresult) => {
          if (!saveerr) {
            res.json(document);
          } else {
            res.json(saveerr);
          }
        });
      } else {
        return res.json(error);
      }
    });
  },
};

const AdminSchema = new Schema({
  creatingDate: Date,
  updatedDate: Date,
  isDeleted: { type: Boolean, default: false },
  adminID: String,
  adminFullName: String,
  adminSecret: String,
  adminNickname: String,
  adminMail: String,
  adminPhone: String,
});
const Admin = mongoose.model("Admins", AdminSchema);

const admin = {
  Add: function (req, res) {
    var entity = new Admin();

    entity.creatingDate = new Date();
    entity.updatedDate = entity.creatingDate;
    entity.adminID = req.body.adminID;
    entity.adminSecret = req.body.adminSecret;
    entity.adminNickname = req.body.adminNickname;
    entity.adminMail = req.body.adminMail;
    entity.adminPhone = req.body.adminPhone;

    entity.save(function (entity) {
      res.send("Admin saved successfully!");
    });
  },
  GetAll: function (req, res) {
    Admin.find({ isDeleted: false }, function (error, data) {
      if (!error) {
        return res.json(data);
      } else {
        return res.json(error);
      }
    });
  },
  getbyid: (req, res) => {
    var id = req.params.id;
    Admin.findById(id, (err, document) => {
      if (!err) {
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  delete: (req, res) => {
    var adminID = req.params.id;
    Admin.findById(adminID, (err, document) => {
      if (!err) {
        document.isDeleted = true;
        document.save();
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  forcedelete: (req, res) => {
    var adminID = req.body.id;
    Admin.deleteOne({ _id: adminID }, (err) => {
      if (!err) {
        res.send("Datanın kökünü kazıdım için rahat olsun");
      } else {
        return res.json(error);
      }
    });
  },
  updatePassword: (req, res) => {
    var adminID = req.params.id;
    Admin.findById(adminID, (err, document) => {
      if (!err && document != null) {
        document.updatedDate = new Date();
        document.accountSecret = req.body.accountSecret;
        document.save((saveerr, saveresult) => {
          if (!saveerr) {
            res.json(document);
          } else {
            res.json(saveerr);
          }
        });
      } else {
        return res.json(error);
      }
    });
  },
  updateAdminDetails: (req, res) => {
    var adminID = req.params.id;
    Admin.findById(adminID, (err, document) => {
      if (!err && document != null) {
        document.updatedDate = new Date();
        document.phone = req.body.phone;
        document.adminNickname = req.body.adminNickname;
        document.adminMail = req.body.adminMail;
        document.save((saveerr, saveresult) => {
          if (!saveerr) {
            res.json(document);
          } else {
            res.json(saveerr);
          }
        });
      } else {
        return res.json(error);
      }
    });
  },
};

const OrderSchema = new Schema({
  creatingDate: Date,
  updatedDate: Date,
  isDeleted: { type: Boolean, default: false },
  accountID: String,
  orderAdress: String,
  orderedProductsDetail: Array,
  orderOwnerCustomerID: String,
  orderDate: String,
  shippedDate: String,
  orderTotalPrice: Number,
  OrderStatus: Array,
});
const Order = mongoose.model("Orders", OrderSchema);
const order = {
  Add: function (req, res) {
    var entity = new Order();
    entity.creatingDate = new Date();
    entity.updatedDate = entity.creatingDate;
    entity.orderID = req.body.orderID;
    entity.orderAdress = req.body.orderAdress;
    entity.orderedProductsDetail = req.body.orderedProductsDetail;
    entity.orderOwnerCustomerID = req.body.orderOwnerCustomerID;
    entity.orderDate = req.body.orderDate;
    entity.shippedDate = req.body.shippedDate;
    entity.orderTotalPrice = req.body.orderTotalPrice;
    entity.OrderStatus = req.body.OrderStatus;

    entity.save(function (entity) {
      res.send(entity);
    });
  },
  GetAll: function (req, res) {
    Order.find({ isDeleted: false }, function (error, data) {
      if (!error) {
        return res.json(data);
      } else {
        return res.json(error);
      }
    });
  },
  getbyid: (req, res) => {
    var id = req.params.id;
    Order.findById(id, (err, document) => {
      if (!err) {
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  delete: (req, res) => {
    var orderid = req.body.id;
    Order.findById(orderid, (err, document) => {
      if (!err) {
        document.isDeleted = true;
        document.save();
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  },
  forcedelete: (req, res) => {
    var orderid = req.body.id;
    Order.deleteOne({ _id: orderid }, (err) => {
      if (!err) {
        res.send("Datanın kökünü kazıdım için rahat olsun");
      } else {
        return res.json(error);
      }
    });
  },
  updateAddress: (req, res) => {
    var orderid = req.body.id;
    Order.findById(orderid, (err, document) => {
      if (!err && document != null) {
        document.updatedDate = new Date();
        document.orderAdress = req.body.orderAdress;
        document.save((saveerr, saveresult) => {
          if (!saveerr) {
            res.json(document);
          } else {
            res.json(saveerr);
          }
        });
      } else {
        return res.json(error);
      }
    });
  },
};

module.exports = {
  account,
  product,
  admin,
  order,
  table_examples,
};
