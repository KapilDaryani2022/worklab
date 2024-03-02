'use client';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import DubaiGrowth from '../../../public/dubai-growth.webp';
import WorldMap from '../../../public/word-map.svg';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function WhyDubai() {
  const categories = ['China', 'India', "UAE's Non-Oil GDP", 'Jafza'];
  const formattedCategories = categories.map(category => '$' + category);
  const options = {
      chart: {
          type: 'bar'
      },
      title: {
          text: '',
          align: 'left'
      },
      xAxis: {
        categories: categories,
        title: {
            text: null
        },
        lineWidth: 0
      },
      tooltip: {
        formatter: function(this: Highcharts.TooltipFormatterContextObject): string {
          const yValue = typeof this.point.y !== 'undefined' ? this.point.y : 0; // Ensure yValue is defined
          return '<b>' + categories[this.point.x] + '</b><br/>' +
            '$' + Highcharts.numberFormat(yValue, 0, '.', ',') + 'B';
        }
      },
      yAxis: {
        gridLineWidth: 1,
        min: 0,
        tickInterval: 50,
        max: 500,
        title: {
            text: '',
            align: ''
        },
        labels: {
          formatter: function(this: Highcharts.AxisLabelsFormatterContextObject): string {
            let value = 0; // Default value to handle non-numeric cases
            if (typeof this.value !== 'undefined') {
              // Try parsing this.value as a number
              const parsedValue = parseFloat(String(this.value));
              if (!isNaN(parsedValue)) {
                // If parsing succeeds, assign parsed value to 'value'
                value = parsedValue;
              }
            }
            return '$' + Highcharts.numberFormat(value, 0, '.', ',') + 'B';
          },
          overflow: 'justify'
        }        
    },
      plotOptions: {
          bar: {
              color: '#D6DADF',
              borderRadius: 50, 
              border: 0,
              dataLabels: {
                  enabled: true
              },
              groupPadding: 0.1
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
      },
      credits: {
          enabled: false
      },
      series: [{
        data: [40.8, 36.8, {y: 425, color: '#64D898'}, 93]
    }]
  }

  return (
    <main>
      <section className='why-dubai-section'>
        <div className="container">
            <div className='heading-section'>
                <h1>Why Dubai?</h1>
                <p>Welcome to the heart of innovation, where Dubai's rapid and sustainable growth positions it as a global business and technology leader.</p>
            </div>
        </div>
      </section>
      <section className='dubai-growth-section'>
        <div className="container">
            <div className='dubai-growth-container'>
              <div>
                <h2>Dubai’s Growth</h2>
                <p>Welcome to the beating heart of innovation and opportunity – Dubai. </p>
                <p>A city that defies limits, experiencing an extraordinary 6% growth in non-oil external trade, surging to US$272 billion in the first nine months of 2019. As a key contributor, Dubai's free zones accounted for an impressive US$119 billion of that figure.</p>
              </div>
              <div>
                <Image src={DubaiGrowth} alt="DubaiGrowth" />
              </div>
            </div>
        </div>
      </section>
      <section className='global-section'>
        <div className="container">
            <h2>Global Recognition</h2>
            <p className="small">Dive into the global financial landscape where Dubai stands tall among the top 10 financial centers.</p>
            <WorldMap />
        </div>
      </section>
      <section className='market-growth-section'>
        <div className="container">
            <h2>Market Growth Figures</h2>
            <p className="small">Discover the multifaceted sectors propelling Dubai's GDP, including retail, wholesale, transport, storage, finance, insurance, manufacturing, and real estate.</p>
            <div className="market-growth--container">
              <div className="market-growth--div">
                <h3>16.73 m</h3>
                <p>Tourist arrivals in 2019, Rising by 5.1% from 2021</p>
              </div>
              <div className="market-growth--div">
                <h3>$12.7 b</h3>
                <p>Foreign direct investment in 2019, 135% Increase </p>
              </div>
              <div className="market-growth--div">
                <h3>23.8<span>%</span></h3>
                <p>Jebel Ali contribution to Dubai’s GDP</p>
              </div>
              <div className="market-growth--div">
                <h3>$12.7 b</h3>
                <p>Foreign direct investment in the UAE in 2019</p>
              </div>
            </div>
        </div>
      </section>
      <section className='e-Commerce-section'>
        <div className="container">
          <h2>e-Commerce and GDP</h2>
          <p className="small">Lorem ipsum dolor sit amet consectetur. Turpis non nec libero nisl blandit purus et ut quis.</p>
          <div className="e-Commerce--container">
            <div className="e-Commerce--item">
              <h3>Explosive Growth in E-commerce</h3>
              <p>Dubai's e-commerce market is set to skyrocket, reaching an impressive US$27.2 billion in the UAE alone by 2024</p>
            </div>
            <div className="e-Commerce--item">
              <h3>Driving GDP Beyond Borders</h3>
              <p>Dubai's e-commerce market is set to skyrocket, reaching an impressive US$27.2 billion in the UAE alone by 2024</p>
            </div>
            <div className="e-Commerce--item">
              <h3>Pro-Business Environment</h3>
              <p>Dubai's e-commerce market is set to skyrocket, reaching an impressive US$27.2 billion in the UAE alone by 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className='trade-partners'>
        <div className="container">
          <h2>Trade Partnerships</h2>
          <p className="small">Uncover the driving forces behind Dubai's growth as a trading powerhouse.</p>
          <div style={{ height: '350px' }} id="trade-partners--container">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <p className="small">China, contributing US$40.8 billion, takes the lead as the emirate's largest trading partner, closely followed by India with US$36.8 billion. Explore the significance of Jafza, the GCC's largest special economic zone, contributing 23.8% to the city's GDP.</p>
        </div>
      </section>
    </main>
  )
}