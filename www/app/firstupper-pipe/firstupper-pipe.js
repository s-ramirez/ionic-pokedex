import {Injectable, Pipe} from 'angular2/angular2';

@Pipe ({
    name: 'firstupper'
})
@Injectable()
export class FirstupperPipe {
    transform(word, args) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
