import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useData from './../../composables/elements/useData'
import useDefault from './../../composables/elements/useDefault'
import useValidation from './../../composables/elements/useValidation'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useEvents from './../../composables/useEvents'
import useCheck from './../../composables/elements/useCheck'
import useFieldId from './../../composables/elements/useFieldId'
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useSlots from './../../composables/elements/useSlots'

import { array as useNullValue } from './../../composables/elements/useNullValue'
import { checkboxgroup as useDisabled } from './../../composables/elements/useDisabled'
import { checkboxgroup as useBaseElement } from './../../composables/elements/useBaseElement'
import { checkboxgroup as useAsyncItems } from './../../composables/elements/useAsyncItems'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'CheckboxgroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'checkboxgroup',
      private: true,
    },
    default: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object, Array, Function],
      default: () => ({})
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    disables: {
      required: false,
      type: [Array],
      default: () => ([])
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const path = usePath(props, context)
    const nullValue = useNullValue(props, context)

    const fieldId = useFieldId(props, context, {
      path: path.path,
    })

    const events = useEvents(props, context, {}, {
      events: context.emits,
    })

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
      fire: events.fire,
    })

    const disabled = useDisabled(props, context, {
      form$: form$.form$,
    })

    const asyncItems = useAsyncItems(props, context, {
      disableAll: disabled.disableAll,
      enableAll: disabled.enableAll,
      el$: baseElement.el$,
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent,
    })

    const check = useCheck(props, context, {
      value: value.value,
      resolvedItems: asyncItems.resolvedItems,
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
    })

    const genericName = useGenericName(props, context, {
      label: label.label,
      form$: form$.form$,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const view = useView(props, context, {
      available: conditions.available,
      active: baseElement.active,
      form$: form$.form$,
      parent: path.parent,
    })
    
    const templates = useTemplates(props, context, {
      theme: theme.theme,
      form$: form$.form$,
      $view: view.$view,
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates,
      el$: baseElement.el$,
      $view: view.$view,
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates,
    }, {
      slots: [
        'checkbox', 'label', 'info', 'description', 'before',
        'between', 'after',
      ]
    })

    useWatchValue(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate,
    })

    onMounted(() => {
      validation.initMessageBag()
      validation.initValidation()
    })

    return {
      ...form$,
      ...theme,
      ...layout,
      ...fieldId,
      ...path,
      ...conditions,
      ...value,
      ...validation,
      ...label,
      ...classes,
      ...columns,
      ...baseElement,
      ...genericName,
      ...view,
      ...templates,
      ...slots,
      ...disabled,
      ...events,
      ...data,
      ...default_,
      ...nullValue,
      ...check,
      ...asyncItems,
    }
  } 
}