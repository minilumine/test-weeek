import { extend } from 'vee-validate'
import {  required, digits } from 'vee-validate/dist/rules'

extend('required', required)
extend('digits', digits)
