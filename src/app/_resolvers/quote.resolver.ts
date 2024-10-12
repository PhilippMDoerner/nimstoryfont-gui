import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { QuoteService } from '../_services/article/quote.service';

export const randomQuoteResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
) => {
  const quoteService = inject(QuoteService);
  const campaignName = route.params['campaign'] as string;
  const characterName = route.params['name'];
  quoteService.loadRandomQuote(campaignName, characterName);
};
