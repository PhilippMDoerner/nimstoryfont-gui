import { Type } from '@angular/core';
import { ArgTypes } from '@storybook/types';
import { ICollection } from '../types';
/**
 * Converts a component into a template with inputs/outputs present in initial props
 * @param component
 * @param initialProps
 * @param innerTemplate
 */
export declare const computesTemplateFromComponent: (component: Type<unknown>, initialProps?: ICollection, innerTemplate?: string) => string;
/**
 * Converts a component into a template with inputs/outputs present in initial props
 * @param component
 * @param initialProps
 * @param innerTemplate
 */
export declare const computesTemplateSourceFromComponent: (component: Type<unknown>, initialProps?: ICollection, argTypes?: ArgTypes) => string;
