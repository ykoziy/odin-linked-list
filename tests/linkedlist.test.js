import LinkedList from '../linkedlist';

describe('LinkedList', () => {
  let list = null;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('size() returns 0 on empty list', () => {
    expect(list.size()).toBe(0);
  });

  test('size() returns correct count of nodes', () => {
    list.append(56);
    list.append(656);
    expect(list.size()).toBe(2);
  });

  test('head returns the first node', () => {
    list.append(56);
    list.append(656);
    expect(list.head().value).toBe(56);
  });

  test('head returns null on empty list', () => {
    expect(list.head()).toBeNull();
  });

  test('tail returns the last node', () => {
    list.append(56);
    list.append(656);
    expect(list.tail().value).toBe(656);
  });

  test('tail returns null on empty list', () => {
    expect(list.tail()).toBeNull();
  });

  test('toString returns correct string representing linked list', () => {
    list.append(56);
    list.append(65);
    list.append(5);
    expect(list.toString()).toBe('( 56 ) -> ( 65 ) -> ( 5 ) -> null');
  });

  test('toString returns "null" on empty linked list', () => {
    expect(list.toString()).toBe('null');
  });

  test('find(13) returns null since not found', () => {
    list.append(56);
    list.append(65);
    list.append(5);
    expect(list.find(13)).toBeNull();
  });

  test('find(5) returns 2', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    expect(list.find(5)).toBe(2);
  });

  test('find("Bob") returns 0', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    expect(list.find('Bob')).toBe(0);
  });

  test('contains("Bob") returns true', () => {
    list.append(6.3);
    list.append(90);
    list.append('Bob');
    list.append(5);
    list.append(76);
    list.append(34);
    expect(list.contains('Bob')).toBe(true);
  });

  test('contains("tea") returns false', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    expect(list.contains('tea')).toBe(false);
  });

  test('at(1) returns 6.3', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    expect(list.at(1)).toBe(6.3);
  });

  test('at(0) returns null', () => {
    expect(list.at(0)).toBeNull();
  });

  test('at(100) returns null, since invalid index', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    expect(list.at(100)).toBeNull();
  });

  test('prepend() appends to the front', () => {
    list.append(6.3);
    list.append(5);
    list.prepend('New York');
    expect(list.at(0)).toBe('New York');
    expect(list.at(1)).toBe(6.3);
    expect(list.at(2)).toBe(5);
    expect(list.size()).toBe(3);
  });

  test('prepend() appends to the front, on empty list', () => {
    list.prepend('New York');
    expect(list.head().value).toBe('New York');
    expect(list.tail().value).toBe('New York');
  });

  test('pop() removes last element', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    list.append(543);
    list.pop();
    list.pop();
    expect(list.size()).toBe(2);
  });

  test('pop() does nothing on empty list', () => {
    list.pop();
    expect(list.size()).toBe(0);
  });

  test('insertAt() inserts at correct index', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    list.append(66);

    list.insertAt('test', 2);

    expect(list.at(1)).toBe(6.3);
    expect(list.at(2)).toBe('test');
    expect(list.at(3)).toBe(5);
    expect(list.size()).toBe(5);
  });

  test('insertAt() inserts correctly at the end', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    list.append(66);

    list.insertAt('test', list.size());

    console.log(list.toString());

    expect(list.at(3)).toBe(66);
    expect(list.tail().value).toBe('test');
    expect(list.size()).toBe(5);
  });

  test('insertAt() inserts at correct index, empty list', () => {
    list.insertAt('test', 0);
    expect(list.at(0)).toBe('test');
    expect(list.size()).toBe(1);
  });

  test('removeAt() removes at correct index', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    list.append(66);
    list.append('end');

    list.removeAt(2);

    expect(list.at(1)).toBe(6.3);
    expect(list.at(2)).toBe(66);
    expect(list.at(3)).toBe('end');
    expect(list.size()).toBe(4);
  });

  test('removeAt() removes at the end correctly', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    list.append(66);
    list.append('end');

    list.removeAt(4);

    expect(list.at(2)).toBe(5);
    expect(list.tail().value).toBe(66);
    expect(list.size()).toBe(4);
  });

  test('removeAt() removes at the start correctly', () => {
    list.append('Bob');
    list.append(6.3);
    list.append(5);
    list.append(66);
    list.append('end');

    list.removeAt(0);

    expect(list.at(1)).toBe(5);
    expect(list.head().value).toBe(6.3);
    expect(list.size()).toBe(4);
  });

  test('removeAt() does nothing on invalid index', () => {
    list.append('Bob');
    list.append(6.3);

    list.removeAt(50);

    expect(list.size()).toBe(2);
  });

  test('removeAt() does nothing on empty list', () => {
    list.removeAt(0);
    expect(list.size()).toBe(0);
  });
});
