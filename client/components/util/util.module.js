'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('shopApp.util', [])
  .factory('Util', UtilService)
  .name;
