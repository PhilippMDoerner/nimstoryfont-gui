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
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)) || f % 10 === 1 && !(f % 100 === 11))
        return 1;
    if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)) || f % 10 === Math.floor(f % 10) && (f % 10 >= 2 && f % 10 <= 4) && !(f % 100 >= 12 && f % 100 <= 14))
        return 3;
    return 5;
}
export default ["sr-Cyrl-XK", [["AM", "PM"], u, u], [["a", "p"], ["AM", "PM"], u], [["н", "п", "у", "с", "ч", "п", "с"], ["нед", "пон", "уто", "сре", "чет", "пет", "суб"], ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], ["не", "по", "ут", "ср", "че", "пе", "су"]], u, [["ј", "ф", "м", "а", "м", "ј", "ј", "а", "с", "о", "н", "д"], ["јан", "феб", "март", "апр", "мај", "јун", "јул", "авг", "септ", "окт", "нов", "дец"], ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"]], u, [["п.н.е.", "н.е."], ["п. н. е.", "н. е."], ["пре нове ере", "нове ере"]], 1, [6, 0], ["d.M.yy.", "d. M. y.", "d. MMMM y.", "EEEE, d. MMMM y."], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, u, u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00 ¤", "#E0"], "EUR", "€", "Евро", { "AUD": [u, "$"], "BAM": ["КМ", "KM"], "BYN": [u, "р."], "GEL": [u, "ლ"], "KRW": [u, "₩"], "NZD": [u, "$"], "PHP": [u, "₱"], "TWD": ["NT$"], "USD": ["US$", "$"], "VND": [u, "₫"] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ItQ3lybC1YSy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9sb2NhbGVzL3NyLUN5cmwtWEsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsMENBQTBDO0FBQzFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUVwQixTQUFTLE1BQU0sQ0FBQyxHQUFXO0lBQzNCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNuRixPQUFPLENBQUMsQ0FBQztJQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JOLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLENBQUM7QUFDVCxDQUFDO0FBRUQsZUFBZSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxjQUFjLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxrQkFBa0IsQ0FBQyxFQUFDLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWS5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbCh2YWw6IG51bWJlcik6IG51bWJlciB7XG5jb25zdCBuID0gdmFsLCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKSwgdiA9IHZhbC50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoLCBmID0gcGFyc2VJbnQodmFsLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKSwgMTApIHx8IDA7XG5cbmlmICh2ID09PSAwICYmIChpICUgMTAgPT09IDEgJiYgIShpICUgMTAwID09PSAxMSkpIHx8IGYgJSAxMCA9PT0gMSAmJiAhKGYgJSAxMDAgPT09IDExKSlcbiAgICByZXR1cm4gMTtcbmlmICh2ID09PSAwICYmIChpICUgMTAgPT09IE1hdGguZmxvb3IoaSAlIDEwKSAmJiAoaSAlIDEwID49IDIgJiYgaSAlIDEwIDw9IDQpICYmICEoaSAlIDEwMCA+PSAxMiAmJiBpICUgMTAwIDw9IDE0KSkgfHwgZiAlIDEwID09PSBNYXRoLmZsb29yKGYgJSAxMCkgJiYgKGYgJSAxMCA+PSAyICYmIGYgJSAxMCA8PSA0KSAmJiAhKGYgJSAxMDAgPj0gMTIgJiYgZiAlIDEwMCA8PSAxNCkpXG4gICAgcmV0dXJuIDM7XG5yZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1wic3ItQ3lybC1YS1wiLFtbXCJBTVwiLFwiUE1cIl0sdSx1XSxbW1wiYVwiLFwicFwiXSxbXCJBTVwiLFwiUE1cIl0sdV0sW1tcItC9XCIsXCLQv1wiLFwi0YNcIixcItGBXCIsXCLRh1wiLFwi0L9cIixcItGBXCJdLFtcItC90LXQtFwiLFwi0L/QvtC9XCIsXCLRg9GC0L5cIixcItGB0YDQtVwiLFwi0YfQtdGCXCIsXCLQv9C10YJcIixcItGB0YPQsVwiXSxbXCLQvdC10LTQtdGZ0LBcIixcItC/0L7QvdC10LTQtdGZ0LDQulwiLFwi0YPRgtC+0YDQsNC6XCIsXCLRgdGA0LXQtNCwXCIsXCLRh9C10YLQstGA0YLQsNC6XCIsXCLQv9C10YLQsNC6XCIsXCLRgdGD0LHQvtGC0LBcIl0sW1wi0L3QtVwiLFwi0L/QvlwiLFwi0YPRglwiLFwi0YHRgFwiLFwi0YfQtVwiLFwi0L/QtVwiLFwi0YHRg1wiXV0sdSxbW1wi0ZhcIixcItGEXCIsXCLQvFwiLFwi0LBcIixcItC8XCIsXCLRmFwiLFwi0ZhcIixcItCwXCIsXCLRgVwiLFwi0L5cIixcItC9XCIsXCLQtFwiXSxbXCLRmNCw0L1cIixcItGE0LXQsVwiLFwi0LzQsNGA0YJcIixcItCw0L/RgFwiLFwi0LzQsNGYXCIsXCLRmNGD0L1cIixcItGY0YPQu1wiLFwi0LDQstCzXCIsXCLRgdC10L/RglwiLFwi0L7QutGCXCIsXCLQvdC+0LJcIixcItC00LXRhlwiXSxbXCLRmNCw0L3Rg9Cw0YBcIixcItGE0LXQsdGA0YPQsNGAXCIsXCLQvNCw0YDRglwiLFwi0LDQv9GA0LjQu1wiLFwi0LzQsNGYXCIsXCLRmNGD0L1cIixcItGY0YPQu1wiLFwi0LDQstCz0YPRgdGCXCIsXCLRgdC10L/RgtC10LzQsdCw0YBcIixcItC+0LrRgtC+0LHQsNGAXCIsXCLQvdC+0LLQtdC80LHQsNGAXCIsXCLQtNC10YbQtdC80LHQsNGAXCJdXSx1LFtbXCLQvy7QvS7QtS5cIixcItC9LtC1LlwiXSxbXCLQvy4g0L0uINC1LlwiLFwi0L0uINC1LlwiXSxbXCLQv9GA0LUg0L3QvtCy0LUg0LXRgNC1XCIsXCLQvdC+0LLQtSDQtdGA0LVcIl1dLDEsWzYsMF0sW1wiZC5NLnl5LlwiLFwiZC4gTS4geS5cIixcImQuIE1NTU0geS5cIixcIkVFRUUsIGQuIE1NTU0geS5cIl0sW1wiSEg6bW1cIixcIkhIOm1tOnNzXCIsXCJISDptbTpzcyB6XCIsXCJISDptbTpzcyB6enp6XCJdLFtcInsxfSB7MH1cIix1LHUsdV0sW1wiLFwiLFwiLlwiLFwiO1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiRVwiLFwiw5dcIixcIuKAsFwiLFwi4oieXCIsXCJOYU5cIixcIjpcIl0sW1wiIywjIzAuIyMjXCIsXCIjLCMjMCVcIixcIiMsIyMwLjAwwqDCpFwiLFwiI0UwXCJdLFwiRVVSXCIsXCLigqxcIixcItCV0LLRgNC+XCIse1wiQVVEXCI6W3UsXCIkXCJdLFwiQkFNXCI6W1wi0JrQnFwiLFwiS01cIl0sXCJCWU5cIjpbdSxcItGALlwiXSxcIkdFTFwiOlt1LFwi4YOaXCJdLFwiS1JXXCI6W3UsXCLigqlcIl0sXCJOWkRcIjpbdSxcIiRcIl0sXCJQSFBcIjpbdSxcIuKCsVwiXSxcIlRXRFwiOltcIk5UJFwiXSxcIlVTRFwiOltcIlVTJFwiLFwiJFwiXSxcIlZORFwiOlt1LFwi4oKrXCJdfSxcImx0clwiLCBwbHVyYWxdO1xuIl19