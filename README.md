# ⚠️ 🚧 Under development 🚧 ⚠️

FJSON Specification
----
Json based format for descriibing simple html forms

## Motivation
The standard describing the html form in json format is useful for communication between the backend and frontend.
This also makes it easier to create frameworks for forms

## Limitations
- This standard describes most of [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) defined in the [html specification](https://html.spec.whatwg.org/multipage/input.html#states-of-the-type-attribute), except `button`, `search`, `reset`, `submit`, and `hidden` but with additional `toogle`, `select` and `textarea` type. Also, it is acceptable to use the `custom` type for extend json with your own input types
  
```ts
type FJSON = {
  version: 1;
  fileds: Field[];
};

type Field = TextField;
type Validator = (value: unknown) => boolean;

interface CommonFiled {
  type: string;
  name: string;
  label?: string;
  validations?: Record<string, ValidatorSettings<unknown>>;
  title?: string;
  placeholder?: string;
  required?: boolean; // default: false
  disabled?: boolean; // default: false
  readOnly?: boolean; // default: false
}

interface ValidatorSettings<T> {
  arguments: Array<T>;
  errorMessage?: string;
}

interface CheckboxField extends CommonFiled {
  type: 'checkbox';
}

interface ColorFiled extends CommonFiled {
  type: 'color';
}

interface CustomFiled extends CommonFiled {
  type: 'custom';
}

interface DateFiled extends CommonFiled {
  type: 'date';
  validations?: {
    min?: ValidatorSettings<number>;
    max?: ValidatorSettings<number>;
  };
}

interface EmailField extends CommonFiled {
  type: 'email';
  validations?: {
    minLength?: ValidatorSettings<number>;
    maxLenght?: ValidatorSettings<number>;
  };
}

interface FileField extends CommonFiled {
  type: 'file';
  validations?: {
    maxSizeKb?: ValidatorSettings<number>;
    allowedFormats?: ValidatorSettings<string>;
    maxFiles?: ValidatorSettings<number>;
  };
}

interface ImageField extends CommonFiled {
  type: 'image';
  validations?: {
    maxSizeKb?: ValidatorSettings<number>;
    allowedFormats?: ValidatorSettings<string>;
    maxFiles?: ValidatorSettings<number>;
  };
}

interface MonthField extends CommonFiled {
  type: 'month';
}

interface NumberField extends CommonFiled {
  type: 'number';
  validations?: {
    min: ValidatorSettings<number>;
    max: ValidatorSettings<number>;
  };
}

interface PasswordField extends CommonFiled {
  type: 'password';
  validations?: {
    minLength?: ValidatorSettings<number>;
    maxLenght?: ValidatorSettings<number>;
    haveSymbols?: ValidatorSettings<boolean>;
    haveCapitalLetters?: ValidatorSettings<boolean>;
    haveNumbers?: ValidatorSettings<boolean>;
  };
}

interface RadioField extends CommonFiled {
  type: 'radio';
  options: Array<{
    name: string;
    label: string;
  }>;
}

interface RangeField extends CommonFiled {
  type: 'range';
  validations?: {
    min?: ValidatorSettings<number>;
    max?: ValidatorSettings<number>;
  };
}

interface TelField extends CommonFiled {
  type: 'tel';
  validations?: {
    minLength?: ValidatorSettings<number>;
    maxLenght?: ValidatorSettings<number>;
  };
}

interface TextField extends CommonFiled {
  type: 'text';
  validations?: {
    minLength?: ValidatorSettings<number>;
    maxLenght?: ValidatorSettings<number>;
  };
}

interface ToggleField extends CommonFiled {
  type: 'toggle';
}

interface TimeField extends CommonFiled {
  type: 'time';
  validations?: {
    min: ValidatorSettings<number>;
    max: ValidatorSettings<number>;
  };
}

interface UrlField extends CommonFiled {
  type: 'url';
  validations?: {
    minLength?: ValidatorSettings<number>;
    maxLenght?: ValidatorSettings<number>;
  };
}

```
