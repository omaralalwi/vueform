import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLabelFloating',
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, context)
  {    
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      $size,
      $view,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The floating label of the element, defined via `floating` prop.
     * 
     * @type {string}
     */
    const floating = computed(() => {
      return el$.value.floating || (form$.value.options.floatPlaceholders ? el$.value.placeholder : null)
    })
    
    return {
      el$,
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
      floating,
    }
  },
}