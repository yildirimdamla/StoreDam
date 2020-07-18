const express = require("express");
var mongoose = require("./schema");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get("/", (req, res) => {
//   res.sendfile("index.html");
// });

app.post("/table/add", (req, res) => {
  mongoose.table_examples.Add(req, res);
});
app.get("/table/list", (req, res) => {
  mongoose.table_examples.GetAll(req, res);
});
app.post("/table/list", (req, res) => {
  mongoose.table_examples.GetAll(req, res);
});

app.post("/product/add", (req, res) => {
  mongoose.product.Add(req, res);
});

app.get("/product/list", (req, res) => {
  mongoose.product.GetAll(req, res);
});
app.get("/product/:id", (req, res) => {
  mongoose.product.getbyid(req, res);
});
app.post("/product/update/:id", (req, res) => {
  mongoose.product.update(req, res);
});
app.post("/product/delete/:id", (req, res) => {
  mongoose.product.delete(req, res);
});
app.post("/product/forcedelete", (req, res) => {
  mongoose.product.forcedelete(req, res);
});

app.post("/account/add", (req, res) => {
  mongoose.account.Add(req, res);
});
app.get("/account/list", (req, res) => {
  mongoose.account.GetAll(req, res);
});
app.get("/account/:id", (req, res) => {
  mongoose.account.getbyid(req, res);
});
app.post("/account/forcedelete", (req, res) => {
  mongoose.account.forcedelete(req, res);
});
app.post("/account/delete", (req, res) => {
  mongoose.account.delete(req, res);
});
app.post("/account/updatePassword", (req, res) => {
  mongoose.account.updatePassword(req, res);
});
app.post("/account/updateAccount", (req, res) => {
  mongoose.account.updateAccountDetails(req, res);
});
app.post("/order/add", (req, res) => {
  mongoose.order.Add(req, res);
});
app.get("/order/list", (req, res) => {
  mongoose.order.GetAll(req, res);
});
app.get("/order/:id", (req, res) => {
  mongoose.order.getbyid(req, res);
});
app.post("/order/forcedelete", (req, res) => {
  mongoose.order.forcedelete(req, res);
});
app.post("/order/delete", (req, res) => {
  mongoose.order.delete(req, res);
});
app.post("/order/updateAddress", (req, res) => {
  mongoose.order.updateAddress(req, res);
});

app.post("/aa", (req, res) => {
  var id = req.query.id;
  $.getJSON(url, function (data) {
    var orderid = req.body.id;
    data.findById(orderid, (err, document) => {
      if (!err) {
        document.isDeleted = true;
        document.save();
        res.json(document);
      } else {
        return res.json(error);
      }
    });
  });
});

app.listen(9060);
