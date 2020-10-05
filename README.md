# caesar-cipher-cli-tool
How to start
1.git clone https://github.com/codefvcker/caesar-cipher-cli-tool.git
cd caesar-cipher-cli-tool
npm i
npm run build
Done!
Now you can run the app
Arguments
-s, --shift: a shift : Number: any
-i, --input: an input file : String: (encode/decode)
-o, --output: an output file : String
-a, --action: an action encode/decode : String
Remember! Action (encode/decode) and the shift are required.

Usage example:
$ node build/ -a encode -s 7 -i "./input.txt" -o "./output.txt"

$ node build/ --action encode --shift 7 --input plain.txt --output encoded.txt

$ node build/ --action decode --shift 7 --input decoded.txt --output plain.txt
