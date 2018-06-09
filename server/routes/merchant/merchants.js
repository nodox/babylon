"use strict";

const config = require("../../config");
const stripe = require("stripe")(config.stripe.secretKey);
const router = require("express").Router();
const request = require("request");
const querystring = require("querystring");
const Merchant = require("../../models/merchant");
const Item = require("../../models/item");
const Order = require("../../models/order");

/**
 *
 */


  });
});

/**
 *
 */
      },
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
