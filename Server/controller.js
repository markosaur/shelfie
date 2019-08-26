module.exports={

getShoe: (req, res) => {
    console.log('are we there yet');
    
    const db = req.app.get('db')
    console.log('are we there yet 2');

    db.read_shoes().then((shoes)=>{ 
    console.dir(shoes);

        res.status(200).send(shoes)
    }).catch(err => console.log('Not get shoes'));

},

createShoe: (req,res) => {
    console.log('where is my shoe')
    const db = req.app.get('db');
    console.log('how are you'); 
    const {name, price, image_url} = req.body;
    console.log(req.body)   

    db.create_shoes([name, price, image_url])
    .then(()=>
        res.sendStatus(200))
        .catch(err => {res.status(500).send({errorMessage : 'Something is really wrong, have a nice day'})
            // console.log(err)

        });   
},

deleteShoe: (req,res) => {
    const db = req.app.get('db');
    const {id} = req.params;

    db.delte_shoes(id)
}


// db.create_shoes([name, price, image_url])
// .then(()=>
//     res.sendStatus(200))
//     .catch(err => {res.status(500).send({errorMessage : 'Something is really wrong, have a nice day'})
//         console.log(err)

//     });

// updateFish: (req, res) => {
//     const {id} =req.param
//     const {color} = req.body
//     const db = req.app.get('db')
//     db.update_fish([id, color]).then((fishes)=>{
//         res.send(fishes)
//     })
// }

}