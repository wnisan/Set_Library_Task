class setLibrary<T> {

    private items: T[];

    constructor(items: T[] = []) {
        this.items = [...new Set(items)];
    }

    add(item: T): void {
        if(!this.has(item)) {
            this.items.push(item);
        }
    }

    has(item: T): boolean {
        return this.items.includes(item);
    }

    delete(item: T): boolean {
        const index = this.items.indexOf(item);
        if(index > -1) {
            this.items.splice(index,1);
            return true;
        }
        return false;
    }

    size(): number {
        return this.items.length;
    }

    toArray(): T[] {
        return [...this.items];
    }

    // Пересечение множеств
    intersectWith(otherSet: setLibrary<T>): setLibrary<T> {
        const commonItems: T[] = [];

        for (let i = 0; i < this.items.length; i++) {
            const currentItem = this.items[i];

            if (otherSet.has(currentItem)) {
                commonItems.push(currentItem);
            }
        }

        return new setLibrary(commonItems);
    }

    // Объединение множеств
    unionWith(otherSet: setLibrary<T>): setLibrary<T> {
        const allItems: T[] = [...this.items];
        const otherItems = otherSet.toArray();

        for (let i = 0; i < otherItems.length; i++) {
            const item = otherItems[i];

            if (!this.has(item)) {
                allItems.push(item);
            }
        }

        return new setLibrary(allItems);
    }

    // Проверка подмножества
    isSubsetOf(otherSet: setLibrary<T>): boolean {
        for (let i =0; i < this.items.length; i++) {
            const item = this.items[i];

            if(!otherSet.has(item)) {
                return false;
            }
        }

        return true;
    }

    // Проверка надмножества
    isSupersetOf(otherSet: setLibrary<T>): boolean {
        return otherSet.isSubsetOf(this);
    }

    // Разность множеств
    getDifference(otherSet: setLibrary<T>): setLibrary<T> {
        const differentItems: T[] = [];

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            if(!otherSet.has(item)) {
                differentItems.push(item);
            }
        }

        return new setLibrary(differentItems);
    }

    // Симметрическая разность
    symmetricDifferenceWith(otherSet: setLibrary<T>): setLibrary<T> {
        const onlyInThis = this.getDifference(otherSet);
        const onlyInOther = otherSet.getDifference(this);

        return onlyInThis.unionWith(onlyInOther);
    }

}

export default setLibrary;