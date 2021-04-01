import { createForm, testPropDefault, findAllComponents, testAttribute, destroy } from 'test-helpers'

export const id = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'id', elementType, 'my-id')

  it('should render `id` attribute', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          id: 'my-id',
          items: {
            0: 'value',
            1: 'value2',
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let RadiogroupSlotRadio0 = findAllComponents(elWrapper, { name: 'RadiogroupSlotRadio' }).at(0)
    let RadiogroupSlotRadio1 = findAllComponents(elWrapper, { name: 'RadiogroupSlotRadio' }).at(1)

    testAttribute(RadiogroupSlotRadio0, options.fieldType, 'id', 'my-id-0')
    testAttribute(RadiogroupSlotRadio1, options.fieldType, 'id', 'my-id-1')

    // destroy() // teardown
  })
}