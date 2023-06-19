FJSON Specification
----
Json based format for descriibing simple html forms

## Motivation
The standard describing the html form in json format is useful for communication between the backend and frontend.
This also makes it easier to create frameworks for forms

## Limitations
- This standard describes most of [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) defined in the [html specification](https://html.spec.whatwg.org/multipage/input.html#states-of-the-type-attribute), except `button`, `search`, `reset`, `submit`, and `hidden` but with additional `toogle` type. Also, it is acceptable to use the `custom` type for extend json with your own input types

https://github.com/Akiyamka/fjson/blob/33ad4df981da4db58f912d3b55e7dac87d8867f9/json.d.ts
