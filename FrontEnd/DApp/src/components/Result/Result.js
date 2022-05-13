import React from 'react'
import { PieChart } from "react-minimal-pie-chart";

const Result = () => {
    return (
        <div>
            <h2>Election Result Page</h2>
            <p>Election Id:1</p>
            <p>Election Name: Test</p>
            <div className='d-flex flex-column align-items-center'>
                <div className='py-5' style={{ maxWidth: "60%" }}>
                    <PieChart
                        data={[{
                            title: "Candidate 1",
                            value: 50,
                            color: "#00bcd4"
                        },
                        {
                            title: "Candidate 2",
                            value: 50,
                            color: "#ff9800"
                        },
                        {
                            title: "Candidate 3",
                            value: 50,
                            color: "#f44336"
                        }
                        ]}
                        label={(props) => {
                            const { dataEntry } = props;
                            // return `
                            //     ${dataEntry.title}
                            //     ${Math.round(dataEntry.percentage)}%
                            //   `;
                            if (dataEntry.percentage === 0) return "";
                            return `${Math.round(dataEntry.percentage)} %`;
                        }}
                        labelStyle={(index) => ({
                            fontSize: "5px",
                            textAlign: "center",
                            cursor: "pointer",
                        })}
                        startAngle={-90}
                        // segmentsShift={(index) => (index === selected ? 2 : 0)}
                        // onClick={(event, index) => {
                        //   setSelected(index === selected ? undefined : index);
                        // }}
                        animate
                    />
                </div>
            </div>
        </div>
    )
}

export default Result