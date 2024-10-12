import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CharacterService } from '../_services/article/character.service';

export const characterResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
) => {
  const characterService = inject(CharacterService);
  const campaignName = route.params['campaign'] as string;
  const characterName = route.params['name'];
  characterService.loadReadByParam(campaignName, { name: characterName });
};

export const characterListResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
) => {
  const characterService = inject(CharacterService);
  const campaignName = route.params['campaign'] as string;
  characterService.loadCampaignList(campaignName);
};
