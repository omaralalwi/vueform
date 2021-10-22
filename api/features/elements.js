export default {
  "addons": {
    "base": {}
  },
  "asyncItems": {
    "base": {
      "computed": {
        "nativeItems": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "Contains select options for native select."
        }
      },
      "methods": {
        "updateItems": {
          "public": true,
          "returns": "void",
          "description": "Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.",
          "params": {
            "shouldDisable": {
              "types": [
                "boolean"
              ],
              "required": true,
              "description": "whether the input field should be disabled while fetching options"
            }
          }
        }
      }
    },
    "tags": {
      "methods": {
        "updateItems": {
          "public": true,
          "returns": "void",
          "description": "Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.",
          "params": {
            "shouldDisable": {
              "types": [
                "boolean"
              ],
              "required": true,
              "description": "whether the input field should be disabled while fetching options"
            }
          }
        }
      }
    },
    "checkboxgroup": {
      "computed": {
        "resolvedItems": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "Contains available items."
        }
      },
      "methods": {
        "updateItems": {
          "public": true,
          "returns": "void",
          "description": "Fetches & updates select options when using `async` items. Receives [`el$`](#property-el) as first param.",
          "params": {
            "shouldDisable": {
              "types": [
                "boolean"
              ],
              "required": true,
              "description": "whether the input field should be disabled while fetching options"
            }
          }
        }
      }
    }
  },
  "autogrow": {
    "base": {
      "methods": {
        "autosize": {
          "public": true,
          "returns": "void",
          "description": "Updates the height of the input based in its contents when `autogrow` is enabled."
        }
      }
    },
    "multilingual": {
      "methods": {
        "autosize": {
          "public": true,
          "returns": "void",
          "description": "Updates the height of the input based in its contents when `autogrow` is enabled."
        }
      }
    }
  },
  "baseElement": {
    "base": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        },
        "mounted": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element has been already mounted."
        }
      },
      "methods": {
        "activate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `true`."
        },
        "deactivate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `false`."
        }
      }
    },
    "list": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        },
        "mounted": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element has been already mounted."
        }
      },
      "methods": {
        "activate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `true`."
        },
        "deactivate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `false`."
        }
      }
    },
    "file": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        },
        "mounted": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element has been already mounted."
        }
      },
      "methods": {
        "activate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `true`."
        },
        "deactivate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `false`."
        }
      }
    },
    "static": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        },
        "mounted": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element has been already mounted."
        }
      },
      "methods": {
        "activate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `true`."
        },
        "deactivate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `false`."
        }
      }
    }
  },
  "button": {
    "base": {
      "computed": {
        "isButtonLabelComponent": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the button's label is a component."
        },
        "button": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Attributes of the button."
        },
        "isLoading": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the button is in loading state."
        }
      },
      "methods": {
        "handleClick": {
          "public": false,
          "returns": "void",
          "description": "Handles the button's click event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": "event"
            }
          }
        }
      }
    }
  },
  "check": {
    "base": {
      "methods": {
        "check": {
          "public": true,
          "returns": "void",
          "description": "Checks one or more checkboxes.",
          "params": {
            "values": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "value(s) to check"
            }
          }
        },
        "uncheck": {
          "public": true,
          "returns": "void",
          "description": "Unchecks one or more checkboxes.",
          "params": {
            "values": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "value(s) to check"
            }
          }
        },
        "checkAll": {
          "public": true,
          "returns": "void",
          "description": "Checks all checkboxes."
        },
        "uncheckAll": {
          "public": true,
          "returns": "void",
          "description": "Unchecks all checkboxes."
        }
      }
    }
  },
  "children": {
    "base": {
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "default": "{[name]:component}",
          "description": "Child element components."
        }
      }
    },
    "object": {
      "computed": {
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        },
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "default": "{[name]:component}",
          "description": "Child element components."
        }
      },
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        }
      }
    },
    "address": {
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        },
        "addressId": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The `id` attribute of the input which contains the location autocomplete. Format: `address-{rand}`."
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "default": "{[name]:component}",
          "description": "Child element components."
        },
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        },
        "fields": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`."
        }
      }
    },
    "buttons": {
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "default": "{[name]:component}",
          "description": "Child element components."
        },
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        }
      }
    }
  },
  "classes": {
    "base": {
      "computed": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the element's outermost DOM."
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The default classes for the element defined by theme."
        }
      }
    },
    "input": {
      "computed": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the element's outermost DOM."
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The default classes for the element defined by theme."
        }
      }
    },
    "list": {
      "computed": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the element's outermost DOM."
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The default classes for the element defined by theme."
        }
      }
    },
    "multifile": {
      "computed": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the element's outermost DOM."
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The default classes for the element defined by theme."
        }
      }
    },
    "file": {
      "computed": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the element's outermost DOM."
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The default classes for the element defined by theme."
        }
      }
    },
    "button": {
      "computed": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the element's outermost DOM."
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The default classes for the element defined by theme."
        }
      }
    },
    "editor": {
      "computed": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the element's outermost DOM."
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The default classes for the element defined by theme."
        }
      }
    }
  },
  "columns": {
    "base": {
      "computed": {
        "columnsClasses": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Calulated column sizes and classes for the element."
        }
      }
    }
  },
  "controls": {
    "base": {
      "computed": {
        "hasAdd": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether adding new items is allowed. Will return `false` if the element is `:disabled` or have reached `:max` items. Can be disabled manually by setting [`:controls.add`](#controls) to `false`."
        },
        "hasRemove": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether remove items is allowed. Will return `false` if the element is `:disabled` or has <= `:min` items. Can be disabled manually by setting [`:controls.remove`](#controls) to `false`."
        },
        "hasSort": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether list items should be sortable. Can be enabled by setting [`:sort`](#sort) to `true`, but will return `false` if the element is `:disabled`."
        }
      }
    },
    "multifile": {
      "computed": {
        "hasAdd": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether adding new items is allowed. Will return `false` if the element is `:disabled`. Can be disabled manually by setting [`:controls.add`](#controls) to `false`."
        },
        "hasRemove": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether remove items is allowed. Will return `false` if the element is `:disabled` or a temporary file upload is in progress. Can be disabled manually by setting [`:controls.remove`](#controls) to `false`."
        },
        "hasSort": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether list items should be sortable. Can be enabled by setting [`:sort`](#sort) to `true`, but will return `false` if the element is `:disabled` or a temporary file upload is in progress."
        }
      }
    }
  },
  "data": {
    "base": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "object": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "group": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "list": {
      "computed": {
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        },
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        }
      },
      "methods": {
        "add": {
          "public": true,
          "returns": "void",
          "description": "Appends a new item.",
          "params": {
            "value": {
              "types": [
                "any"
              ],
              "required": false,
              "description": "value of the appended element (optional)"
            }
          }
        },
        "remove": {
          "public": true,
          "returns": "void",
          "description": "Removes an items by its index.",
          "params": {
            "index": {
              "types": [
                "number"
              ],
              "required": true,
              "description": "index of items to be removed"
            }
          }
        },
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "handleAdd": {
          "public": false,
          "returns": "void",
          "description": "Handles the `add` event."
        },
        "handleRemove": {
          "public": false,
          "returns": "void",
          "description": "Handles the `remove` event.",
          "params": {
            "index": {
              "types": [
                "number"
              ],
              "required": true,
              "description": "index of child to be removed"
            }
          }
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "date": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "dates": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "multilingual": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "editor": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    },
    "teditor": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data, which finally results in form level data."
        },
        "requestData": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Same as `data` property except that it only includes the element's value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled)."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.",
          "params": {
            "value": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the value to be loaded"
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)"
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "Updates the value of the element similarly to [`load`](#load), only that it can\\'t format format data.",
          "params": {
            "value": {
              "types": [
                "string",
                ""
              ],
              "required": true,
              "description": "the value to be set"
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": "Clears the element's value."
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": "Resets the element's value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepares the element."
        }
      }
    }
  },
  "dateFormat": {
    "base": {
      "computed": {
        "displayDateFormat": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The display date format."
        },
        "valueDateFormat": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The format of date value."
        },
        "loadDateFormat": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The date format of the data the element being loaded with."
        }
      }
    },
    "dates": {
      "computed": {
        "displayDateFormat": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The display date format."
        },
        "valueDateFormat": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The format of date value."
        },
        "loadDateFormat": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The date format of the data the element being loaded with."
        }
      }
    }
  },
  "default": {
    "base": {
      "computed": {
        "defaultValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "object": {
      "computed": {
        "defaultValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "group": {
      "computed": {
        "defaultValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "multilingual": {
      "computed": {
        "defaultValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The default value of the element."
        }
      }
    }
  },
  "disabled": {
    "base": {
      "data": {
        "localDisabled": {
          "public": false,
          "default": "null",
          "types": [
            "boolean",
            "null"
          ],
          "description": "Helper to store whether the element is disabled via api (with .disable())."
        }
      },
      "computed": {
        "isDisabled": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is disabled."
        }
      },
      "methods": {
        "disable": {
          "public": true,
          "returns": "void",
          "description": "Disables the element."
        },
        "enable": {
          "public": true,
          "returns": "void",
          "description": "Enables the element even if it is disabled by [`:disabled`](#disabled) option."
        }
      }
    },
    "checkboxgroup": {
      "data": {
        "disabledItems": {
          "public": false,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "List of option keys to be disabled."
        }
      },
      "computed": {
        "isDisabled": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is disabled."
        }
      },
      "methods": {
        "disableAll": {
          "public": true,
          "returns": "void",
          "description": "Disables all items."
        },
        "enableAll": {
          "public": true,
          "returns": "void",
          "description": "Enables all items."
        },
        "disable": {
          "public": true,
          "returns": "void",
          "description": "Disables one item or more items.",
          "params": {
            "values": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "value(s) to disable"
            }
          }
        },
        "enable": {
          "public": true,
          "returns": "void",
          "description": "Disables one item or more disabled items.",
          "params": {
            "values": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "value(s) to enable"
            }
          }
        }
      }
    },
    "button": {
      "computed": {
        "isDisabled": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the button is disabled."
        }
      }
    }
  },
  "drop": {
    "base": {
      "computed": {
        "canDrop": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether `:drop` is enabled and browser supports dragging."
        }
      },
      "methods": {
        "handleDrop": {
          "public": false,
          "returns": "void",
          "description": "Handles the `drop` event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": false,
              "description": ""
            }
          }
        }
      }
    },
    "multifile": {
      "computed": {
        "canDrop": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether `:drop` is enabled and browser supports dragging."
        }
      },
      "methods": {
        "handleDrop": {
          "public": false,
          "returns": "void",
          "description": "Handles the `drop` event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": false,
              "description": ""
            }
          }
        }
      }
    }
  },
  "editor": {
    "base": {
      "computed": {
        "editorEndpoint": {
          "public": false,
          "default": "`config.endpoints.attachment.url`",
          "types": [
            "string"
          ],
          "description": "The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option."
        },
        "editorMethod": {
          "public": false,
          "default": "`config.endpoints.attachment.method`",
          "types": [
            "string"
          ],
          "description": "The method to use to upload attachment. Can be changed by setting [`method`](#method) option."
        }
      },
      "data": {
        "focused": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the editor is focused."
        }
      }
    }
  },
  "empty": {
    "base": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    },
    "multilingual": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    },
    "array": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    }
  },
  "fieldId": {
    "base": {
      "computed": {
        "fieldId": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used."
        }
      }
    }
  },
  "file": {
    "base": {
      "data": {
        "hasUploadError": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether the file uploader has any errors."
        },
        "base64": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "The `base64` format of the file when [`:view`](#view) is `image` or `gallery` and file only has been selected, but hasn't been uploaded yet."
        },
        "progress": {
          "public": true,
          "default": "0",
          "types": [
            "number"
          ],
          "description": "The percentage of progress when the file is being temporarily uploaded (0-100)."
        },
        "preparing": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "If the form is submitted and a temp file hasn't been uploaded yet, the element will enter into `preparing` state by setting this to `true`. When in `preparing` state the form submission process will be halted until all async functions hasn't been completed without any errors."
        }
      },
      "computed": {
        "uploadTempFileEndpoint": {
          "public": false,
          "default": "config.endpoints.uploadTempFile.url",
          "types": [
            "object"
          ],
          "description": "The url where the temp file should be submitted."
        },
        "removeTempFileEndpoint": {
          "public": false,
          "default": "config.endpoints.removeTempFile.url",
          "types": [
            "object"
          ],
          "description": "The url where the remove temp file request should be submitted."
        },
        "removeFileEndpoint": {
          "public": false,
          "default": "config.endpoints.removeFile.url",
          "types": [
            "object"
          ],
          "description": "The url where the remove file request should be submitted."
        },
        "uploadTempFileMethod": {
          "public": false,
          "default": "config.endpoints.uploadTempFile.method",
          "types": [
            "object"
          ],
          "description": "The method where the temp file should be submitted."
        },
        "removeTempFileMethod": {
          "public": false,
          "default": "config.endpoints.removeTempFile.method",
          "types": [
            "object"
          ],
          "description": "The method where the remove temp file request should be submitted."
        },
        "removeFileMethod": {
          "public": false,
          "default": "config.endpoints.removeFile.method",
          "types": [
            "object"
          ],
          "description": "The method where the remove file request should be submitted."
        },
        "fileUrl": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "URL to file using the [`:url`](#url) option without including the filename. If `url` is not defined it will default to `'/'`."
        },
        "stage": {
          "public": true,
          "types": [
            "number"
          ],
          "description": "The stage the file is at:<br>* `0`: file not selected<br>* `1`: file selected<br>* `2`: temp file uploaded<br>* `3`: file uploaded"
        },
        "filename": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The original or stored name of the file."
        },
        "link": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The link to an uploaded file."
        },
        "preview": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The preview of the file when [`view`](#view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded."
        },
        "uploaded": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the file has been uploaded."
        },
        "canRemove": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the file can be removed."
        },
        "canUploadTemp": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether temporary file can be uploaded."
        },
        "canSelect": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether file can be selected."
        }
      },
      "methods": {
        "uploadTemp": {
          "public": true,
          "returns": "void",
          "description": "Upload temporary file (async)."
        },
        "remove": {
          "public": true,
          "returns": "void",
          "description": "Removes file (async):<br>* in stage `1`: sets the value to null<br>* in stage `2`: submit a request to `removeTemp` endpoint and sets the value to null<br>* in stage `3`: submits a request to `remove` endpoint and sets the value to null"
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": "Prepare the element for submitting the form (async). It will upload temp file if it hasn't been uploaded yet and halts the submit process until its done without any errors."
        },
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "Handles `change` event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": ""
            }
          }
        },
        "handleClick": {
          "public": false,
          "returns": "void",
          "description": "Handles file select button `click` event."
        },
        "handleUploadTemp": {
          "public": false,
          "returns": "void",
          "description": "Handles `uploadTemp` event."
        },
        "handleRemove": {
          "public": false,
          "returns": "void",
          "description": "Handles `remove` event."
        },
        "handleAbort": {
          "public": false,
          "returns": "void",
          "description": "Handles `abort` event."
        }
      }
    }
  },
  "floating": {
    "base": {
      "computed": {
        "hasFloating": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element floating label."
        }
      }
    }
  },
  "genericName": {
    "base": {
      "computed": {
        "genericName": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The generic name of the element constructed from label / floating or element name."
        }
      }
    },
    "file": {
      "computed": {
        "genericName": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The generic name of the element constructed from label / floating, element name or default file name if name is a number."
        }
      }
    }
  },
  "handleAlert": {
    "base": {
      "methods": {
        "handleAlert": {
          "public": false,
          "returns": "void",
          "description": "Handles `alert` event.",
          "params": {
            "message": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "alert message"
            }
          }
        }
      }
    }
  },
  "handleChange": {
    "base": {
      "methods": {
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "Handles `change` event.",
          "params": {
            "val": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "value of the element"
            }
          }
        }
      }
    }
  },
  "handleError": {
    "base": {
      "methods": {
        "handleError": {
          "public": false,
          "returns": "void",
          "description": "Handles `error` event.",
          "params": {
            "error": {
              "types": [
                "Error"
              ],
              "required": true,
              "description": "the error object"
            }
          }
        }
      }
    }
  },
  "handleInput": {
    "base": {
      "methods": {
        "handleInput": {
          "public": false,
          "returns": "void",
          "description": "Handles `input` event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": ""
            }
          }
        }
      }
    }
  },
  "handleSelectEvents": {
    "base": {
      "methods": {
        "handleSelect": {
          "public": false,
          "returns": "void",
          "description": "Handles `select` event.",
          "params": {
            "option": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "the selected option object"
            }
          }
        },
        "handleDeselect": {
          "public": false,
          "returns": "void",
          "description": "Handles `deselect` event.",
          "params": {
            "option": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "the deselected option object"
            }
          }
        },
        "handleSearchChange": {
          "public": false,
          "returns": "void",
          "description": "Handles `search-change` event.",
          "params": {
            "searchQuery": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the current search query"
            }
          }
        },
        "handleOpen": {
          "public": false,
          "returns": "void",
          "description": "Handles `open` event."
        },
        "handleClose": {
          "public": false,
          "returns": "void",
          "description": "Handles `close` event."
        },
        "handleClear": {
          "public": false,
          "returns": "void",
          "description": "Handles `clear` event."
        },
        "handlePaste": {
          "public": false,
          "returns": "void",
          "description": "Handles `paste` event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": false,
              "description": "event"
            }
          }
        },
        "handleTag": {
          "public": false,
          "returns": "void",
          "description": "Handles `tag` event.",
          "params": {
            "searchQuery": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the current search query"
            }
          }
        }
      }
    }
  },
  "handleTag": {
    "base": {
      "methods": {
        "handleTag": {
          "public": false,
          "returns": "void",
          "description": "Handles `tag` event.",
          "params": {
            "searchQuery": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the current search query."
            }
          }
        }
      }
    }
  },
  "input": {
    "base": {
      "data": {
        "input": {
          "public": true,
          "types": [
            "HTMLElement"
          ],
          "description": "The main input field of the element."
        }
      }
    }
  },
  "label": {
    "base": {
      "computed": {
        "hasLabel": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component's [`:forceLabels`](laraform#force-labels) option is `true`. Either way a label should be displayed."
        }
      }
    }
  },
  "languages": {
    "base": {
      "computed": {
        "language": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The ISO 639-1 code of the currently selected language (2 letters)."
        },
        "languages": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "Available language codes."
        }
      }
    }
  },
  "layout": {
    "base": {
      "computed": {
        "elementLayout": {
          "public": false,
          "types": [
            "string",
            "component"
          ],
          "description": "The current layout of the element."
        }
      }
    }
  },
  "loading": {
    "base": {
      "computed": {
        "isLoading": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is in loading state."
        }
      }
    }
  },
  "location": {
    "base": {
      "data": {
        "locationService": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The location service that's initalized once the component is mounted."
        },
        "location": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The raw location object of location provider (Google/Algolia)."
        }
      },
      "computed": {
        "defaultOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Default options for location provider."
        }
      },
      "options": {
        "providerOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
        }
      },
      "methods": {
        "handleAddressChange": {
          "public": true,
          "description": "Handles location service's address change.",
          "params": {
            "data": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing address data"
            },
            "raw": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing raw address data (based on provider)"
            }
          }
        },
        "handleLocationBlur": {
          "public": false,
          "description": ""
        },
        "initLocationService": {
          "public": true,
          "returns": "void",
          "description": "Initalizes location service."
        }
      }
    },
    "address": {
      "data": {
        "locationService": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The location service that's initalized once the component is mounted."
        },
        "location": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The raw location object of location provider (Google/Algolia)."
        }
      },
      "computed": {
        "defaultOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Default options for location provider."
        }
      },
      "options": {
        "providerOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
        }
      },
      "methods": {
        "updateFields": {
          "public": true,
          "description": "Updates fields with address data.",
          "params": {
            "data": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing address data"
            }
          }
        },
        "handleAddressChange": {
          "public": true,
          "description": "Handles location service's address change.",
          "params": {
            "data": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing address data"
            },
            "raw": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing raw address data (based on provider)"
            }
          }
        },
        "initLocationService": {
          "public": true,
          "returns": "void",
          "description": "Initalizes location service."
        }
      }
    }
  },
  "multifile": {
    "base": {
      "computed": {
        "preparing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether any of the file are preparing (being uploaded before submit)."
        },
        "hasUploading": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether any file is currently uploading."
        }
      },
      "methods": {
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "Handles `change` event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": ""
            }
          }
        },
        "handleClick": {
          "public": false,
          "returns": "void",
          "description": "Handles `click` event."
        }
      }
    }
  },
  "nullValue": {
    "base": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    },
    "array": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    },
    "boolean": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    },
    "min": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    },
    "object": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    },
    "location": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    },
    "address": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    },
    "multilingual": {
      "computed": {
        "nullValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The null value of the element."
        }
      }
    }
  },
  "options": {
    "base": {
      "computed": {
        "fieldOptions": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Options for toggle input. Can be extended via [`:extend-options`](#option-extend-options) with [@vueform/toggle options](https://github.com/vueform/toggle#basic-props)."
        }
      }
    }
  },
  "order": {
    "base": {
      "methods": {
        "refreshOrderStore": {
          "public": false,
          "returns": "void",
          "description": "Sets the value of `storeOrder` fields within a list of items to match the order.",
          "params": {
            "value": {
              "types": [
                "array"
              ],
              "required": true,
              "description": "list of items"
            }
          }
        }
      },
      "computed": {
        "orderByName": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The name of the field which we should order by."
        }
      }
    }
  },
  "path": {
    "base": {
      "computed": {
        "parent": {
          "public": false,
          "types": [
            "component"
          ],
          "description": "The parent component of the element."
        },
        "path": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included)."
        },
        "dataPath": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded)."
        },
        "flat": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))"
        }
      }
    },
    "group": {
      "computed": {
        "path": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included)."
        },
        "dataPath": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded)."
        },
        "flat": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))"
        },
        "parent": {
          "public": false,
          "types": [
            "component"
          ],
          "description": "The parent component of the element."
        }
      }
    }
  },
  "prototype": {
    "base": {
      "computed": {
        "prototype": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The schema of a child element."
        },
        "isObject": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether childrens are objects."
        }
      }
    },
    "multifile": {
      "computed": {
        "storeFileName": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The `name` of the child element that stores the filename."
        },
        "isObject": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether childrens are objects."
        },
        "prototype": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The schema of a child element."
        }
      }
    }
  },
  "radio": {
    "base": {
      "methods": {
        "check": {
          "public": true,
          "returns": "void",
          "description": "Checks the radio."
        },
        "uncheck": {
          "public": true,
          "returns": "void",
          "description": "Unhecks the radio."
        }
      },
      "computed": {
        "inputName": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The `name` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used."
        }
      }
    }
  },
  "removing": {
    "base": {
      "data": {
        "removing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether async file removing request is in progress."
        }
      }
    }
  },
  "request": {
    "base": {
      "data": {
        "request": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The axios request when temp is being uploaded."
        },
        "axios": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The form's axios instance."
        }
      },
      "computed": {
        "uploading": {
          "public": false,
          "description": "Whether a temp file is currently being uploaded."
        }
      }
    }
  },
  "select": {
    "base": {
      "methods": {
        "select": {
          "public": true,
          "returns": "void",
          "description": "Selects one or more options.",
          "params": {
            "options": {
              "types": [
                "str",
                "array"
              ],
              "required": true,
              "description": "value(s) of the option(s) to select"
            }
          }
        },
        "deselect": {
          "public": true,
          "returns": "void",
          "description": "Deselects one or more options.",
          "params": {
            "options": {
              "types": [
                "str",
                "array"
              ],
              "required": true,
              "description": "value(s) of the option(s) to deselect"
            }
          }
        }
      }
    }
  },
  "slots": {
    "base": {
      "computed": {
        "elementSlots": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Slots of the element."
        },
        "fieldSlots": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Slots related to the element's field. Eg. an \"elementSlot\" is something related to the element, like `label`, `description`, etc. A \"fieldSlot\" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`."
        }
      }
    }
  },
  "sort": {
    "base": {
      "data": {
        "list": {
          "public": false,
          "types": [
            "HTMLElement"
          ],
          "description": "The DOM element containing list items."
        },
        "sortable": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "The `Sortable.js` instance."
        }
      },
      "computed": {
        "isSortable": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the list is sortable. Can be enabled with `:sort=\"true\"` option, but it will disabled if [`isDisabled`](#is-disabled) is `true`."
        }
      },
      "methods": {
        "handleSort": {
          "public": false,
          "description": "Handles `sort` event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": false,
              "description": "Sortable.js event"
            }
          }
        },
        "initSortable": {
          "public": false,
          "returns": "void",
          "description": "Inits Sortable.js."
        },
        "destroySortable": {
          "public": false,
          "returns": "void",
          "description": "Destroys Sortable.js."
        }
      }
    }
  },
  "sorting": {
    "base": {
      "data": {
        "sorting": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the list is currently being sorted (an item is dragged)."
        }
      }
    }
  },
  "static": {
    "base": {
      "computed": {
        "isHtml": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Determines if HTML content should be rendered for the element."
        }
      }
    }
  },
  "templates": {
    "base": {
      "computed": {
        "templates": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the template to use within the element. Use [`:replaceTemplates`](#replace-templates) to override any of the element's templates."
        }
      }
    }
  },
  "toggle": {
    "base": {
      "methods": {
        "check": {
          "public": true,
          "returns": "void",
          "description": "Sets the toggle to `on` (`trueValue`)."
        },
        "uncheck": {
          "public": true,
          "returns": "void",
          "description": "Sets the toggle to `off` (`falseValue`)."
        }
      }
    }
  },
  "validation": {
    "base": {
      "data": {
        "state": {
          "public": false,
          "default": "{ dirty: false, validate: true }",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": false,
          "default": "[]",
          "types": [
            [
              "array",
              "Validator"
            ]
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "MessageBag",
          "types": [
            "MessageBag"
          ],
          "description": "Instance of MessageBag service."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "All the errors of `MessageBag`."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error of `MessageBag`."
        },
        "validationRules": {
          "public": false,
          "types": [
            "string",
            "array"
          ],
          "description": "The element's validation rules."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element (async)."
        },
        "dirt": {
          "public": false,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Removes the element's `dirty` state."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Sets the validators to default state."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes MessageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "list": {
      "data": {
        "state": {
          "public": false,
          "default": "{ dirty: false, validate: true }",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": false,
          "default": "[]",
          "types": [
            [
              "array",
              "Validator"
            ]
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "MessageBag",
          "types": [
            "MessageBag"
          ],
          "description": "Instance of MessageBag service."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "childrenErrors": {
          "public": false,
          "types": [
            "array"
          ],
          "description": "The list of errors collected from children."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "All the errors of `MessageBag`."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error of `MessageBag`."
        },
        "validationRules": {
          "public": false,
          "types": [
            "string",
            "array"
          ],
          "description": "The element's validation rules."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element and validates children (async)."
        },
        "validateValidators": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element (async)."
        },
        "validateChildren": {
          "public": true,
          "returns": "void",
          "description": "Validates every child (async)."
        },
        "dirt": {
          "public": false,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Removes the element's `dirty` state."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Sets the validators to default state."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes MessageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "multilingual": {
      "data": {
        "state": {
          "public": false,
          "default": "{ dirty: false, validate: true }",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": false,
          "default": "[]",
          "types": [
            [
              "array",
              "Validator"
            ]
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "MessageBag",
          "types": [
            "MessageBag"
          ],
          "description": "Instance of MessageBag service."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "All the errors of `MessageBag`."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error of `MessageBag`."
        },
        "validationRules": {
          "public": false,
          "types": [
            "string",
            "array"
          ],
          "description": "The element's validation rules."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element in every language (async)."
        },
        "validateLanguage": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element in a specific language (async).",
          "params": {
            "lang": {
              "types": [
                "string"
              ],
              "required": false,
              "description": "the langauage to check (defaults to currently selected language)"
            }
          }
        },
        "dirt": {
          "public": false,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Removes the element's `dirty` state."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Sets the validators to default state."
        },
        "initState": {
          "public": false,
          "returns": "void",
          "description": "Inits the default `state` object."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes MessageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "object": {
      "data": {
        "messageBag": {
          "public": true,
          "default": "MessageBag",
          "types": [
            "MessageBag"
          ],
          "description": "Instance of MessageBag service."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "All the errors of `MessageBag`."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element (async)."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Removes the element's `dirty` state."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Sets the validators to default state."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes MessageBag service."
        }
      }
    },
    "slider": {
      "data": {
        "state": {
          "public": false,
          "default": "{ dirty: false, validate: true }",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": false,
          "default": "[]",
          "types": [
            [
              "array",
              "Validator"
            ]
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "MessageBag",
          "types": [
            "MessageBag"
          ],
          "description": "Instance of MessageBag service."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "All the errors of `MessageBag`."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error of `MessageBag`."
        },
        "validationRules": {
          "public": false,
          "types": [
            "string",
            "array"
          ],
          "description": "The element's validation rules."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element (async)."
        },
        "dirt": {
          "public": false,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Removes the element's `dirty` state."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Sets the validators to default state."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes MessageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "file": {
      "data": {
        "state": {
          "public": false,
          "default": "{ dirty: false, validate: true }",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": false,
          "default": "[]",
          "types": [
            [
              "array",
              "Validator"
            ]
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "MessageBag",
          "types": [
            "MessageBag"
          ],
          "description": "Instance of MessageBag service."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending`, `debouncing`, `uploading` or `removing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "All the errors of `MessageBag`."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error of `MessageBag`."
        },
        "validationRules": {
          "public": false,
          "types": [
            "string",
            "array"
          ],
          "description": "The element's validation rules."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Checks each validation rule for the element (async). File element will only validate for `min`, `max`, `between`, `size`, `mimetypes`, `mimes`, `dimensions`, `file`, `image`, `gt`, `gte`, `lt` and `lte` rules and only before the temporary files are uploaded."
        },
        "dirt": {
          "public": false,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Removes the element's `dirty` state."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Sets the validators to default state."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes MessageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    }
  },
  "value": {
    "base": {
      "data": {
        "initialValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The initial value of the element."
        },
        "internalValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The store for the value of the element when we're not using external data (form's `v-model`)."
        }
      },
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Intermediary value between element's value and field's `v-model`. It is required when we need to transform the value format between the element and its field."
        }
      }
    },
    "object": {
      "data": {
        "internalValue": {
          "public": false,
          "types": [
            "any"
          ],
          "description": "The store for the value of the element when we're not using external data (form's `v-model`)."
        }
      },
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        }
      }
    },
    "group": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        }
      }
    },
    "multilingual": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Intermediary value between element's value and field's `v-model`. It is required when we need to transform the value format between the element and its field."
        }
      }
    },
    "date": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Intermediary value between element's value and field's `v-model`. It is required when we need to transform the value format between the element and its field."
        }
      }
    },
    "dates": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Intermediary value between element's value and field's `v-model`. It is required when we need to transform the value format between the element and its field."
        }
      }
    }
  },
  "view": {
    "base": {
      "data": {
        "hidden": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method."
        }
      },
      "computed": {
        "visible": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is visible. It's `false` when `available` or `active` is `false` or `hidden` is `true`."
        }
      },
      "methods": {
        "hide": {
          "public": true,
          "returns": "void",
          "description": "Hides the element."
        },
        "show": {
          "public": true,
          "returns": "void",
          "description": "Shows the element if it was hidden with [`hide()`](#hide) method."
        }
      }
    }
  },
  "watchValue": {}
}