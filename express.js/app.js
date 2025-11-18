const express = require('express');
const app = express();
let port = 3000;

app.use(express.json());
const users = [];

app.get('/user',(request,response)=>{
    if(users.length == 0){
        response.status(404).send("no user found");
        return;
    }
    response.status(201).send(users);
     
});
app.post('/user',(request,response)=>{
    console.log(request.body);
    const user = request.body;
    const findUser = users.find((x) =>x.id === user.id)
    if(findUser){
        response.status(400).send("user already existe");
        return;
    }
    users.push(request.body);
    response.send("created");
})
app.delete('/user/:id',(request,response) =>{
    const { id } = request.params;
    const findUseresIndex = users.findIndex((x) =>x.id == id)
    if(findUseresIndex == -1){
      response.status(400).send("user not found");
      return;
    }
    users.splice(findUseresIndex,1);
    response.status(200).send("user deleted succesfully");

})


app.listen(port,()=>{
    console.log('running on http://localhost:' + port);
});
