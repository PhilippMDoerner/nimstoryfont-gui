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
  private routeNodes: RouteNode[] = this.router.config
    .map((route) => this.getEndRoutes(route))
    .flat();

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
    const routesWithRouteName = this.getRoutesWithName(routeName);

    switch (routesWithRouteName.length) {
      case 1:
        return routesWithRouteName[0];
      case 0:
        throw `There is no route with the name ${routeName}. Please contact the Developer to use either a different route name or create a route for this name.`;
      default:
        throw `There is more than 1 route with the name ${routeName}. Please contact the Developer to ensure all routes have unique names.`;
    }
  }

  private getVariableRoutePathByName(routeName: string): string {
    const targetRouteObject = this.getVariableRouteByName(routeName);
    return targetRouteObject.fullPath as string;
  }

  private hasPathVariables(routePath: string): boolean {
    return routePath.includes('/:');
  }

  public hasRoutePath(routeName: string): boolean {
    const routesWithRouteName = this.getRoutesWithName(routeName);
    return routesWithRouteName.length > 0;
  }

  private getRoutesWithName(routeName: string): RouteNode[] {
    return this.routeNodes.filter((pathObject) => {
      const routeData = pathObject.route.data;
      if (routeData == null) {
        return false;
      }
      return routeData['name'] === routeName;
    });
  }

  private getEndRoutes(route: Route, parentPath: string = ''): RouteNode[] {
    const path = !!parentPath
      ? `${parentPath}/${route.path}`
      : (route.path as string);
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
}
