# Syntatical
Use JavaScript differently

By [Safyre Lyons](https://safyrelyons.com)

## Install:
`npm i syntatical`

## Functions
`print` - Writes in console

`printf` - Writes in console

`write` - Writes in console

`rand_num` - Gets a random number from x value

`rand` - Gets a random arg from an array

`stop_app` - Stops the file

`lower_all` - Lowercases all upercase in string

`limit` - Limits a string

`upper_all` - Uppercases all lowercase in string

`match` - Finds a match

`arr_buff` - Counts args in array

`arr_join` - Joins array into string

`str_split` - Splits string into array

## Syntax
```javascript

var s = require('syntatical');
var e = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
var r = "ULTRA COOL UPPERCASE THING!"
var ls = "rather long strings are annoying, so therefore I developed syntatical, to make longer strings shorter with less code. I also let this app do other things"

s.write('one')
s.print('two')
s.printf('three')

s.rand_num(1000)
s.rand(e)

s.stop_app()

s.lower_all(r)

s.limit(ls, 5)

s.upper_all(ls)

s.str_split(ls)

s.match(ls, /string/)
```
