import { Component, OnInit } from '@angular/core';
import { PortfolioCard } from '../portfolio-card';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'cerulean-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioCards: PortfolioCard[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPortfolio();
  }

  getPortfolio(): void {
    this.portfolioService.getPortfolioItems()
      .subscribe(portfolioCards => this.portfolioCards = portfolioCards);
  }

}
