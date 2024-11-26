import { useEffect } from "react";
import * as d3 from "d3";
import { prepareData } from './chart-utils';

// Define the diameter of the pie
const diameter = 100;

// Define the margin
const margin = {
    top: 10, right: 10, bottom: 10, left: 10,
};

// Define the width and height using the margin conventions
const width = 2 * diameter + margin.left + margin.right;
const height = 2 * diameter + margin.top + margin.bottom;

// Define the radius
const radius = Math.min(width, height) / 2;

const drawChart = (data) => {
    // Supprimer l'ancien svg s'il existe
    d3.select('#pie-container')
        .select('svg')
        .remove();

    const largeur = 450;
    const hauteur = 450;
    const marge = 40;

    // Le rayon du graphique est la moitié de la largeur ou de la hauteur (le plus petit). On soustrait un peu de marge.
    const rayon = Math.min(largeur, hauteur) / 2 - marge;

    // Ajouter l'objet svg au div appelé 'pie-container'
    const svg = d3.select('#pie-container')
        .append('svg')
        .attr('width', largeur)
        .attr('height', hauteur)
        .append('g')
        .attr('transform', `translate(${largeur / 2},${hauteur / 2})`);

    // Créer l'échelle de couleurs
    const couleur = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.schemeCategory10);

    // Calculer la position de chaque groupe sur le graphique
    const pie = d3.pie()
        .sort(null)
        .value(d => d.value);

    const data_ready = pie(data);

    // Fonction pour créer les arcs
    const arc = d3.arc()
        .innerRadius(rayon * 0.5)         // Taille du trou de l'anneau
        .outerRadius(rayon * 0.8);

    // Construire le graphique en anneau
    svg.selectAll('tranches')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => couleur(d.data.name))
        .attr('stroke', 'white')
        .style('stroke-width', '2px')
        .style('opacity', 0.7);

    //     // Ajouter les étiquettes
    //     svg.selectAll('etiquettes')
    //         .data(data_ready)
    //         .enter()
    //         .append('text')
    //         .text(d => d.data.name)
    //         .attr('transform', d => `translate(${arc.centroid(d)})`)
    //         .style('text-anchor', 'middle')
    //         .style('font-size', '12px');
    // };

    svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .selectAll()
        .data(pie(data))
        .join("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .call(text => text.append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .text(d => d.data.name))
        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
            .attr("x", 0)
            .attr("y", "0.7em")
            .attr("fill-opacity", 0.7)
            .text(d => d.data.value.toLocaleString("en-US")));
};

export default function D3PieChart({
    data,
}) {
    // useEffect is a hook that will run the code inside it only once when data is loaded
    useEffect(() => {
        // transform data
        const preparedData = prepareData(data);

        // draw the chart
        drawChart(preparedData);
    }, [data]);

    return (
        // Return the div that will contain the chart
        <div id="pie-container" />
    );
}