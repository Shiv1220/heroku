var express = require('express');
var router = express.Router();
var User = require('../models/user');
var nodemailer = require('nodemailer');
var Data = require("../models/quotes");
var bodyParser = require('body-parser');
var Result = require("../models/showresult");
var Detail = require('../models/bookdetail')

const mongoose = require("mongoose");

var urlencodParser = bodyParser.urlencoded({ extended: false });

router.get('/',(req,res)=>{
    res.render("home");
  });
router.get('/contact',(req,res)=>{
    res.render("contact");
});
router.get('/blog',(req,res)=>{
    res.render("blog");
});
router.get('/services',(req,res)=>{
    res.render("services");
});
router.get('/about',(req,res)=>{
    res.render("about");
});
router.get('/blog_details',(req,res)=>{
    res.render("blog_details");
});
router.get('/elements',(req,res)=>{
    res.render("elements");
});
router.get('/home',(req,res)=>{
    res.render("home");
});
// router.post('/',function(req,res){
//     console.log(req.body);
// })
// router.get('/hello',function(req,res){
// 	var temp = JSON.parse(JSON.stringify(req.query));
//     res.render('hello',{
//          "data"  : temp 
		//  {
        //     "name" : req.query.name,
        //     "email" : req.query.email,
        //     "contact" : req.query.contact,
        //     "freighttype" : req.query.freightype,
        //     "cityofdeparture" : req.query.cityofdeparture,
        //     "incoterms" : req.query.incoterms,
        //     "weight" : req.query.weight,
        //     "height" : req.query.height,
        //     "width" : req.query.width,
        //     "length" : req.query.length,
        //     "extraservices" : req.query.extraservices
        //   }
//     });
// })
// router.post("/", (req,res)=>{
// 	    new Data({
// 		firstname : req.query.firstname,
// 		email : req.query.email,
// 		contact : req.query.contact,
// 	    freighttype: req.query.freightype,
// 		cityofdeparture : req.query.cityofdeparture,
// 		incoterms : req.query.incoterms,
// 		weight : req.query.weight,
// 	    height : req.query.height,
// 		width : req.query.width,
// 		length : req.query.length,
// 		extraservices : req.query.extraservices          
// 	   }).save(function(err, prd){
// 		if(err) res.json(err);
// 		else    res.send("data Successfully Added !");
// 	  });
	   
// 	});

// router.post('/hello', function(req, res, next) {
     
//     req.assert('firstname', 'FirstName is required').notEmpty()           //Validate name
//     req.assert('email', 'A valid email is required').isEmail()  //Validate email
  
//     var errors = req.validationErrors()
     
//     if( !errors ) {   //No errors were found.  Passed Validation!
         
     
//       var quoteDetails = new Data({
// 		        firstname : req.query.firstname,
// 				email : req.query.email,
// 				contact : req.query.contact,
// 			    freighttype: req.query.freightype,
// 				cityofdeparture : req.query.cityofdeparture,
// 				incoterms : req.query.incoterms,
// 				weight : req.query.weight,
// 			    height : req.query.height,
// 				width : req.query.width,
// 				length : req.query.length,
// 				extraservices : req.query.extraservices 
//       });
       
//       quoteDetails.save((err, doc) => {
//             if (!err)
//                 req.flash('success', 'User added successfully!');
//                 res.redirect('/hello');
            
//                 console.log('Error during record insertion : ' + err);
//       });
   
//     }
//     else {   //Display errors to user
//         var error_msg = ''
//         errors.forEach(function(error) {
//             error_msg += error.msg + '<br>'
//         })                
//         req.flash('error', error_msg)        
         
//         res.render('/hello', { 
//             title: 'Add New Quotes',
// 			firstname : req.query.firstname,
// 			email : req.query.email,
// 			contact : req.query.contact,
// 			freighttype: req.query.freightype,
// 			cityofdeparture : req.query.cityofdeparture,
// 			incoterms : req.query.incoterms,
// 			weight : req.query.weight,
// 			height : req.query.height,
// 			width : req.query.width,
// 			length : req.query.length,
// 			extraservices : req.query.extraservices
//         })
//     }
// });

// router.post("/",async(req,res)=>{
// 	try{
//        const registerdata = new Data({
// 		            firstname : req.body.firstname,
// 					email : req.body.email,
// 					contact : req.body.contact,
// 					freighttype: req.body.freightype,
// 					cityofdeparture : req.body.cityofdeparture,
// 					incoterms : req.body.incoterms,
// 					weight : req.body.weight,
// 					height : req.body.height,
// 					width : req.body.width,
// 					length : req.body.length,
// 					extraservices : req.body.extraservices
// 	   })
// 	   const registered = await registerdata.save();
// 	   res.status(201).json(registered);
// 	}catch(error){
// 		res.status(400).send(error);
// 	}
// });
// router.post('/hello',(req,res,next)=>{
// 	const quote = new Data({
// 	firstname : req.body.firstname,
// 	email : req.body.email,
// 	contact : req.body.contact,
// 	freighttype: req.body.freightype,
// 	cityofdeparture : req.body.cityofdeparture,
// 	incoterms : req.body.incoterms,
// 	weight : req.body.weight,
// 	height : req.body.height,
// 	width : req.body.width,
// 	length : req.body.length,
// 	extraservices : req.body.extraservices
// 	})
// 	quote.save()
// 	.then(result=>{
// 		res.status(200)
// 	})
// 	.catch(err=>{
// 		console.log(err);
// 		res.status(500).json({
// 			error:err
// 		})
// 	})
// });

router.post('/getquote',urlencodParser,(req,res,next)=>{
	console.log(req.body);
	res.render('getquote',{data:req.body})
	const quote = new Data({
		pickup : req.body.pickup,
		delivery : req.body.delivery,
		})
		quote.save()
			.then(result=>{
				res.status(200)
			})
});
router.post('/showresult',urlencodParser,(req,res,next)=>{
	console.log(req.body);
	res.render('showresult',{result:req.body})
	const show = new Result({
		make : req.body.make,
		year : req.body.year,
		model : req.body.model,
		name : req.body.name,
		email : req.body.email,
		phonenumber : req.body.phonenumber,
		})
		show.save()
			.then(result=>{
				res.status(200)
			})
});
router.post('/bookdetail',urlencodParser,(req,res,next)=>{
	console.log(req.body);
	res.render('bookdetail',{detail:req.body})
	const book = new Detail({
		rego :req.body.rego,
        colour :req.body.colour,
        date :req.body.date,
        name :req.body.name,
        email :req.body.email,
        phone :req.body.phone,
        contactname :req.body.contactname,
        contactphone :req.body.contactphone,
        pickupaddress :req.body.pickupaddress,
        pickupsuburb :req.body.pickupsuburb,
        deliveryname :req.body.deliveryname,
        deliveryphone :req.body.deliveryphone,
        deliveryaddress :req.body.deliveryaddress,
        deliverysuburb :req.body.deliverysuburb,
		})
		book.save()
			.then(result=>{
				res.status(200)
			})
});

	// 	const data = new Data({
	// 	firstname : req.body.firstname,
	// 	email : req.body.email,
	// 	contact : req.body.contact,
	// 	freighttype: req.body.freightype,
	// 	cityofdeparture : req.body.cityofdeparture,
	// 	incoterms : req.body.incoterms,
	// 	weight : req.body.weight,
	// 	height : req.body.height,
	// 	width : req.body.width,
	// 	length : req.body.length,
	// 	extraservices : req.body.extraservices
	// 	})
	// 	data.save()
	// 	.then(result=>{
	// 		console.log(result);
	// 		res.status(200).redirect("hello")
	// 	})
	// 	.catch(err=>{
	// 		console.log(err);
	// 		res.status(500).json({
	// 			error:err
	// 		})
	// 	})
	// });
	


router.get('/bookdetail',function(req,res,next){
	return res.render('bookdetail.ejs')
});
router.post('/payment',urlencodParser,(req,res,next)=>{
	console.log(req.body);
	res.render('payment',{detail:req.body})
});
router.get('/success',function(req,res,next){
	return res.render('success.ejs')
});
// const fruits = [
//     { name: 'apple', color: 'red' },
//     { name: 'banana', color: 'yellow' },
//     { name: 'grape', color: 'purple' }
//   ];

// function test() {
//   // condition: short way, all fruits must be red
//   const isAllRed = fruits.every(f => f.color == 'red');

//   console.log(isAllRed); // false
// }
// router.post('/getquote', function(req, res, next) {
// 	console.log(req.body);
// 	var location = req.body;
// 	if(location){}
// });


router.get('/admin', function (req, res, next) {
	return res.render('index.ejs');
});
router.post('/admin', function(req, res, next) {
	console.log(req.body);
	var personInfo = req.body;


	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newPerson = new User({
							unique_id:c,
							email:personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});

router.get('/login', function (req, res, next) {
	return res.render('login.ejs');
});

router.post('/login', function (req, res, next) {
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				console.log("Done Login");
				req.session.userId = data.unique_id;
				console.log(req.session.userId);
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});

router.get('/profile', function (req, res, next) {
	console.log("profile");
	User.findOne({unique_id:req.session.userId},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/');
		}else{
			//console.log("found");
			return res.render('data.ejs', {"name":data.username,"email":data.email});
		}
	});
});

router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/admin');
    	}
    });
}
});

router.get('/forgetpass', function (req, res, next) {
	res.render("forget.ejs");
});

router.post('/forgetpass', function (req, res, next) {
	//console.log('req.body');
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password==req.body.passwordConf) {
			data.password=req.body.password;
			data.passwordConf=req.body.passwordConf;

			data.save(function(err, Person){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not matched! Both Password should be same."});
		}
		}
	});
	
});



// POST route from contact form
router.post('/contact', (req, res) => {
	
	// Email Template
    const output = `
	p>You have a message</p>
	<h3>Contact Details</h3>
	<p>Name: ${req.body.name}</p>
	<p>Email: ${req.body.email}</p>
	<h3>Message</h3>
	<p>${req.body.message}</p>
       `;

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    user: "tst@gmail.com", // Sender email username
    pass: "password", // Sender email password, not the normal one.
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: '"Contact Form" <test@gmail.com>', //Sender mail
    to: "contact@dheerajvyas.com",					// Recever mail
	subject: `${req.body.name}`,
    html: output
  }

    // Send mail with defined transport object
    smtpTrans.sendMail(mailOpts, (error, info) => {
            if (error) {
                    return ('<h1 style="color:red" > Something Wrong. </h1>');
            }
            res.render('contact',{msg: '<h1 style="color: green" >Thank You, Message has been Sent.'});
    });
	
})

module.exports = router;