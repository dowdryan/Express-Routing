const express = require('express')
const app = express()
const ExpressError = require('./expressError')
const { getMean, getMedian, getMode, getAll } = require('./mathFunctions')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', function(req, res, next) {
    let nums = req.query.nums.split(',');
    if (!nums) {
        throw new ExpressError('No Numbers Given.', 400)
    } else {
        const result = getMean(nums)
        return res.json(result)
    }
})

app.get('/median', function(req, res, next) {
    let nums = req.query.nums.split(',').sort((a, b) => a - b)
    if (!nums) {
        throw new ExpressError('No Numbers Given.', 400)
    } else {
        return res.json(getMedian(nums))
    }
})

app.get('/mode', function(req, res, next) {
    let nums = req.query.nums.split(',').sort((a, b) => a - b)
    if (!nums) {
        throw new ExpressError('No Numbers Given.', 400)
    } else {
        return res.json(getMode(nums))
    }
})

app.get('/all', function(req, res, next) {
    let nums = req.query.nums.split(',').sort((a, b) => a - b)
    if (!nums) {
        throw new ExpressError('No Numbers Given.', 400)
    } else {
        return res.json(getAll(nums))
    }
})


// 404 Handler
app.use(function(req, res, next) {
    const notFoundError = new ExpressError('Page Not Found', 404);
    return next(notFoundError)
})

app.listen(3000, function() {
    console.log('App on Port 3000')
})