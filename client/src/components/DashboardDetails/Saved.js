import React from 'react';
// styling
import "./DashboardDetails.css";
import { Card, Table } from 'react-bootstrap';
import PlaceHolderImage from "../Description/placeholder.png"

function Saved() {
  return (
    <Card.Body className="savedCard">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <img 
                className="descriptionImage" 
                src={PlaceHolderImage} 
                alt="placeholder">
              </img>
            </td>
            <td>Attraction Name</td>
            <td>Location</td>
          </tr>
          <tr>
            <td>
              <img 
                className="descriptionImage" 
                src={PlaceHolderImage} 
                alt="placeholder">
              </img>
            </td>
            <td>Attraction Name</td>
            <td>Location</td>
          </tr>
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default Saved;
