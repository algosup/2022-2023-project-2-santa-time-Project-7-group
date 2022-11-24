# Database Testing on the 24/11/22

## Input format test
- Code post and country eg.("54000 france") return the correct place
- Non existent combination eg.("54105 USA") return best matching string
- Code post only eg.("54000") return something, but the country is random


## Special char
- chinese char works
- arabian char don't return anything
- null doesn't return anything
- Space (%20) doesn't return anything
- some special char (�) works 


## Extreme case
- 6000 chars, longer return, doesn't return anything
- 8000+ chars, error 403, string too long
- 128 thread request has no significant delay