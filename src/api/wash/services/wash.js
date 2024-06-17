'use strict';

/**
 * wash service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wash.wash');
