import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CharacterStore } from '../campaign/pages/character-page/character-page.store';

export const characterResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
) => {
  const characterName = route.params['name'];
  inject(CharacterStore).loadCharacter(characterName);
};
