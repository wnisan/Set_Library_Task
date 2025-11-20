import setLibrary from './set-library';

const people1 = new setLibrary(['Michael','Eve','Sasha','Ulyana']);
const people2 = new setLibrary(['Ulyana','Masha','Sasha','Nika','Victor']);

const setA = new setLibrary([1,2,3,4]);
const setB = new setLibrary([6,4,3,8]);

// Пересечение множеств
const commonPeople = people1.intersectWith(people2);
console.log("Common names: ", commonPeople.toArray());

const commonnumbers = setA.intersectWith(setB);
console.log("Common numbers: ", commonnumbers.toArray());

// Объединение множеств
const allPeople = people1.unionWith(people2);
console.log("All names: ", allPeople.toArray());

const allnumbers = setA.unionWith(setB);
console.log("All numbers: ", allnumbers.toArray());

//
const setC = new setLibrary([1,2,8]);
const setD = new setLibrary([6,2,3,8,1]);

// Проверка подмножества
console.log("Set c in set d?: ", setC.isSubsetOf(setD));
console.log("Set d in set c?: ", setD.isSubsetOf(setC));

// Проверка надмножества
console.log("Does the set c contain the set d?: ", setC.isSupersetOf(setD));
console.log("Does the set d contain the set c?: ", setD.isSupersetOf(setC));

// Разность множеств
const onlyPeople1 = people1.getDifference(people2);
console.log("Only People in 1 group: ", onlyPeople1.toArray());

const onlyPeople2 = people2.getDifference(people1);
console.log("Only People in 2 group: ", onlyPeople2.toArray());

// Симметрическая разность
const uniquePeople = people1.symmetricDifferenceWith(people2);
console.log("Unique People: ", uniquePeople.toArray());