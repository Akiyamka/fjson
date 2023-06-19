type FJSON = {
  version: 1;
  fileds: Field[];
};

type Field =
  | CheckboxField
  | ColorFiled
  | CustomFiled
  | DateFiled
  | EmailField
  | FileField
  | ImageField
  | MonthField
  | NumberField
  | PasswordField
  | RadioField
  | RangeField
  | TelField
  | TextField
  | TextAreaField
  | ToggleField
  | TimeField
  | SelectField
  | UrlField;
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

interface TextAreaField extends CommonFiled {
  type: 'text_area';
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

interface SelectField extends CommonFiled {
  type: 'select';
  options: Array<{
    name: string;
    label: string;
  }>;
  multiselect?: boolean; // default: false
  validations?: {
    minLength?: ValidatorSettings<number>;
    maxLenght?: ValidatorSettings<number>;
  };
}

