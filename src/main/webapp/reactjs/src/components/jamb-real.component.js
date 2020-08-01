import {appendScript} from '../utils/appendScript'
import {removeScript} from '../utils/removeScript'
import Jamb from './jamb.component';

export default class JambReal extends Jamb {
    componentDidMount () {
        removeScript("public/jamb-fake.js")
        appendScript("public/jamb-real.js");
    }
    componentWillUnmount () {
        removeScript("public/jamb-real.js")
    }
}