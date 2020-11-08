Die.MODIFIERS['ex'] = 'deadlandRoll'

Die.prototype.deadlandRoll = function (modifier) {
    //Go through each die and if you find a max value then roll another die and add that value to the initial result.
    let max = this.results.length
    for (let index = 0; index < max; index++) {
        let r = this.results[index];
        if (r.result == this.faces){
            while (true) {
                this.roll();
                let bonus = this.results[this.results.length - 1].result;
                r.result += bonus
                if (bonus < this.faces) break;
            };
        };
    };
    //Only keep the highest die.
    DiceTerm._keepOrDrop(this.results, 1, {keep: true, highest: true});
}