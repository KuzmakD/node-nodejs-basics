import stream from 'stream';

const transform = async () => {
  const reverseText = new stream.Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join('') + '\n');
        callback();
    },
  });
  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
