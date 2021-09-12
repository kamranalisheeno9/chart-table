import React, { useState } from 'react';
import Chart from './chart'
import { Container, Table, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiTwotoneFrown } from 'react-icons/ai';
import './table.css'


    // Chart Data

const data = [
    { name: 'Institutions', stockHeld: '8.71B', value: 52.68, marketValue: '1.30T', color: "#430EDB" },
    { name: 'Corporation (Public)', stockHeld: '887.27M', value: 5.37, marketValue: '1.30T', color: "#E0BE17" },
    { name: 'Corporation (Private)', stockHeld: '347,109', value: 0.00, marketValue: '1.30T', color: "#646464" },
    { name: 'Individual/Insiders', stockHeld: '9.75M', value: 0.06, marketValue: '1.30T', color: "#3C3C3C" },
    { name: 'State Owned Shares', stockHeld: '6.64M', value: 0.04, marketValue: '1.30T', color: "#69D9A4" },
    { name: 'Public and Other', stockHeld: '6.92B', value: 41.85, marketValue: '1.30T', color: "#C7382C" },
    { name: 'Total', stockHeld: '16.53B', value: '100.00', marketValue: '1.30T', color: "" },

];


const Tables=()=> {

    return (
        <Container className="body-container" >
            <h3>OWNERSHIP</h3>
            <Row className="row">
                <Col className="table-data" md={8} >
                    <Table responsive  >
                        <thead>
                            <tr>
                                <th className="type">Type</th>
                                <th>Common Stock Held</th>
                                <th>% of Shares Outstanding</th>
                                <th>Market Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index) => {
                                return (
                                    <tr key={index}>

                                        <td className="title-bold"><AiTwotoneFrown className={`${index == 6 ? "hidden" : ""}`} style={{ color: data.color }} />  {data.name}</td>
                                        <td>{data.stockHeld}</td>
                                        <td>{data.value}%</td>
                                        <td>{data.marketValue}</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </Table>
                </Col >
                <Col md={4} className="charts" >
                    <Table className="chart-container"   >
                        <thead>
                            <tr>
                                <th>Compisition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Chart data={data} />

                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Tables;