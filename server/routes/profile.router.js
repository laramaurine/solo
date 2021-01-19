const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    let user_id = req.params.id;
    const queryText = `SELECT * from user_profile WHERE user_id = $1`;
    pool.query(queryText, [user_id])
      .then( ( result ) => {
        res.send(result.rows);
      })
    .catch( (error) => {
      res.sendStatus(500)
      console.log('error in profileRouter.get', error);
    })
  });
  
  /**
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
  });
  
  module.exports = router;
  