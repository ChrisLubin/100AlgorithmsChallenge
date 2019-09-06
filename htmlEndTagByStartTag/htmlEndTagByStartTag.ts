function htmlEndTagByStartTag(startTag: string): string {
    for (let i = 1; i < startTag.length; i++) {
        if (startTag[i] === ">" || startTag[i] === ' ') {
            const tag = startTag.split('').splice(1, i - 1).join('');
            return `</${tag}>`;
        }
    }
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))