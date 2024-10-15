const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser');
var Usermodel = require('./models/Usermodel')
//var usersRouter = require('./routes/usersRoute')
const app = express()
const port = 3001
const mongo = require('./config/db')

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
//app.use('/users',usersRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/categories',(req,res)=>{
  const categories={
    status:101,
    data:[{
      name:'Grocery',
      img:"https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
    },{
      name:'Mobiles',
      img:"https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
    },
    {
      name:'Fashion',
      img:"https://rukminim2.flixcart.com/image/64/64/xif0q/kurta/q/0/w/l-jne4402-janasya-original-imah2yyz4gyhzpzd.jpeg",
    },{
      name:'Electronics',
      img:"https://rukminim1.flixcart.com/image/74/64/kura1e80/monitor/l/t/l/gw2280-full-hd-22-gw2280-benq-original-imag7t9tqskqfeen.jpeg",
    },{
      name:'Home & Furniture',
      img:"https://rukminim2.flixcart.com/image/130/60/xif0q/sofa-sectional/9/z/y/symmetrical-cream-cotton-yes-sa-tss-37-swangia-arts-honey-finish-original-imagth7zhjxgmrxu.jpeg",
    },
    {
      name:'Appliances',
      img:"https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",

    },{
      name:'Travel',
      img:"https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
    },
    {
      name:'Beauty,Toys & More',
      img:"https://rukminim2.flixcart.com/image/64/64/xif0q/stuffed-toy/s/2/o/adorable-strawberry-rabbit-plushie-cute-bunny-soft-toy-35-rss-original-imahf7vvm3gazrzz.jpeg",
    }]
  }
  res.send(categories)
})

app.post('/signup',async(req, res)=>{
    try{
      const {firstName,lastName,email,password,phoneNumber}= req.body
      console.log("------------",req.body);
      const student = new Usermodel({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
      })
      const existUser = await Usermodel.findOne({email:email})                    
      if(existUser){
        console.log("Already exist") 
      }
      else{
        console.log(student)
      await student.save()
      res.status(201).json(student)
      }
  }catch (error){
      console.log("there is an error", error)
      res.status(500).json({message: 'Server error'})
  }
 } ) 
 app.post('/login',async (req, res,next)=> {
  try{
  const exist = await Usermodel.findOne({email:req.body.email,password:req.body.password})
     if(exist){
      //res.json({status:"success",message:'Success'})
      res.json("Success")
     }
     else{
       console.log("Invalid details")
       res.json({status:"failure",message: 'Server error'})
     }
  }
  catch (error){
   console.log("there is an error", error)
   res.json({status:"failure",message: 'Server error'}) 
 }  
 
 });
// app.get('/*', (req, res) => {
//     res.send('Welcome')
//   })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// console.log(JSON.stringify(req.body));
  // res.json({status:"success",message:""})