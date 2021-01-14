const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "user_profile" ORDER BY "id" ASC;`;
    pool.query(queryText)
      .then( ( result ) => {
        res.send(result.rows);
      })
    .catch( (error) => {
      res.sendStatus(500)
      console.log('error in productRouter.get', error);
    })
});

/**
 * POST route template
 */
router.post('/product', (req, res) => {
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

module.exports = router;