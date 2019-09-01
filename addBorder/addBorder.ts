function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.forEach((value, i) => {
        if (i !== 0) { picture[i] = `*${picture[i]}*` }
    });
    picture.push(wall);
    
    return picture;
}

console.log(addBorder(["abc", "ded"]));