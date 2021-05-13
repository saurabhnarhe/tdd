# Practical Test Driven Development Series with Node.js

This repository contains code for practical test driven development educational series.

## Birthday service

Youtube:

### Requirement

As you’re a very friendly person, you would like to send a birthday note to all the friends you have.

But you have a lot of friends and a bit lazy, it may take some times to write all the notes by hand.

The good news is that computers can do it automatically for you.

Imagine you have a json file with all your friends :

```
[
    {
        "firstName": "John",
        "lastName": "Doe",
        "dateOfBirth": 1997/10/19,
        "email": "john.doe@gmail.com"
    },
    {
        "firstName": "Mary",
        "lastName": "Ann",
        "dateOfBirth": 1995/03/09,"email": "mary.ann@foobar.com"
    }
]
```

And you want to send them a happy birthday email on their birth date :

```
 Subject: Happy birthday!
 Body: Happy birthday, dear <first_name>!
```

---

**NOTE**
This branch contains code for part 1 of the solution
