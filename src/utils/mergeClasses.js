import _ from 'lodash'

const mergeClasses = function (base, add) {
  let components = base

  _.each(add, (classes, component) => {
    components[component] = mergeComponentClasses(base[component] || {}, classes)
  })

  return components
}

const mergeComponentClasses = function (base, add) {
  let classes = base

  _.each(add, (classes_, key) => {
    classes[key] = mergeClass(base[key] || null, classes_)
  })

  return classes
}

const mergeClass = function (base, add) {
  if (add === null) {
    return base
  }

  if (base === null) {
    return add
  }

  let classes

  if (_.isPlainObject(base)) {
    if (_.isPlainObject(add)) {
      classes = Object.assign({}, base, add)
    }
    else if (_.isArray(add)) {
      classes = _.concat([base], add)
    } else {
      classes = Object.assign({}, base, {
        [add]: true
      })
    }
  }
  else if (_.isArray(base)) {
    if (_.isPlainObject(add)) {
      classes = _.concat(base, [add])
    }
    else if (_.isArray(add)) {
      classes = _.concat(base, add)
    } else {
      classes = _.concat(base, [add])
    }
  } else {
    if (_.isPlainObject(add)) {
      classes = Object.assign({}, {
        [base]: true
      }, add)
    }
    else if (_.isArray(add)) {
      classes = _.concat([base], add)
    } else {
      classes = `${base} ${add}`
    }
  }

  return classes
}

export default mergeClasses

export {
  mergeClass,
  mergeComponentClasses,
}