// @flow strict

import { createSelector } from 'reselect';
import * as selectors from '../basic';
import type { ReduxState, SearchResults, Line } from 'src/models';

function sortLinesByProcessTS() {

}

const sortByProcessTS  = createSelector(
  selectors.getLogLines,
  function(lines: Line[]): Line[] {
    return lines.slice(0, 10);
  }
);

// function makeRegexp(regexp: ?string, caseSensitive: boolean): ?RegExp {
//   try {
//     if (regexp == null || regexp === '') {
//       return new RegExp('');
//     }

//     if (!caseSensitive) {
//       return new RegExp(regexp, 'i');
//     }
//     return new RegExp(regexp);
//   } catch (_e) {
//     return null;
//   }
// }

// const search = createSelector(
//   selectors.getLogViewerSearchTerm,
//   getFilteredLineData,
//   selectors.getLogViewerSettingsCaseSensitive,
//   function(searchTerm: string, lines: Line[], caseSensitive: boolean): SearchResults {
//     const filteredLines = lines;
//     const findRegexp = makeRegexp(searchTerm, caseSensitive);
//     if (findRegexp == null) {
//       return [];
//     }
//     return filteredLines
//       .filter((line) => findRegexp.test(line.text))
//       .map((line) => line.lineNumber);
//   }
// );

export default function(state: ReduxState) {
  return sortByProcessTS(state);
}
