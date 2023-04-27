# Reservation App
<img src="./src/assets/app.gif" />

## Description
This is a reservation app built using Angular, Bootstrap, and .NET. It uses an Azure SQL database to store facility and product information. Swagger is used to post data to the backend. Users can reserve facilities by clicking a button that updates the database accordingly.

## Installation and Setup
To run this app, follow these steps:

<ol>
<li>Clone the repository to your local machine.</li>
<li>Navigate to the server folder in the root directory of the frontend app.</li>
<li>Run the .NET server using Visual Studio 2022.</li>
<li>Start the frontend app using VS Code.</li>
<li>Navigate to the app in your web browser.</li>
</ol>

## API Endpoints
The following API endpoints are available:

<ul>
<li>GET /api/Facilities</li>
Returns a list of facilities. The searchText query parameter can be used to filter the results.

<li>GET /api/Facilities/{id}</li>
Returns a specific facility by ID.

<li>POST /api/Facilities</li>
Adds a new facility to the database.

<li>PUT /api/Facilities/{id}</li>
Updates an existing facility by ID.

<li>DELETE /api/Facilities/{id}</li>
Deletes a facility by ID.
</ul>
