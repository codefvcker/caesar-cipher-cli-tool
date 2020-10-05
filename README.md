# caesar-cipher-cli-tool

---

## How to start

1.git clone https://github.com/codefvcker/caesar-cipher-cli-tool.git

2.cd caesar-cipher-cli-tool/caesar-cipher-cli

3.npm i

4.Done!

## Now you can run the app

#### Arguments

`-s, --shift:` a shift : Number: any

`-i, --input:` an input file : String: (encode/decode)

`-o, --output:`an output file : String

`-a, --action:` an action encode/decode : String

_Remember! Action (encode/decode) and the shift are required._

#### Usage example:

-`$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"`

-`$ node index.js --action encode --shift 7 --input plain.txt --output encoded.txt`

-`$ node index.js --action decode --shift 7 --input decoded.txt --output plain.txt`
