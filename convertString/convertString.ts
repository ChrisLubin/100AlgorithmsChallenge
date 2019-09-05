function convertString(s: string, t: string): boolean {
    const sIsLonger = s.length > t.length ? true : false;

    if (!sIsLonger) {
        for (let i = 0; i < s.length; i++) {
            const letter = s[i];

            for (let j = i; j < t.length; j++) {
                let temp;

                if (letter !== t[j]) {
                    temp = t.split('');
                    temp.splice(j, 1);
                    t = temp.join('');
                    j--;
                } else {
                    break;
                }
            }
        }

        return s === t ? true : false;
    } else {
        for (let i = 0; i < t.length; i++) {
            const letter = t[i];
    
            for (let j = i; j < s.length; j++) {
                let temp;

                if (letter !== s[j]) {
                    temp = s.split('');
                    temp.splice(j, 1);
                    s = temp.join('');
                    j--;
                } else {
                    break;
                }
            }
        }

        return s === t ? true : false;
    }
}

console.log(convertString('codefights', 'ceoydefthf5iyg5h5yts'));
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
