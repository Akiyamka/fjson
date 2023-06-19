FJSON Specification
----
Json based format for descriibing basic html forms

## Motivation
The standard describing the html form in json format is useful for communication between the backend and frontend.
This also makes it easier to create frameworks for forms

## Limitations
- This standard describes most of [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) defined in the [html specification](https://html.spec.whatwg.org/multipage/input.html#states-of-the-type-attribute), except `button`, `search`, `reset`, `submit`, and `hidden` but with additional `toogle` type. Also, it is acceptable to use the `custom` type for extend json with your own input types


```ts
type FJSON = {
  version: 1;
  fileds: Field[];
};

type Field = TextField;

interface CommonFiled {
  type: string;
  label: string;
  name: string;
  validations?: Record<string, string | number | ValidatorSettings>
  tip?: string;
  placeholder?: string;
  required?: boolean; // default: false
  disabled?: boolean; // default: false
  readOnly?: boolean; // default: false
}

interface ValidatorSettings {
  arguments: Array<string | number>;
  errorMessage: string; 
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
}

interface EmailField extends CommonFiled {
  type: 'email';
}

interface FileField extends CommonFiled {
  type: 'file';
}

interface ImageField extends CommonFiled {
  type: 'image';
}

interface MonthField extends CommonFiled {
  type: 'month';
}

interface NumberField extends CommonFiled {
  type: 'number';
}

interface PasswordField extends CommonFiled {
  type: 'password';
}

interface RadioField extends CommonFiled {
  type: 'radio';
}

interface RangeField extends CommonFiled {
  type: 'range';
  validations
}

interface TelField extends CommonFiled {
  type: 'number';
}

interface TextField extends CommonFiled {
  type: 'text';
}

interface ToggleField extends CommonFiled {
  type: 'toggle';
}

interface TimeField extends CommonFiled {
  type: 'time';
}

interface UrlField extends CommonFiled {
  type: 'url';
}

```
