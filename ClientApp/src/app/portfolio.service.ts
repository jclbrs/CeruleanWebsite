import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioCard } from './portfolio-card';
import { PORTFOLIOITEMS} from './mock-portfolio-items';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolioItems(): Observable<PortfolioCard[]> {
    const portfolioItems = of(PORTFOLIOITEMS);
    return portfolioItems;
  }
}
