const parseArgs = () => {
  const argsAll = process.argv;
  const argsPrint = argsAll
    .slice(2)
    .map((value, index) =>
      !(index % 2 === 0) ? `is ${value},` : value.slice(2)
    )
    .join(' ')
    .slice(0, -1);

  console.log(argsPrint);
};

parseArgs();
