import Joi from 'joi';
import validatorHandler from '../utils/validatorHandler.js';
export const validRegister = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string()
     .alphanum()
     .min(4)
     .max(10)
     .pattern(new RegExp(/^\S+$/))
     .required()
     .messages({
       'string.alphanum': 'Special character not allowed',
       'string.min': 'Username min 4 character',
       'string.max': 'Username max 10 character',
       'string.pattern.base': 'Whitespace not allowed',
       'string.empty': 'Username cannot be empty',
       'any.required': 'Username required'
     }),
    password: Joi.string()
     .alphanum()
     .min(6)
     .max(20)
     .pattern(new RegExp(/^\S+$/))
     .required()
     .messages({
       'string.alphanun': 'Special character not allowed',
       'string.min': 'Password min 6 character',
       'string.max': 'Password max 20 character',
       'string.pattern.base': 'Whitespace not allowed',
       'string.empty': 'Password cannot be empty',
       'any.required': 'Password required'
     }),
    password2: Joi.string()
     .alphanum()
     .min(6)
     .max(20)
     .pattern(new RegExp(/^\S+$/))
     .required()
     .messages({
       'string.alphanum': 'Special character not allowed',
       'string.min': 'Confirm password min 6 character',
       'string.max': 'Confirm password max 20 character',
       'string.pattern.base': 'Whitespace not allowed',
       'string.empty': 'Confirm password cannot be empty',
       'any.required': 'Confirm password required'
     })
  });
  validatorHandler(req, res, next, schema);
};

export const validLogin = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string()
     .alphanum()
     .min(4)
     .max(10)
     .pattern(new RegExp(/^\S+$/))
     .required()
     .messages({
       'string.alphanum': 'Special character not allowed',
       'string.min': 'Username min 4 character',
       'string.max': 'Username max 10 character',
       'string.pattern.base': 'Whitespace not allowed',
       'string.empty': 'Username cannot be empty',
       'any.required': 'Username required'
     }),
    password: Joi.string()
     .alphanum()
     .min(6)
     .max(20)
     .pattern(new RegExp(/^\S+$/))
     .required()
     .messages({
       'string.alphanum': 'Special character not allowed',
       'string.trim': 'Space not allowed',
       'string.min': 'Password min 6 character',
       'string.max': 'Password max 20 character',
       'string.empty': 'Password cannot be empty',
       'any.required': 'Password required'
     }),
  });
  validatorHandler(req, res, next, schema);
};
