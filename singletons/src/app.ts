import * as UrlUtility from './UrlUtility';
document.write(UrlUtility.urlify('Les French Days, «Black Friday» à la française, commencent ce vendredi'));

import * as UrlQuery from './UrlQuery';
UrlQuery.parse();
document.write('<br>');
document.write(UrlQuery.getValue('param1'));
document.write('<br>');
document.write(UrlQuery.getValue('param2'));
