let Joi = require('joi')

class businessValidator {
   constructor() { }

   get createdBusiness() {
      return {
         body: Joi.object().keys({
            name: Joi.string().required(),
            owner: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            zip: Joi.number().required(),
            phone: Joi.string().required(),
            category: Joi.array().items(Joi.string()).required(),
            subCategory: Joi.array().items(Joi.string()).required(),
            website: Joi.string().uri(),
            email: Joi.string().email()
         }).unknown(false)
      }
   }



   get editBusiness() {
      return {
         body: Joi.object().keys({
            name: Joi.string(),
            owner: Joi.string().required(),
            address: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zip: Joi.number(),
            phone: Joi.string(),
            category: Joi.array().items(Joi.string()),
            subCategory: Joi.array().items(Joi.string()),
            website: Joi.string().uri(),
            email: Joi.string().email()
         }).unknown(false)
      }
   }

   get editCategory() {
      return {
         body: Joi.object().keys({
            owner: Joi.string().required(),
            category: Joi.string().required()
         }).unknown(false).required()
      }
   }

   get deleteBusiness() {
      return {
         query: Joi.object().keys({
            owner: Joi.string().required()
         }).required()
      }
   }
}

module.exports = new businessValidator()