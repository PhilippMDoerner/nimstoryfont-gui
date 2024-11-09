import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'groupByFirstLetter', standalone: true })
export class GroupByFirstLetterPipe<T> implements PipeTransform {
  transform(
    itemArray: Array<T>,
    field: keyof T,
  ): { key: string; value: T[] }[] {
    const callback = (accumulator: any, item: any) => {
      const groupedFieldValue: string = item[field];
      const firstLetter: string = groupedFieldValue[0];
      if (accumulator.hasOwnProperty(firstLetter))
        accumulator[firstLetter].push(item);
      else accumulator[firstLetter] = [item];
      return accumulator;
    };
    const groupedObj = itemArray.reduce(callback, {});
    const result = Object.keys(groupedObj)
      .map((key) => ({ key, value: groupedObj[key] }))
      .sort((a, b) => (a.key > b.key ? 1 : -1));
    return result;
  }
}

@Pipe({ name: 'groupBy', standalone: true })
export class GroupByPipe<T> implements PipeTransform {
  transform(
    itemArray: Array<T>,
    groupProp: Exclude<keyof T, number | symbol>,
    subSortProp: Exclude<keyof T, number | symbol>,
    reverse: boolean = false,
  ): any {
    const callback = (accumulator: any, item: any) => {
      //grouped Field Value = The content of the field by which you're grouping.
      //item = The value being grouped
      //Accumulator = Object with groupedFieldValue as key and an array of items associated with that Field as value
      const groupedFieldValue = this.getFieldValue(groupProp, item);

      const hasGroupAlready = accumulator.hasOwnProperty(groupedFieldValue);
      if (hasGroupAlready) {
        accumulator[groupedFieldValue].push(item);
      } else {
        accumulator[groupedFieldValue] = [item];
      }

      return accumulator;
    };

    const groupedObj: { [key: string]: any[] } = itemArray.reduce(callback, {});
    const groupArray: { key: string; value: any[] }[] = Object.keys(
      groupedObj,
    ).map((key) => ({
      key,
      value: groupedObj[key],
    }));
    const sortedGroupArray: { key: string; value: any[] }[] = groupArray.sort(
      (group1, group2) =>
        group1.key.toLowerCase() < group2.key.toLowerCase() ? -1 : 1,
    );

    sortedGroupArray.forEach((group) => {
      const groupEntries: any[] = group.value;
      group.value = this.sortGroup(groupEntries, subSortProp);
    });

    return reverse ? sortedGroupArray.reverse() : sortedGroupArray;
  }

  private sortGroup<T>(
    group: T[],
    sortProperty: Exclude<keyof T, number | symbol>,
  ): T[] {
    return group.sort((val1: any, val2: any) => {
      let sortValue1 = this.getFieldValue(sortProperty, val1);
      const isStringProperty = typeof sortValue1 === 'string';
      if (isStringProperty) {
        sortValue1 = sortValue1.toLowerCase();
      }

      let sortValue2 = this.getFieldValue(sortProperty, val2);
      if (isStringProperty) {
        sortValue2 = sortValue2.toLowerCase();
      }
      return sortValue1 < sortValue2 ? 1 : -1;
    });
  }

  /**
   * Essentially evaluates an expression "item.field1.field2.field3" with fieldPath being "field1.field2.field3".
   * It iterates over the individual fields and goes through them one by one, returns the last field value.
   */
  getFieldValue<T>(fieldPath: string, item: T): any {
    /**Returns the field of a given item, even if it is nested within it */
    const keys: string[] = fieldPath.split('.');

    let currentValue: any = item;
    for (let key of keys) {
      currentValue = currentValue[key];
    }

    return currentValue;
  }
}
