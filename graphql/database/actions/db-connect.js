const knex = require("../mysql");

knex.raw("show schemas").then((res, err) => console.log(res));
