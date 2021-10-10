import React from 'react'
import PortfolioItem from './PortfolioItem'
import SectionTitle from './SectionTitle'

const Portfolio = () => {
    return (
        <section id="portfolio" class="portfolio-02 py-6">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle baslik="portfolio" aciklama="My Work"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <ul id="portfolio-filter" class="list-inline col-lg-12 portfolio-filter">
                    <li class="list-inline-item">
                        <a href="#" data-filter="*" class="active">All</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" data-filter=".webdesign">Web Design</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" data-filter=".mobiledesign">Mobile Design</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" data-filter=".seo">Seo</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" data-filter=".graphic">Graphic</a>
                    </li>
                </ul>
            </div>
            <div class="portfolio-items row">
                <div class="col-md-6 col-lg-4 portfolio-item seo">
                <PortfolioItem resim="assets/img/portfolio-01.png" baslik="My Work"/>
                </div>
                <div class="col-md-6 col-lg-4 portfolio-item graphic webdesign">
                <PortfolioItem resim="assets/img/portfolio-02.png" baslik="My Work"/>
                </div>
                <div class="col-md-6 col-lg-4 portfolio-item webdesign graphic">
                <PortfolioItem resim="assets/img/portfolio-03.png" baslik="My Work"/>
                </div>
                <div class="col-md-6 col-lg-4 portfolio-item mobiledesign webdesign">
                <PortfolioItem resim="assets/img/portfolio-04.png" baslik="My Work"/>
                </div>
                 <div class="col-md-6 col-lg-4 portfolio-item mobiledesign seo">
                 <PortfolioItem resim="assets/img/portfolio-05.png" baslik="My Work"/>
                </div>
                 <div class="col-md-6 col-lg-4 portfolio-item mobiledesign">
                 <PortfolioItem resim="assets/img/portfolio-06.png" baslik="My Work"/>
                </div>
            </div>
    </section>
    )
}

export default Portfolio
