/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
export function parseCookieValue(cookieStr, name) {
    name = encodeURIComponent(name);
    for (const cookie of cookieStr.split(';')) {
        const eqIndex = cookie.indexOf('=');
        const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9jb29raWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUM5RCxJQUFJLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsS0FBSyxNQUFNLE1BQU0sSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxHQUM3QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDL0IsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llVmFsdWUoY29va2llU3RyOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuICBmb3IgKGNvbnN0IGNvb2tpZSBvZiBjb29raWVTdHIuc3BsaXQoJzsnKSkge1xuICAgIGNvbnN0IGVxSW5kZXggPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgIGNvbnN0IFtjb29raWVOYW1lLCBjb29raWVWYWx1ZV06IHN0cmluZ1tdID1cbiAgICAgIGVxSW5kZXggPT0gLTEgPyBbY29va2llLCAnJ10gOiBbY29va2llLnNsaWNlKDAsIGVxSW5kZXgpLCBjb29raWUuc2xpY2UoZXFJbmRleCArIDEpXTtcbiAgICBpZiAoY29va2llTmFtZS50cmltKCkgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llVmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==