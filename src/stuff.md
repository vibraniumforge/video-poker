- longer readme
- remove comments
- what is in the playing cards folder?
- too many lets where you could use const

#### App
- paytable and coin amounts - if they don't change they aren't state
- what is increment bet amount logic
- get rid of initial deal method, generate deck on component mount if possible
- can you move deal logic and judge hand to card helpers so componnets are only presentational
- multiple toggle modal functions is repetitive
  - can you combine logic with a dynamic modal name arg
- judge hand is too long, remove some logs
  - why are you using index of in an object, can't you just use the keys
- nested logic for hand-result necessary?

#### ButtonLine/Card
- has a lot of button logic, experiment with button components or functions
  - passing in text and classnames?

#### CardLogic
- returning text and hand value seems repetitive

#### CardHelpers
- sorthand should be able to sort with one value minus the other in one line. revisit js sort

#### Paytable
- why do you repeat the same code over and over. if you repeat something three ore more times, you need to dry it up

#### CSS
- break css into sections
- start thinking about modular css where sections and classes reflect general attributes that you mix and match for specific elements
 - paytable wouldn't be an element itself. you'd have margin classes and border classes to apply, etc