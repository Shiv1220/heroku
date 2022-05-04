const Data = require('../models/quotes');

const getAllquote = async (req, res, next) => {
    const list = await Data.find().exec();
    res.render('quotelist', {
        data: list
    });
}

const getAddquoteView = (req, res, next) => {
    res.render('hello');
}

// const addquote = async (req, res, next) => {
//     const {error} = (req.body);
//     console.log(req.body)
//     if(error) return res.status(422).send(error.details[0].message);
//     const data = req.body;
//     let quote = await new Data({
//     firstname : req.data.firstname,
// 	email : req.data.email,
// 	contact : req.data.contact,
// 	freighttype: req.data.freightype,
// 	cityofdeparture : req.data.cityofdeparture,
// 	incoterms : req.data.incoterms,
// 	weight : req.data.weight,
// 	height : req.data.height,
// 	width : req.data.width,
// 	length : req.data.length,
// 	extraservices : req.data.extraservices
//     });
//     quote = await quote.save();
//     res.redirect('/data');
// }

// const getUpdatequoteView = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const onequote = await Data.findById(id).exec();
//         res.render('updatequote', {
//             quote: onequote
//         });
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }

// const updatequote = async(req, res, next) => {
//     const {error} = validate(req.body);
//     if (error) return res.status(422).send(error.details[0].message);
//     const id = req.params.id;
//     const data = req.body;
//     let quote = await Data.findByIdAndUpdate(id, {
//         firstname : req.data.firstname,
//         email : req.data.email,
//         contact : req.data.contact,
//         freighttype: req.data.freightype,
//         cityofdeparture : req.data.cityofdeparture,
//         incoterms : req.data.incoterms,
//         weight : req.data.weight,
//         height : req.data.height,
//         width : req.data.width,
//         length : req.data.length,
//         extraservices : req.data.extraservices
//     }, {new: true});
//     if(!quote) return res.status(404).send('Quote with the given id not found');

//     res.redirect('/data');
// }

const getDeletequoteView = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onequote = await Data.findById(id).exec();
        res.render('deletequote', {
            quote: onequote
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletequote = async (req, res, next) => {
    try {
        const id = req.params.id;
        const quote = await Data.findByIdAndRemove(id);
        if(!quote) return res.status(404).send('Quote with the given id not found');
        res.redirect('/hello');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllquote,
    getAddquoteView,
    getDeletequoteView,
    deletequote
}