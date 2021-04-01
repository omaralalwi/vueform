import { createForm, findAllComponents, testPropDefault, testAttribute, destroy } from 'test-helpers'

export const accept = function (elementType, elementName, options) {
  it('should pass `accept` to Trix component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          accept: ['jpg', 'png'],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Trix = findAllComponents(elWrapper, { name: 'TrixWrapper' }).at(0)

    expect(Trix.props('accept')).toStrictEqual(el.accept)

    // destroy() // teardown
  })
}

export const acceptMimes = function (elementType, elementName, options) {
  it('should pass `acceptMimes` to Trix component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          acceptMimes: ['image/jpeg', 'image/png'],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Trix = findAllComponents(elWrapper, { name: 'TrixWrapper' }).at(0)

    expect(Trix.props('acceptMimes')).toStrictEqual(el.acceptMimes)

    // destroy() // teardown
  })
}

export const trixEndpoint = function (elementType, elementName, options) {
  it('should equal to config value by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.trixEndpoint).toStrictEqual(form.vm.$laraform.config.endpoints.elements.trix.attachment)
  })
  
  it('should pass `endpoint` to Trix component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Trix = findAllComponents(elWrapper, { name: 'TrixWrapper' }).at(0)

    expect(Trix.props('endpoint')).toStrictEqual(el.trixEndpoint)

    // destroy() // teardown
  })
}