# MindArc's Frontend Assessment


## Run Locally

Clone the project

```bash
  git clone https://github.com/jakesoriano/frontend-assessment.git
```

Go to the project directory

```bash
  cd excercices
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Demo

### Exercise 1
Desktop
![Demo](https://i.ibb.co/qkXMTBj/chrome-capture-2023-11-17.gif)

Mobile
![Demo](https://i.ibb.co/5LY9VMF/chrome-capture-2023-11-17-1.gif)

### Exercise 2

![Demo](https://i.ibb.co/CswQD2D/chrome-capture-2023-11-17-2.gif)

## Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`

1. `'b' + 'a'` = ba
2. `+ + 'a` = NaN (Not-a-Number) - tries to convert 'a' string to a number
3. `'ba' + 'NaN'` = baNaN
4. `'baNaN' + 'a'` = baNaNa
5. `baNaNa.toLowerCase()` = banana