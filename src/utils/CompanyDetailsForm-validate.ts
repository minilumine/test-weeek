import { extend } from 'vee-validate'
import { required, digits } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Обязательное поле',
})

extend('digits', {
  ...digits,
  message: (fieldName, { length, _value_: value }) => {
    if (Number.isNaN(Number(value))) return 'Тут должны быть только циферки'
    if (value.length < length) return 'Тут должно быть побольше циферок'
    if (value.length > length) return 'Тут должно быть поменьше циферок'
    return ''
  },
})

extend('string', (value) => {
  if (/\d/.test(value)) return 'Наврятли в названии вашей компании присутсвуют цифры'
  return true
})
