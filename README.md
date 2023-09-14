## Store API

It is an API built using Express and MongoDB to list out various products offered by a dummy store.

## Endpoints

The various endpoints provided by the API are listed below.

| Endpoint           | description                                                                         |
| :----------------- | :---------------------------------------------------------------------------------- |
| `/products`        | returns a list of all products in the store (supports filtering, sorting, etc.)     |
| `/products/static` | returns a list of all products in the store (does not support any query parameters) |

## Query Parameters

Below is the list of query parameters supported by the `/products` endpoint.

| parameter        | description                                                                                                                  | example                                |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- |
| `featured`       | `true` if the item is featured                                                                                               | `featured=true`                        |
| `company`        | filter results by company name                                                                                               | `company=ikea`                         |
| `name`           | filter results by product name                                                                                               | `name=desk`                            |
| `numericFilters` | filter on a specific numerical condition (`<`, `<=`, `=`, `>` or `>=`). Available numerical fields are `price` and `rating`. | `numericFilters=price>100,rating>=4.0` |
| `sort`           | sort results by certain fields                                                                                               | `sort=rating,price`                    |
| `select`         | only returns the fields specified in this parameter                                                                          | `fields=name,price,rating`             |
| `page`           | page number                                                                                                                  | `page=2 (default 1)`                   |
| `limit`          | limits the number of products to be returned                                                                                 | `limit=20 (default 10)`                |

## Project Setup

In order to run the project, setup .env and set the MONGO_URI variable equal to the DB connection string.
