import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLoader',
  setup(props, context)
  {    
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      mainClass,
      components,
      theme,
      defaultClasses,
    } = useElementComponent(props, context)

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
    }
  },
}