'use strict';

/**
 * learning-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learning-item.learning-item');
