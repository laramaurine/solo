const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    let user_id = req.params.id;
    const queryText = `SELECT * from user_profile WHERE user_id = $1`;
    pool.query(queryText, [req.user.id])
      .then( ( result ) => {
        console.log(result.rows);
        res.send(result.rows);
      })
    .catch( (error) => {
      res.sendStatus(500)
      console.log('error in profileRouter.get', error);
    })
  });
  
 

  router.post('/', (req, res) => {
    console.log('hi i am in product router post line 24', req.body);
    const queryText = `INSERT INTO user_profile (user_id, purpose_id, frequency, review, img_url, in_use, description, product_name)
    VALUES(
   $1, $2, $3, $4, $5, $6, $7, $8
    )
    `;
      pool.query(queryText, [
        req.body.user_id,
        req.body.product_id, 
        req.body.frequency,
        req.body.review,
        req.body.img_url,
        req.body.in_use, 
        req.body.description, 
        req.body.product_name
     ])
        .then( ( result ) => {
          res.sendStatus(201);
        })
      .catch( (error) => {
        res.sendStatus(500)
        console.log('error in productRouter.post', error);
      })
  });
  
  router.delete('/:id', (req, res) => {
    const queryText = 'DELETE from user_profile WHERE id = $1;';
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((error) => {
        console.log('error in profile router delete', error);
        res.sendStatus(500);
      });
  });
  // router.put('/:id', (req, res) => {
  //   let id = req.params.id
  //   let purpose = req.params.purpose_id
  //   let frequency = req.params.frequency
  //   let review = req.params.review
  //   let in_use = req.params.im_use
  //   let img_url = req.params.img_url
  //   let description = req.body.description
  //   let product_name = req.params.product_name
  //   const queryText = ''
  //   pool.query(queryText, [title, description, id])
  //     .then(() => { res.sendStatus(201) })
  //     .catch(error => {
  //       console.log('Error in PUT profile router', error)
  //     })
  // })
  
  module.exports = router;
  