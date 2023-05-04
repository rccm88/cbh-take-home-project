const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  test('Returns the partition key passed as parameter if it is a string with less than 257 characters long', () => {
    const partitionKey = 'test-key';
    const result = deterministicPartitionKey({ partitionKey: partitionKey });
    expect(result).toBe(partitionKey);
  });

  test('Returns a new partition key for parameters with no partitionKey element', () => {
    const event = {
      name: 'John Snow',
      age: 32,
      gender: 'male',
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('f13b9e5f0b1830fe3c64309af64c2f3e6bb972e3d7b4df96537a4c4b503ce126207d70cebd48f1937de9c430ea29bbc5e7f2dcd98b32feddf5e3ffb11d38b1cb');
  });

  test('Returns a new partition key if element passed as parameter exceeds 256 characters', () => {
    const event = {
      //partitionKey: 'a'.repeat(300),
      partitionKey: 'hdgjgfdjnhasdrigundpoivunadfbvnadfvobkiadunfbpidaunbadpfkbugnsdlkjfbndiunrgveargvad6g82ad4t86h4tfda68jf24j8fs2g4jbsfj6.841fjsf4j16sfn14j6nsf147jb6sf5g2jb4gj41bsf6j4sf617jfsb61bn4sf6jbs4f26js214fnkj841h6sd41th68dat4h6ath14 z6t8jh4fx 68jt4 fx83yk4 f86ykj4 xf68ykj4 0xf68yk0 x4f6y8k4 g3h5k410 gx35l420g 3ul 420yi86uçl40d 38l 014h38çl4fh10 38lfd014hl38 dy410 l38df40l f l'
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('d31c200d62f7cc1463c59b390b1d5c710c9dc94cbe08fb51955d79c400b9a1fd6f0abc19456bead97f684171a607b4d8734e72b612b79366d9962dc3512745ca');
  });

  test('Returns a new partition key for a parameter with a partitionKey element that is not a string', () => {
    const event = {
      partitionKey: { element: 'element' },
    };
    const expectedPartitionKey = JSON.stringify(event.partitionKey);
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedPartitionKey);
  });

  test('Returns new partition key if parameter is an empty object', () => {
    const result = deterministicPartitionKey({});
    expect(result).toBe('c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862');
  });

  test('Returns new partition key if parameter is null', () => {
    const event = {
      partitionKey: null,
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2');
  });

});