## Running

Just open `index.html` on the browser 

## Regular Expression tips

`/\d/` Matches any digit character from 0 to 9. Equivalent to `[0-9]`.

`^` Matches the start of the string

`$` Matches the end of the string

`/^\d$/` Matches only one digit character

`/^\d*$/` Matches zero or any number of digits from the start of the string

`/^\d*$/` Matches one or more number of digits from the start of the string

`?` The optional operator. Matches zero or one of the preceding characters of the string

`/^\d{3}$/` Matches exactly three digits from the start of the string

`/^\d{3,5}$/` Matches three to five digits from the start of the string

`/^\d{3,}$/` Matches three or more digits from the start of the string

`/\w/` Matches word characters [a-z, 0-9, _ ] 

`/^\w{3,}$/` Matches three or more word characters 

`/^[5-9]{3}$/` Matches three numbers from 5 to 9

`/^[5-9A-D]{3}$/` Matches three characters from 5 to 9 or uppercase letters from A to D

`+` Matches 1 or more of the preceding token

`/^[1357ASDF]+$/` Matches a string with any of these characters

`/^[^fgv123]+$/` Rejects a string with any of these characters

`/^\d{3}-\d{3}-\d{4}$/` Matches three digits a dash (-) then three digits a dash (-) then four digits

`/^(\d{3}-)?\d{3}-\d{4}$/` With the optional (?) operator and the parenthesis for grouping, the string matches three digits dash four digits or three digits a dash (-) then three digits a dash (-) then four digits

`/^\w{3,15}@\w{2,15}[.]\w{2,5}$/` email validation, matches 3 to 15 word characters, then @, then 2 to 15 word characters then . then 2 to 5 word characters

`/^\w{3,15}@\w{2,15}[.]\w{2,5}([.]\w{2,5})?$/` email validation, matches 3 to 15 word characters, then @, then 2 to 15 word characters then a dot then 2 to 5 word characters, then an optional dot then 2 to 5 word characters

`/^(music|sport|movie|book)$/` Matches only one of those words

`/^is/` Matches if the string starts with `is`

`/is$/` Matches if the string ends with `is`

`/\bis\b/` Matches the whole word `is`. The `b` operator matches a word boundary position between a word character and non-word character or position 