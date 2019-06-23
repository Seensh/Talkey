import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var Chart: any;
declare var WordCloud: any;
declare var $: any;

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  chart: any;
  chartTempoMedio = [];
  constructor() {
    this.chart = [];
  }

  ngOnInit() {


  }

  ngAfterViewInit() {
    var ctx = document.getElementById('canvas');
    var ctxTempoMedio = document.getElementById('canvasTempoMedio');

    //Volume de oportunidades
    this.chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Não Ganhas', 'Ganhas'],
        datasets: [{
          label: 'Quantidade',
          data: [195, 265],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(13, 165, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(18, 234, 0, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontColor: "white",
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              fontColor: "white",
              stepSize: 1,
              beginAtZero: true
            }
          }],
        }
      }
    });

    //Tempo médio de ligações
    var lineChartData = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
      datasets: [{
        label: 'Insucesso',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        fill: false,
        data: [11, 13, 9, 11, 14, 14.5, 11, 13, 13.4, 12]
        //yAxisID: 'y-axis-1',
      }, {
        label: 'Sucesso',
        borderColor: 'rgb(13, 165, 0)',
        backgroundColor: 'rgb(13, 165, 0)',
        fill: false,
        data: [7, 6, 5, 6, 7, 6, 7, 8, 5, 6.7],
        //yAxisID: 'y-axis-2'
      }]
    };

    this.chartTempoMedio = new Chart(ctxTempoMedio, {
      type: 'line',
      data: lineChartData,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: "white",
            }
          }],
          yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            //id: 'y-axis-1',
            ticks: {
              fontColor: "white",
            }
          }, {
            type: 'linear',
            display: true,
            position: 'right',
            // id: 'y-axis-2',

            gridLines: {
              drawOnChartArea: false,
            },
          }],
        }
      }
    });

    //Palavras mais utilizadas
    var db = [
      { "word": "inteligência", "freq": 40 },
      { "word": "vendas", "freq": 35 },
      { "word": "resultados", "freq": 34 },
      { "word": "alavancar", "freq": 33 },
      { "word": "prospecção", "freq": 30 },
      { "word": "leads", "freq": 26 },
      { "word": "sucesso", "freq": 24 },
      { "word": "aumento", "freq": 22 },
      { "word": "treinamentos", "freq": 21 },
      { "word": "exponencial", "freq": 20 },
      { "word": "indicadores", "freq": 19 },
      { "word": "performance", "freq": 18 },
      { "word": "metas", "freq": 17 },
      { "word": "valor", "freq": 17 },
      { "word": "disparar", "freq": 17 },
      { "word": "tecnologia", "freq": 16 },
      { "word": "inovadora", "freq": 15 },
      { "word": "cloud", "freq": 15 },
      { "word": "estratégia", "freq": 15 },
      { "word": "preço", "freq": 15 },
      { "word": "target", "freq": 14 },
      { "word": "fidelizar", "freq": 14 },
      { "word": "solução", "freq": 10 },
      { "word": "marketshare", "freq": 8 }]

    var list = [];
    for (var i in db) {
      list.push([db[i]["word"], db[i]["freq"]])
    }

    WordCloud.minFontSize = "30px";

    //Options da word cloud
    var options = {
      list: list,
      backgroundColor: "#272b34",
      gridSize: 20,
      weightFactor: 2,
      fontFamily: 'Finger Paint, cursive, sans-serif'
    };

    setTimeout(() => {
      //Ajustando tamanho do canvas de "Palavras mais utilizadas em ligações de sucesso"
      var canvas: any;
      var div = document.getElementById("nuvemPalavras");
      canvas = document.getElementById("word_cloud");
      canvas.width = div.offsetWidth;
      canvas.height = div.offsetHeight;

      //Renderizando Wordcloud
      WordCloud(document.getElementById('word_cloud'), options);
    }, 400);


  }

}
