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
    const dbInstance = req.app.get('db');
    console.log('how are you'); 

    const {name, price, image_url} =req.body;
    console.log('fire')   

    dbInstance.create_shoes([name, price, image_url])
    .then(()=>
        res.sendStatus(200)).catch(error => {
            res.status(500).send({errorMessage : 'Something is really wrong, have a nice day'})
            console.log(error)

        });
    
}

// updateFish: (req, res) => {
//     const {id} =req.param
//     const {color} = req.body
//     const db = req.app.get('db')
//     db.update_fish([id, color]).then((fishes)=>{
//         res.send(fishes)
//     })
// }

}