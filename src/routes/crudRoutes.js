const DBModel=require("../lib/DBModel")
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
    return item.id !== parseInt(params);
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

function insertUser(req,res){
  let body=req.body
  const {username,password,email}=body
  try{
    const user=DBModel.createUsers({
      username:username,
      password:password,
      email:email
    });
    res.json({
      user:user,
      result:body,
      message:"sucessful"
    })
  } catch (error) {
    res.json9({
      errorMessage:error
    })
  }
}

function createUser(req, res) : void {
  try {
    const user = DBModel.createUsers(payload: {
      username: req.body.username,
      email: req.body.email,
    });
    console.log(message: "TEST", ...optionalParams: user);
    res.json({
      user.json({
        user: user,
      });
      
    } catch (error) {
      res.json({
        message: "error",
      });
    })
  }
}
//exports.check = check;
//exports.postMessage = postMessage;
exports.createUser = createUser