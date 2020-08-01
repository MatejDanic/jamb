import {appendScript} from '../utils/appendScript'
import {removeScript} from '../utils/removeScript'
import Jamb from './jamb.component';

export default class JambFake extends Jamb {
    componentDidMount () {
        removeScript("public/jamb-real.js")
        appendScript("public/jamb-fake.js");
    }
    componentWillUnmount () {
        removeScript("public/jamb-fake.js")
    }
}