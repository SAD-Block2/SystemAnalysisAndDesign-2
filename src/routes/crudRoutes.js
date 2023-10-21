const DBModel = require('../lib/DBModel')
const arr = [
  {
    id: 1,
    name: "juan",
    age: "23",
  },
  {
    id: 2,
    name: "pedro",
    age: "43",
  },
  {
    id: 3,
    name: "maria",
    age: "12",
  },
];

function check(req, res) {
  var { params } = req.params;
  console.log(params);
  filteredAray = arr.filter((item) => {
    return item.id == parseInt(params);
  });

  return res.json({
    result: filteredAray,
  });
}

function postMessage(req, res) {
  var body = req.body;

  return res.json({
    mesage: body.message,
  });
}


function createUser(req, res){
  try{
    const user = DBModel.createUsers({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    console.log('Test', user);
    res.json({
      user: user,
      result: req.body,
      message: 'Success'
    })
  } catch (error){
    req.json({
      message: 'error',
    })
  }
}


exports.check = check;
exports.postMessage = postMessage;
exports.createUser = createUser
