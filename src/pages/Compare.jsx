import React from 'react';
import { useLoaderData } from 'react-router';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    const characters = useLoaderData();

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    const data = Object.keys(characters[option1.value].capacities).map((key) => ({
        subject: key,
        [characters[option1.value].name]: characters[option1.value].capacities[key],
        [characters[option2.value].name]: characters[option2.value].capacities[key],
    }));


    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    data-testid='select-character-1'
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    data-testid='select-character-2'
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>


            <RadarChart outerRadius={120} width={500} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 8]} />
            <Radar name={characters[option1.value].name} dataKey={characters[option1.value].name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name={characters[option2.value].name} dataKey={characters[option2.value].name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
            </RadarChart>   

        </>
    );
};

export default CompareCharactersPage;