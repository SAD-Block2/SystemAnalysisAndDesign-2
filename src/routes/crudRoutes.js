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
    //=== check value and data type //parameter is id and 1
  });

  return res.json({
    result: filteredAray, //
  });
}

function postMessage(req, res) {
  var body = req.body;

  return res.json({
    mesage: body.message,
  });
}

exports.check = check;
exports.postMessage = postMessage;
exports.insertUser = insertUser


function insertUser(req,res) {
  let body=req.body
  const {username,password,emaail}=body
  try{
    const user=DBModel.createUsers({
      username:username,
      password:password,
      email:email

    })
    res.json({
      user:user,
      result:body,
      message:"succesfull"
    })
  } catch (error) {
    res.json({
      errorMessage:error
    })
  }
}