const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const joi = require('joi')
const { preferences } = require('joi')

const arrayString = ['banana', 'mango', 'apple']
const arrayOfObjects = [{ example: 'example1' }, { example: 'example2' }, { example: 'example3' }]

const userInput = {
    personalInfo: {
        streetAddress: '123456789',
        city: 'Bhopal',
        state: 'MP'
    },
    preferences: arrayString,
    examples: arrayOfObjects
}

const personalInfoSchema = joi.object().keys({
    streetAddress: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().length(2).required()
})
const preferencesSchema = joi.array().items(joi.string())

const exampleSchema = joi.array().items(joi.object().keys({
    example: joi.string().required()
}))

const schema = joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema,
    examples: exampleSchema
})

const { error, value } = schema.validate(userInput)
if (error) {
    console.log(error)
    return
}
console.log(value)