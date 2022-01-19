import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormErrors',
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============


    /**
     * Form errors including element errors and the ones added to `messageBag` manually.
     * 
     * @type {array}
     */
    const errors = computed(() => {
      return form$.value.formErrors
    })

    return {
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
      errors,
    }
  },
}