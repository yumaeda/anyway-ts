import * as DateTimeUtility from './DateTimeUtility';

const weeks = DateTimeUtility.getWeekNames();
for (const week of weeks) {
    document.write(week + '<br>');
}

document.write(String(DateTimeUtility.getLastDateOfMonth(2018, 9)));
document.write('<br>');
document.write(String(DateTimeUtility.getDayOfWeek(2018, 9, 2)));
document.write('<br>');
document.write(DateTimeUtility.prependZeros(99, 5));

import * as UrlUtility from './UrlUtility';
document.write(UrlUtility.urlify('Les French Days, «Black Friday» à la française, commencent ce vendredi'));
