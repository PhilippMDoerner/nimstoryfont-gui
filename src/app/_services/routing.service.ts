import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';

interface RouteNode {
  fullPath: string;
  route: Route;
}

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private NONE_STRING = 'None';
  private routeNodes = this.getRouteTree();

  constructor(private router: Router) {}

  public routeToPath(routeName: string, params: any = {}): void {
    const routePath: string = this.getRoutePath(routeName, params);
    const cleanedObjectUrl: string =
      this.replaceSpecialUnicodeCharacters(routePath);
    this.router.navigateByUrl(cleanedObjectUrl);
  }

  public getRoutePath(routeName: string, params: any = {}): string {
    let variableRoutePath = this.getVariableRoutePathByName(routeName);

    if (this.hasPathVariables(variableRoutePath)) {
      const variableNames: string[] =
        this.getPathVariableNames(variableRoutePath);
      for (let variableName of variableNames) {
        if (!params.hasOwnProperty(variableName)) {
          throw `Tried to create path for route ${routeName} but lacked parameter ${variableName}`;
        }

        if (params[variableName] === null) {
          params[variableName] = this.NONE_STRING;
        }
        variableRoutePath = variableRoutePath.replace(
          `:${variableName}`,
          params[variableName],
        );
      }
    }

    return `/${variableRoutePath}`;
  }

  public routeToErrorPage(error: number | any): void {
    if (typeof error !== 'number' && !error.hasOwnProperty('status')) {
      // this.warning.showWarning(error);
      throw 'Incorrect error input. The input does not contain an error status or an object with the error status. Can not route to error page without error status.';
    }

    if (typeof error !== 'number' && error.hasOwnProperty('status'))
      error = error.status;

    const errorStatusParam: string = `${error}`;
    this.routeToPath('error', { errorStatus: errorStatusParam });
  }

  public routeNameMatches(route: ActivatedRoute, routeName: string): boolean {
    const routeData = route.snapshot.data;
    return routeData['name'] === routeName;
  }

  /**
   * Replaces special characters with their % Equivalent, as otherwise they cause problems in router.navigatebyUrl
   * @param {string} routePath - A route, such as /home
   * @returns {string} The same routePath as was given, but with special characters replaced
   */
  private replaceSpecialUnicodeCharacters(routePath: string) {
    return routePath
      .replace('(', '%28')
      .replace(')', '%29')
      .replace('?', '?')
      .replace('†', '%E2%80%A0');
  }

  private getVariableRouteByName(routeName: string): RouteNode {
    const route = this.routeNodes[routeName];

    if (route == null) {
      throw `There is no route with the name ${routeName}. Please contact the Developer to use either a different route name or create a route for this name.`;
    }

    return route;
  }

  private getVariableRoutePathByName(routeName: string): string {
    const targetRouteObject = this.getVariableRouteByName(routeName);
    return targetRouteObject.fullPath as string;
  }

  private hasPathVariables(routePath: string): boolean {
    return routePath.includes('/:');
  }

  public hasRoutePath(routeName: string): boolean {
    const routesWithRouteName = this.routeNodes[routeName];
    return routesWithRouteName != null;
  }

  private getEndRoutes(route: Route, parentPath: string = ''): RouteNode[] {
    let path = '';
    if (!!parentPath && !!route.path) {
      path = `${parentPath}/${route.path}`;
    } else if (!!parentPath) {
      path = parentPath;
    } else if (!!route.path) {
      path = route.path;
    }
    const isEndRoute = route.children == null;
    if (isEndRoute) {
      return [{ route, fullPath: path }];
    } else {
      return (route.children as Routes)
        .map((route) => this.getEndRoutes(route, path))
        .flat();
    }
  }

  private getPathVariableNames(routePath: string): string[] {
    const routeSegments: string[] = routePath.split('/');
    const pathVariables: string[] = routeSegments.filter((segment: string) =>
      segment.startsWith(':'),
    );
    const variableNameStartIndex = 1;
    return pathVariables.map((segment) =>
      segment.slice(variableNameStartIndex),
    );
  }

  private getRouteTree(): { [key: string]: RouteNode } {
    const x = this.router.config
      .map((route) => this.getEndRoutes(route))
      .flat()
      .reduce(
        (acc, route) => {
          const routeName = route.route?.data?.['name'];
          if (routeName != null) {
            acc[routeName] = route;
          }
          return acc;
        },
        {} as { [key: string]: RouteNode },
      );
    console.log(Object.values(x).map((x) => x.fullPath));
    return x;
  }
}
