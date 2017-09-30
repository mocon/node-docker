import express from 'express';
const router = express.Router();

import { getUser } from '../helpers/github';

router.route('/:handle')
    // Get a Github user by their handle
    .get((req, res) => {
        const handle = req.params.handle;

        getUser(handle)
            .then(user => {
                if (user.message === 'Not Found') {
                    console.log('User not found.');
                    res.status(404).send('User not found.');
                } else {
                    console.log(`Got user ${handle}.`);
                    res.status(200).json(user);
                }
            })
            .catch(err => {
                console.error(err);
            });
    });

export default router;
