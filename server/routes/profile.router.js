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
  router.put(`/id`, (req, res) => {
    let user = req.body.user_id
    let id = req.body.id
    let purpose = req.body.purpose_id
    let frequency = req.body.frequency
    let review = req.body.review
    let in_use = req.body.in_use
    let img_url = req.body.img_url
    let description = req.body.description
    let product_name = req.body.product_name
    const queryText = `UPDATE user_profile SET purpose_id=$1, 
                       frequency=$2, review=$3, in_use=$4, img_url=$5, description=$6, 
                       product_name=$7 WHERE id=$8 and user=$9`
    pool.query(queryText, [purpose, frequency, review, in_use, img_url, description, product_name, id, user])
      .then(() => { res.sendStatus(201) })
      .catch(error => {
        console.log('Error in PUT profile router', error)
      })
  });
//GET ROUTE for update product GETS based on id
  router.get('/solo/:id', (req, res) => {
    let user_id = req.params.id;
    console.log('hi in solo router line 78', user_id);
    const queryText = `SELECT * from user_profile WHERE id = $1`;
    pool.query(queryText, [user_id])
      .then( ( result ) => {
        console.log('line 82 router', result.rows[0]);
        res.send(result.rows[0]);
      })
    .catch( (error) => {
      res.sendStatus(500)
      console.log('error in profileRouter.get', error);
    })
  });
  
  module.exports = router;
  