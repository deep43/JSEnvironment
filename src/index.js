/**
 * Created by dhazra on 11/26/2017.
 */
import '../index.css';
import numeral from 'numeral';

/*eslint-disable no-console*/

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I wouuld pay ${courseValue} for this course`);