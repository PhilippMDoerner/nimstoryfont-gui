/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)))
        return 1;
    if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)))
        return 3;
    if (v === 0 && i % 10 === 0 || (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 5 && i % 10 <= 9)) || v === 0 && (i % 100 === Math.floor(i % 100) && (i % 100 >= 11 && i % 100 <= 14))))
        return 4;
    return 5;
}
export default ["ru-BY", [["AM", "PM"], u, u], u, [["В", "П", "В", "С", "Ч", "П", "С"], ["вс", "пн", "вт", "ср", "чт", "пт", "сб"], ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]], u, [["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."], ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]], [["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], ["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."], ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]], [["до н.э.", "н.э."], ["до н. э.", "н. э."], ["до Рождества Христова", "от Рождества Христова"]], 1, [6, 0], ["dd.MM.y", "d MMM y 'г'.", "d MMMM y 'г'.", "EEEE, d MMMM y 'г'."], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, u, u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "не число", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "BYN", "Br", "белорусский рубль", { "BYN": ["Br"], "GEL": [u, "ლ"], "PHP": [u, "₱"], "RON": [u, "L"], "RUB": ["₽"], "THB": ["฿"], "TMT": ["ТМТ"], "TWD": ["NT$"], "UAH": ["₴"], "XXX": ["XXXX"] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUtQlkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9ydS1CWS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBRXBCLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRWpHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0csT0FBTyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzTCxPQUFPLENBQUMsQ0FBQztJQUNiLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUVELGVBQWUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyx1QkFBdUIsRUFBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMscUJBQXFCLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWS5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbCh2YWw6IG51bWJlcik6IG51bWJlciB7XG5jb25zdCBuID0gdmFsLCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKSwgdiA9IHZhbC50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuXG5pZiAodiA9PT0gMCAmJiAoaSAlIDEwID09PSAxICYmICEoaSAlIDEwMCA9PT0gMTEpKSlcbiAgICByZXR1cm4gMTtcbmlmICh2ID09PSAwICYmIChpICUgMTAgPT09IE1hdGguZmxvb3IoaSAlIDEwKSAmJiAoaSAlIDEwID49IDIgJiYgaSAlIDEwIDw9IDQpICYmICEoaSAlIDEwMCA+PSAxMiAmJiBpICUgMTAwIDw9IDE0KSkpXG4gICAgcmV0dXJuIDM7XG5pZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IDAgfHwgKHYgPT09IDAgJiYgKGkgJSAxMCA9PT0gTWF0aC5mbG9vcihpICUgMTApICYmIChpICUgMTAgPj0gNSAmJiBpICUgMTAgPD0gOSkpIHx8IHYgPT09IDAgJiYgKGkgJSAxMDAgPT09IE1hdGguZmxvb3IoaSAlIDEwMCkgJiYgKGkgJSAxMDAgPj0gMTEgJiYgaSAlIDEwMCA8PSAxNCkpKSlcbiAgICByZXR1cm4gNDtcbnJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXCJydS1CWVwiLFtbXCJBTVwiLFwiUE1cIl0sdSx1XSx1LFtbXCLQklwiLFwi0J9cIixcItCSXCIsXCLQoVwiLFwi0KdcIixcItCfXCIsXCLQoVwiXSxbXCLQstGBXCIsXCLQv9C9XCIsXCLQstGCXCIsXCLRgdGAXCIsXCLRh9GCXCIsXCLQv9GCXCIsXCLRgdCxXCJdLFtcItCy0L7RgdC60YDQtdGB0LXQvdGM0LVcIixcItC/0L7QvdC10LTQtdC70YzQvdC40LpcIixcItCy0YLQvtGA0L3QuNC6XCIsXCLRgdGA0LXQtNCwXCIsXCLRh9C10YLQstC10YDQs1wiLFwi0L/Rj9GC0L3QuNGG0LBcIixcItGB0YPQsdCx0L7RgtCwXCJdLFtcItCy0YFcIixcItC/0L1cIixcItCy0YJcIixcItGB0YBcIixcItGH0YJcIixcItC/0YJcIixcItGB0LFcIl1dLHUsW1tcItCvXCIsXCLQpFwiLFwi0JxcIixcItCQXCIsXCLQnFwiLFwi0JhcIixcItCYXCIsXCLQkFwiLFwi0KFcIixcItCeXCIsXCLQnVwiLFwi0JRcIl0sW1wi0Y/QvdCyLlwiLFwi0YTQtdCy0YAuXCIsXCLQvNCw0YAuXCIsXCLQsNC/0YAuXCIsXCLQvNCw0Y9cIixcItC40Y7QvS5cIixcItC40Y7Quy5cIixcItCw0LLQsy5cIixcItGB0LXQvdGCLlwiLFwi0L7QutGCLlwiLFwi0L3QvtGP0LEuXCIsXCLQtNC10LouXCJdLFtcItGP0L3QstCw0YDRj1wiLFwi0YTQtdCy0YDQsNC70Y9cIixcItC80LDRgNGC0LBcIixcItCw0L/RgNC10LvRj1wiLFwi0LzQsNGPXCIsXCLQuNGO0L3Rj1wiLFwi0LjRjtC70Y9cIixcItCw0LLQs9GD0YHRgtCwXCIsXCLRgdC10L3RgtGP0LHRgNGPXCIsXCLQvtC60YLRj9Cx0YDRj1wiLFwi0L3QvtGP0LHRgNGPXCIsXCLQtNC10LrQsNCx0YDRj1wiXV0sW1tcItCvXCIsXCLQpFwiLFwi0JxcIixcItCQXCIsXCLQnFwiLFwi0JhcIixcItCYXCIsXCLQkFwiLFwi0KFcIixcItCeXCIsXCLQnVwiLFwi0JRcIl0sW1wi0Y/QvdCyLlwiLFwi0YTQtdCy0YAuXCIsXCLQvNCw0YDRglwiLFwi0LDQv9GALlwiLFwi0LzQsNC5XCIsXCLQuNGO0L3RjFwiLFwi0LjRjtC70YxcIixcItCw0LLQsy5cIixcItGB0LXQvdGCLlwiLFwi0L7QutGCLlwiLFwi0L3QvtGP0LEuXCIsXCLQtNC10LouXCJdLFtcItGP0L3QstCw0YDRjFwiLFwi0YTQtdCy0YDQsNC70YxcIixcItC80LDRgNGCXCIsXCLQsNC/0YDQtdC70YxcIixcItC80LDQuVwiLFwi0LjRjtC90YxcIixcItC40Y7Qu9GMXCIsXCLQsNCy0LPRg9GB0YJcIixcItGB0LXQvdGC0Y/QsdGA0YxcIixcItC+0LrRgtGP0LHRgNGMXCIsXCLQvdC+0Y/QsdGA0YxcIixcItC00LXQutCw0LHRgNGMXCJdXSxbW1wi0LTQviDQvS7RjS5cIixcItC9LtGNLlwiXSxbXCLQtNC+INC9LiDRjS5cIixcItC9LiDRjS5cIl0sW1wi0LTQviDQoNC+0LbQtNC10YHRgtCy0LAg0KXRgNC40YHRgtC+0LLQsFwiLFwi0L7RgiDQoNC+0LbQtNC10YHRgtCy0LAg0KXRgNC40YHRgtC+0LLQsFwiXV0sMSxbNiwwXSxbXCJkZC5NTS55XCIsXCJkIE1NTSB5ICfQsycuXCIsXCJkIE1NTU0geSAn0LMnLlwiLFwiRUVFRSwgZCBNTU1NIHkgJ9CzJy5cIl0sW1wiSEg6bW1cIixcIkhIOm1tOnNzXCIsXCJISDptbTpzcyB6XCIsXCJISDptbTpzcyB6enp6XCJdLFtcInsxfSwgezB9XCIsdSx1LHVdLFtcIixcIixcIsKgXCIsXCI7XCIsXCIlXCIsXCIrXCIsXCItXCIsXCJFXCIsXCLDl1wiLFwi4oCwXCIsXCLiiJ5cIixcItC90LXCoNGH0LjRgdC70L5cIixcIjpcIl0sW1wiIywjIzAuIyMjXCIsXCIjLCMjMMKgJVwiLFwiIywjIzAuMDDCoMKkXCIsXCIjRTBcIl0sXCJCWU5cIixcIkJyXCIsXCLQsdC10LvQvtGA0YPRgdGB0LrQuNC5INGA0YPQsdC70YxcIix7XCJCWU5cIjpbXCJCclwiXSxcIkdFTFwiOlt1LFwi4YOaXCJdLFwiUEhQXCI6W3UsXCLigrFcIl0sXCJST05cIjpbdSxcIkxcIl0sXCJSVUJcIjpbXCLigr1cIl0sXCJUSEJcIjpbXCLguL9cIl0sXCJUTVRcIjpbXCLQotCc0KJcIl0sXCJUV0RcIjpbXCJOVCRcIl0sXCJVQUhcIjpbXCLigrRcIl0sXCJYWFhcIjpbXCJYWFhYXCJdfSxcImx0clwiLCBwbHVyYWxdO1xuIl19