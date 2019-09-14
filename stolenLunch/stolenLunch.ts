function stolenLunch(note: string): string {
    const code = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const noteArr: any[] = note.split('');

    for (let i = 0; i < note.length; i++) {
        if (!isNaN(parseInt(note[i]))) {
            noteArr[i] = code[parseInt(note[i])];
        } else if (code.includes(note[i])) {
            noteArr[i] = code.indexOf(note[i]);
        }
    }

    return noteArr.join('');
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));