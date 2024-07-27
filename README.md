
# Cocktail Drinks Fetching

## Overview

Cocktail Drinks Fetching is a React web application that allows users to search for and view cocktail recipes. The application fetches data from TheCocktailDB API and displays a list of cocktails based on user input.

## Features

- **Home Page**: Search for cocktails by name and view the list of matching drinks.
- **Cocktail Details**: View detailed information about each cocktail.
- **About Page**: Learn more about the application.


## Technologies Used

- **React**: For building the user interface.
- **React Router DOM**: For handling routing within the application.
- **Axios**: For making HTTP requests to TheCocktailDB API.
- **TailwindCSS**: For styling the application with a utility-first CSS framework.
- **Vite**: For fast development and build tooling.

## Installation

 1. **Clone the repository**:

   ```bash
   git clone https://github.com/ermias-tesfaye/cocktail-drinks.git
   ```

 2. **Navigate into the project directory**
```bash
   cd cocktail-drinks
```

 3. **Install the dependencies**
 ```bash
 npm install
```

 4. **Run the development server**
 ```bash
 npm run dev
 ```
The application will be available at `http://localhost:3000`.

## API

The application uses TheCocktailDB API to fetch cocktail data. The API endpoint used is:

[CocktailDB API](www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita)

`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`

Replace `{name}` with the search term to get cocktail data.
