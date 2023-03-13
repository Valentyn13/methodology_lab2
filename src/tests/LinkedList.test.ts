import { LinkedList } from "../LinkedList";
describe('BaseLinkedList', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  describe('add', () => {
    test('should add a new element to the end of the list', () => {
      linkedList.add(1);
      expect(linkedList.toArray()).toEqual([1]);

      linkedList.add(2);
      expect(linkedList.toArray()).toEqual([1, 2]);
    });
  });

  describe('insert', () => {
    test('should insert a new element at the given index', () => {
      linkedList.add(1);
      linkedList.add(2);

      linkedList.insert(3, 1);
      expect(linkedList.toArray()).toEqual([1, 3, 2]);

      linkedList.insert(4, 0);
      expect(linkedList.toArray()).toEqual([4, 1, 3, 2]);
    });

    test('should throw an error if the index is out of bounds', () => {
      expect(() => linkedList.insert(1, -1)).toThrow();
      expect(() => linkedList.insert(1, 10)).toThrow();
    });
  });

  describe('deleteAll', () => {
    test('should delete all elements that match the given data', () => {
      linkedList.add(1);
      linkedList.add(2);

      linkedList.deleteAll(1);
      expect(linkedList.toArray()).toEqual([2]);
    });
  });

  describe('delete', () => {
    test('should delete the element at the given index', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);

      linkedList.delete(1);
      expect(linkedList.toArray()).toEqual([1, 3]);

      linkedList.delete(0);
      expect(linkedList.toArray()).toEqual([3]);
    });

    test('should throw an error if the index is out of bounds', () => {
      expect(() => linkedList.delete(-1)).toThrow();
      expect(() => linkedList.delete(10)).toThrow();
    });
  });

  describe('findFirst', () => {
    test('should return the index of the first element that matches the given data', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(1);

      expect(linkedList.findFirst(1)).toBe(0);
      expect(linkedList.findFirst(2)).toBe(1);
      expect(linkedList.findFirst(3)).toBe(-1);
    });
  });

  describe('findLast', () => {
    test('should return the index of the last element that matches the given data', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(1);

      expect(linkedList.findLast(1)).toBe(2);
      expect(linkedList.findLast(2)).toBe(1);
      expect(linkedList.findLast(3)).toBe(-1);
    });
  });

  describe('clear', () => {
    test('should remove all elements from the list', () => {
      linkedList.add(1);
      linkedList.add(2);

      linkedList.clear();
      expect(linkedList.toArray()).toEqual([]);
    });
  });

  describe('extend', () => {
    test('should extend the list', () => {
      linkedList.add(1);
      linkedList.add(2);
        const newList = new LinkedList<number>()
        newList.add(66)
      linkedList.extend(newList);
      expect(linkedList.toArray()).toEqual([1,2,66]);
    });
  });

  describe('length', () => {
    test('should return the length of the list', () => {
      linkedList.add(1);
      linkedList.add(2);
      expect(linkedList.size()).toEqual(2);
    });
  });

  describe('append', () => {
    test('should add a value to the end of the list', () => {
      linkedList.add(1);
      expect(linkedList.toArray()).toEqual([1]);
    });
  });
})