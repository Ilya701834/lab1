## CLI tool

### Downloading and installing NPM modules

```
$ git clone https://github.com/Ilya701834/lab1.git
```

```
$ cd lab1
```

```
$ npm i
```

### (optional) Installing the application as an NPM module

```
$ [sudo] npm i -g ./
```

### Usage example:

CLI tool accept 3 options:

1. -i, --input: an input file
2. -o, --output: an output file
3. -t, --task: To select task1 or task2

explanation:

* task task1 - strictEqual function
* task task2 - twosDifference function

task1 inputTask1.txt to outputTask1.txt :

```
$ [node] index  -i "inputTask1.txt" -o "./outputTask1.txt" -t task1
```

task2 inputTask2.txt to outputTask2.txt :

```
$ [node] index --input inputTask2.txt --output outputTask2.txt --task task2
```

task1 stdin to stdout:

```
$ [node] index --task task1
```

task2 stdin to stdout:

```
$ [node] index --task task2
```