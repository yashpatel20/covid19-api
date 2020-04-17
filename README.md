# Covid19-API

It is a REST api for covid-19 data such as cases, deaths, recoveries of Indian states and most affected countries in the world.

## Installation

The api uses mongoDB for database. Create a dotenv with MONGODB_URI and PORT config variables.

Add the config variables and save the file

```bash
cd covid19-api
nano .env
```

Then install all the dependencies

```bash
npm install
```

## Usage

The production api is hosted on http://159.65.152.207/api/covid19

Or run it on your localhost with nodemon

```bash
npm run dev
```

## Endpoints

/api/covid19 : world and india overview

api/covid19/India : indian states

/api/covid19/World : all countries

/api/covid19/IndiaTS : time series of cases in india

## Contributing

I am a budding full stack engineer and would greatly appreciate any contributions or suggestions.
