#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Search Recipes on AllRecipes v4
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🍴
// @raycast.argument1 { "type": "text", "placeholder": "Search term" }

// Documentation:
// @raycast.author Your Name
// @raycast.authorURL https://yourwebsite.com
// @raycast.description Search for recipes on AllRecipes and display results with rendered thumbnails.

const axios = require('axios');
const cheerio = require('cheerio');

const searchQuery = process.argv.slice(2).join(' ');
const baseUrl = `https://www.allrecipes.com/search?q=${encodeURIComponent(searchQuery)}`;

axios
  .get(baseUrl)
  .then((response) => {
    const $ = cheerio.load(response.data);
    const recipes = [];

    // Extracting title, link, and thumbnail
    $('.mntl-card-list-card--extendable').each((i, element) => {
      const title = $(element).find('.card__title-text').text().trim();
      const link = $(element).attr('href');
      const thumbnail = $(element).find('img').attr('data-src') || $(element).find('img').attr('src');

      if (title && link && thumbnail) {
        recipes.push({ title, link, thumbnail });
      }
    });

    if (recipes.length > 0) {
      recipes.forEach((recipe, index) => {
        console.log(`---`);
        console.log(`### ${recipe.title}`);
        console.log(`![Thumbnail](${recipe.thumbnail})`);
        console.log(`[View Recipe](${recipe.link})`);
      });
    } else {
      console.log('No recipes found.');
    }
  })
  .catch((error) => console.error(`Error fetching recipes: ${error.message}`));

