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
    console.log('hi i am in product router post line 24');
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
  // router.put(`/update`, (req, res) => {
  //   console.log('hi i am put router line 58 profile router');
  //   console.log('line 59 hi hi hi', req.body.headers.product);
  //   let user = req.body.headers.product.user_id
  //   let id = req.body.headers.product.id
  //   let purpose = req.body.purpose_id
  //   let frequency = req.body.headers.product.frequency
  //   let review = req.body.headers.product.review
  //   let in_use = req.body.headers.product.in_use
  //   let img_url = req.body.headers.product.img_url
  //   let description = req.body.headers.product.description
  //   let product_name = req.body.headers.product.product_name
  //   console.log('LINE 69 ==============',review);
    
  //   const queryText = `UPDATE user_profile SET frequency=$1, review=$2, in_use=$3, img_url=$4, description=$5, 
  //                      product_name=$6 WHERE id=$7`
  //   console.log('line 73 profile router', id, frequency, review, in_use, description, product_name, user);

  //   pool.query(queryText, [frequency, review, in_use, img_url, description, product_name, id])
  //     .then((results) => { console.log('line 72', res.statusCode); res.sendStatus(201) })
  //     .catch(error => {
  //       console.log('Error in PUT profile router', error)
  //     })
  // });
  router.put(`/`, (req, res) => {
    console.log('hi hi hi router line 82');
    console.log('line 83 ========== >', req.body.id);
    if(req.body.status === 'in use'){
        const queryText = `UPDATE user_profile SET in_use='not in use' WHERE id=$1;`
        pool.query(queryText, [req.body.id])
          .then((results) => { console.log('line 87', res.statusCode); res.sendStatus(201) })
          .catch(error => {
            console.log('Error in PUT profile router', error)
       })
    }else{

        const queryText = `UPDATE user_profile SET in_use='in use' WHERE id=$1;`
        pool.query(queryText, [req.body.id])
          .then((results) => { console.log('line 87', res.statusCode); res.sendStatus(201) })
          .catch(error => {
            console.log('Error in PUT profile router', error)
          })

        }
      })
  
  
    
  
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
  