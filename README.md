<h1 align="center">Data generator</h1>

***
![logo](https://www.kiit.ru/upload/resize_cache/iblock/4f3/735_100_1/4f3ebc249234f94eea280bf54e47eed1.jpg)

---
## About app
The application will be used to generate test data. These test data can be used both to test the logic of the system on a large range of values, and to fix the script for mass testing.

---
##  Input data for generation:
>- Name - unique name line
>- Type - data type (Number, String, Boolean, Float, Date, DateTime )
>- Pattern - pattern generation
>>- We have 4 types of patterns:
    >>  - {{}} - the first one is used to generate strings.
>>  -  {{.2}} - the second generates floating point numbers with a given number of numbers after the decimal point
>>  -  {{2.1}} - generates floating point numbers with the specified number of decimal places, as well as with the specified number of integers
>>  - {{2}} - generation of integers
>- GenType - each data type has its own generation types:
>>  - Generation types for integers
      >>    - Iterate over a range of number
>>    - Random in a range of numbers
>>    - Random in the normal distribution of random numbers
>>  - Generation types for floating point numbers
      >>    - the same as for integers
>>  - Generation types for booleans
      >>    - Static value
>>    - Iteration
>>    - Random with probability
>>  - Generation types for strings
      >>    - Random selection from a range, with a change after N steps
>>    - Sequential selection from a range with a value change after N steps.
>>    - Sequential reverse selection from the range with changing the value after N steps.
>>    - Random selection from a range, with a separate probability for each row, changing after N steps.
***

## View of generation settings
![](1.png)

---
## Description (further expand the description)
Thus, after entering all the settings (you can save them if you wish).
Click "start generation", a "json" or "csv" file with the generation results will be generated.





***
# Datagen
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

---
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

