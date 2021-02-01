# SaiposNumberCipher

JS lib to encrypt / decrypt numbers based on a provided dictionary

## Encrypt number

```js script
const cipher = new saiposNumberCipher('abcdefghij')
cipher.encrypt(10)// returns ba
```

## Decrypt encrypted number

```js script
const cipher = new saiposNumberCipher('abcdefghij')
cipher.decrypt('ba')// returns 10
```