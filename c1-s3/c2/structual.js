function newAdvertisement(text) {
    return {
        text: text,
        clickCount: 0
    };
}
function markAdAsClicked(ad) {
    ad.clickCount += 1;
}
var ad = {
    text: "this is a super course about TypeScript",
    clickCount: 0
};
var ad2 = newAdvertisement("this is a second ad");
markAdAsClicked(ad);
markAdAsClicked(ad2);
console.log(ad);
console.log(ad2);
