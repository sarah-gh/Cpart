// eslint-disable
import { configure, extend /* setInteractionMode */ } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/fa.json'

// eslint-disable-next-line
export default function veeValidate(Vue, options) {
  //   setInteractionMode("eager"); // lazy or blur or change

  // configure
  configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
      dirty: ['is-dirty', 'is-dirty'] // multiple classes per flag!
    }
  })

  // a sample custom extend
  extend('minmax', {
    validate (value, { min, max }) {
      return value.length >= min && value.length <= max
    },
    params: ['min', 'max'],
    message: (fieldName, min, max) => {
      return `The ${fieldName} field must have at least ${min} characters and ${max} characters at most`
    }
  })

  // persian support
  messages.length = '{_field_} باید {length} کاراکتر باشد'
  Object.keys(rules).forEach((rule) => {
    extend(rule, {
      ...rules[rule], // copies rule configuration
      message: messages[rule] // assign message
    })
  })
}
