const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdn.on('readable', () => {
  const chunk = process.stdn.read();
  if (chunk != null ) {
    const buffer = Buffer.from([chunk]);
    console.log('with .toString function:', buffer.toString());
    console.log('With StringDecoder: function', decoder.write(buffer));
  }
});
